interface PitchDeckProps {
  deck: {
    title: string;
    content: string;
  }[];
}

export default function PitchDeck({ deck }: PitchDeckProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📑 Pitch Deck Outline</h2>
      <div className="space-y-4">
        {deck.map((slide, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-gray-100 dark:bg-gray-900 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-medium">Slide {index + 1}: {slide.title}</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-700 dark:text-gray-300">{slide.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}