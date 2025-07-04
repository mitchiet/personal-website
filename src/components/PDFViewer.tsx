import React, { useEffect, useRef, useState } from 'react';
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.mjs';
import type { PDFDocumentProxy } from 'pdfjs-dist';

interface PDFViewerProps {
  file: string;
}

const PDFViewer: React.FC<PDFViewerProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (entry.contentRect) {
            setContainerWidth(entry.contentRect.width);
          }
        }
      });

      resizeObserver.observe(containerRef.current);

      return () => resizeObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    if (!containerWidth) return;

    const loadPdf = async () => {
      GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.mjs',
        import.meta.url
      ).toString();

      const loadingTask = getDocument(props.file);
      const pdf: PDFDocumentProxy = await loadingTask.promise;
      const page = await pdf.getPage(1);

      const devicePixelRatio = window.devicePixelRatio || 1;
      const unscaledViewport = page.getViewport({ scale: 1 });

      // Scale to fit container width
      const scale = (containerWidth * devicePixelRatio) / unscaledViewport.width;
      const viewport = page.getViewport({ scale });

      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext('2d');
      if (!context) return;

      // Set high-res canvas size
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      // Style it to fit container width (CSS pixels)
      canvas.style.width = `${viewport.width / devicePixelRatio}px`;
      canvas.style.height = `${viewport.height / devicePixelRatio}px`;

      await page.render({
        canvasContext: context,
        viewport,
      }).promise;
    };

    loadPdf().catch(console.error);
  }, [props.file, containerWidth]);

  return (
    <div ref={containerRef} style={{ width: '100%', display: 'flex' }}>
      <canvas className="rounded-lg" ref={canvasRef} />
    </div>
  );
};

export default PDFViewer;
