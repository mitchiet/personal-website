import React from "react";

interface PDFViewerProps {
  file: string;
  height?: string | number;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file, height = "100%" }) => {
  return (
    <iframe
      src={file}
      title="PDF Viewer"
      style={{
        width: "100%",
        height: typeof height === "number" ? `${height}px` : height,
        border: "none",
        borderRadius: "0.5rem",
      }}
    />
  );
};

export default PDFViewer;
