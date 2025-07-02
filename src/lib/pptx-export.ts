import pptxgen from 'pptxgenjs';

// Remove any 'node:fs' imports from client-side code
// Keep file system operations in API routes only
export const exportToPPTX = (results: any) => {
  // Create a new presentation
  const pres = new pptxgen();

  // Set the title slide
  const titleSlide = pres.addSlide();
  titleSlide.addText('PitchBolt Generated Pitch', {
    x: 1,
    y: 1,
    w: '80%',
    h: 1.5,
    fontSize: 24,
    bold: true,
    color: '363636',
    align: 'center',
  });

  // Add elevator pitch slide
  const elevatorSlide = pres.addSlide();
  elevatorSlide.addText('🎤 Elevator Pitch', {
    x: 0.5,
    y: 0.5,
    fontSize: 18,
    bold: true,
    color: '363636',
  });
  elevatorSlide.addText(results.elevatorPitch, {
    x: 0.5,
    y: 1.5,
    w: '90%',
    fontSize: 14,
    color: '666666',
  });

  // Add SWOT analysis slide
  const swotSlide = pres.addSlide();
  swotSlide.addText('📊 SWOT Analysis', {
    x: 0.5,
    y: 0.5,
    fontSize: 18,
    bold: true,
    color: '363636',
  });

  // Helper function to add SWOT section
  const addSwotSection = (title: string, items: string[], x: number, y: number) => {
    swotSlide.addText(title, {
      x,
      y,
      fontSize: 14,
      bold: true,
      color: '363636',
    });

    const itemsText = items.map(item => `• ${item}`).join('\n');
    swotSlide.addText(itemsText, {
      x,
      y: y + 0.5,
      w: '45%',
      fontSize: 12,
      color: '666666',
    });
  };

  addSwotSection('Strengths', results.swotAnalysis.strengths, 0.5, 1.5);
  addSwotSection('Weaknesses', results.swotAnalysis.weaknesses, 5.5, 1.5);
  addSwotSection('Opportunities', results.swotAnalysis.opportunities, 0.5, 3.5);
  addSwotSection('Threats', results.swotAnalysis.threats, 5.5, 3.5);

  // Add pitch deck slides
  results.pitchDeck.forEach((slide: any) => {
    const deckSlide = pres.addSlide();
    deckSlide.addText(slide.title, {
      x: 0.5,
      y: 0.5,
      fontSize: 18,
      bold: true,
      color: '363636',
    });
    deckSlide.addText(slide.content, {
      x: 0.5,
      y: 1.5,
      w: '90%',
      fontSize: 14,
      color: '666666',
    });
  });

  // Add video script slide
  const scriptSlide = pres.addSlide();
  scriptSlide.addText('🎬 Video Pitch Script', {
    x: 0.5,
    y: 0.5,
    fontSize: 18,
    bold: true,
    color: '363636',
  });
  scriptSlide.addText(results.videoScript, {
    x: 0.5,
    y: 1.5,
    w: '90%',
    fontSize: 12,
    color: '666666',
  });

  // Save the presentation
  pres.writeFile({ fileName: 'pitchbolt-pitch.pptx' });
};

export async function generatePitchDeck(results: string) {
  const pres = new pptxgen();
  
  // Verify content is added
  pres.addSlide().addText(results, { x: 0.5, y: 0.5, w: 9, h: 4 });

  // Ensure proper blob creation
  const blob = await pres.write({ outputType: 'blob' });
  return blob;
}