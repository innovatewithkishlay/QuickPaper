declare module "html2pdf.js" {
  interface Html2CanvasOptions {
    scale: number;
    useCORS?: boolean;
    logging?: boolean;
  }

  interface Html2PdfOptions {
    margin?: number | [number, number, number, number];
    filename?: string;
    image?: { type: string; quality: number };
    html2canvas?: Html2CanvasOptions;
    jsPDF?: { unit: string; format: string; orientation: string };
  }

  interface Html2PdfResult {
    save: () => void;
    outputPdf: (type: "datauristring") => Promise<string>;
    from: (element: HTMLElement) => Html2PdfResult;
    set: (options: Html2PdfOptions) => Html2PdfResult;
  }

  const html2pdf: {
    (): Html2PdfResult;
    (element: HTMLElement, options: Html2PdfOptions): Html2PdfResult;
  };

  export default html2pdf;
}
