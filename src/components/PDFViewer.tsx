import React, { useEffect, useRef, useState } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import type { PDFDocumentProxy } from "pdfjs-dist";

// Vite-compatible worker setup
GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.mjs",
  import.meta.url
).toString();

interface PDFViewerProps {
  file: string; // URL of PDF
  renderScale?: number; // optional multiplier for extra sharpness
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file, renderScale = 2 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!containerWidth) return;

    let renderTask: any;

    const loadPdf = async () => {
      try {
        // Detect Fireglass / restricted worker environments
        const isFireglass =
          typeof Worker === "undefined" ||
          navigator.userAgent.includes("Fireglass");

        const loadingTask = getDocument({
          url: file,
          disableWorker: isFireglass,
        } as any);

        const pdf: PDFDocumentProxy = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const devicePixelRatio = window.devicePixelRatio || 1;
        const unscaledViewport = page.getViewport({ scale: 1 });

        // Calculate final scale for crisp rendering
        const scale =
          (containerWidth / unscaledViewport.width) *
          devicePixelRatio *
          renderScale;
        const viewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");
        if (!context) return;

        // Set backing resolution
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // CSS size matches container
        canvas.style.width = `${viewport.width / (devicePixelRatio * renderScale)}px`;
        canvas.style.height = `${viewport.height / (devicePixelRatio * renderScale)}px`;

        context.clearRect(0, 0, canvas.width, canvas.height);

        // Render the page
        renderTask = page.render({
          canvasContext: context,
          viewport,
        });
        await renderTask.promise;

      } catch (err: any) {
        console.error("PDF render error:", err);
      }
    };

    loadPdf();

  }, [file, containerWidth, renderScale]);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <canvas ref={canvasRef} className="rounded-lg" style={{ borderRadius: "0.5rem" }} />
    </div>
  );
};

export default PDFViewer;
