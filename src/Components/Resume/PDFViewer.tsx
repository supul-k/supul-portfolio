import React from 'react';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'; 
import  pdfUrl  from '../../Assets/resume/resume.pdf';
import { version as pdfjsVersion } from 'pdfjs-dist';


const PDFViewer: React.FC = () => {

  return (
    <div>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
        <Viewer fileUrl={pdfUrl} defaultScale={SpecialZoomLevel.PageFit} />
      </Worker>
    </div>
  );
};

export default PDFViewer;
