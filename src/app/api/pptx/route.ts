import { NextResponse } from 'next/server';
import pptxgen from 'pptxgenjs';

export async function POST(request: Request) {
  try {
    const { content } = await request.json();
    const pres = new pptxgen();
    
    // Add content validation
    if (!content || content.trim().length === 0) {
      return NextResponse.json(
        { error: 'No content provided' },
        { status: 400 }
      );
    }

    // Configure slide with proper dimensions
    const slide = pres.addSlide({
      masterName: 'MASTER_SLIDE',
      sectionTitle: 'Pitch Content'
    });
    
    slide.addText(content, {
      x: 0.5,
      y: 0.5,
      w: '90%',
      h: '90%',
      fontSize: 14,
      align: 'left'
    });

    // Generate buffer with proper MIME type
    const buffer = await pres.write({ outputType: 'nodebuffer' });
    
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'Content-Disposition': 'attachment; filename="pitchdeck.pptx"'
      }
    });
  } catch (error) {
    console.error('PPTX Generation Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate presentation' },
      { status: 500 }
    );
  }
}