import { NextResponse } from 'next/server';
import PDFDocument from 'pdfkit';

export async function POST(request: Request) {
  const { content } = await request.json();
  
  // Create PDF in memory
  const doc = new PDFDocument();
  doc.text(content);
  
  // Get PDF buffer
  const chunks: Buffer[] = [];
  doc.on('data', (chunk: Buffer<ArrayBufferLike>) => chunks.push(chunk));
  doc.end();
  
  const pdfBuffer = Buffer.concat(chunks);

  return new NextResponse(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=pitchdeck.pdf'
    }
  });
}