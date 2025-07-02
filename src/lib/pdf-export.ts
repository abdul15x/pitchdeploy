import html2pdf from 'html2pdf.js';
import { jsPDF } from 'jspdf';

export const exportToPDF = (results: any) => {
  // Create a container element
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.fontFamily = 'Arial, sans-serif';

  // Add title
  const title = document.createElement('h1');
  title.textContent = 'PitchBolt Generated Pitch';
  title.style.textAlign = 'center';
  title.style.marginBottom = '20px';
  container.appendChild(title);

  // Add elevator pitch
  const elevatorTitle = document.createElement('h2');
  elevatorTitle.textContent = '🎤 Elevator Pitch';
  container.appendChild(elevatorTitle);

  const elevatorContent = document.createElement('p');
  elevatorContent.textContent = results.elevatorPitch;
  elevatorContent.style.marginBottom = '20px';
  container.appendChild(elevatorContent);

  // Add SWOT analysis
  const swotTitle = document.createElement('h2');
  swotTitle.textContent = '📊 SWOT Analysis';
  container.appendChild(swotTitle);

  const swotContainer = document.createElement('div');
  swotContainer.style.marginBottom = '20px';

  // Helper function to add SWOT section
  const addSwotSection = (title: string, items: string[]) => {
    const sectionTitle = document.createElement('h3');
    sectionTitle.textContent = title;
    swotContainer.appendChild(sectionTitle);

    const list = document.createElement('ul');
    items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      list.appendChild(listItem);
    });
    swotContainer.appendChild(list);
  };

  addSwotSection('Strengths', results.swotAnalysis.strengths);
  addSwotSection('Weaknesses', results.swotAnalysis.weaknesses);
  addSwotSection('Opportunities', results.swotAnalysis.opportunities);
  addSwotSection('Threats', results.swotAnalysis.threats);

  container.appendChild(swotContainer);

  // Add pitch deck
  const deckTitle = document.createElement('h2');
  deckTitle.textContent = '📑 Pitch Deck Outline';
  container.appendChild(deckTitle);

  const deckContainer = document.createElement('div');
  deckContainer.style.marginBottom = '20px';

  results.pitchDeck.forEach((slide: any, index: number) => {
    const slideTitle = document.createElement('h3');
    slideTitle.textContent = `Slide ${index + 1}: ${slide.title}`;
    deckContainer.appendChild(slideTitle);

    const slideContent = document.createElement('p');
    slideContent.textContent = slide.content;
    slideContent.style.marginBottom = '10px';
    deckContainer.appendChild(slideContent);
  });

  container.appendChild(deckContainer);

  // Add video script
  const scriptTitle = document.createElement('h2');
  scriptTitle.textContent = '🎬 Video Pitch Script';
  container.appendChild(scriptTitle);

  const scriptContent = document.createElement('p');
  scriptContent.textContent = results.videoScript;
  container.appendChild(scriptContent);

  // Generate PDF
  const opt = {
    margin: 10,
    filename: 'pitchbolt-pitch.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().from(container).set(opt).save();
};


export const generatePitchDeckPDF = (content: string): Buffer => {
  const doc = new jsPDF();
  doc.text(content, 10, 10);
  return Buffer.from(doc.output('arraybuffer'));
}