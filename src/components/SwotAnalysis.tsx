interface SwotProps {
  swot: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
}

export default function SwotAnalysis({ swot }: SwotProps) {
  const sections = [
    { title: 'Strengths', items: swot.strengths, color: 'bg-green-100 dark:bg-green-900', textColor: 'text-green-800 dark:text-green-200' },
    { title: 'Weaknesses', items: swot.weaknesses, color: 'bg-red-100 dark:bg-red-900', textColor: 'text-red-800 dark:text-red-200' },
    { title: 'Opportunities', items: swot.opportunities, color: 'bg-blue-100 dark:bg-blue-900', textColor: 'text-blue-800 dark:text-blue-200' },
    { title: 'Threats', items: swot.threats, color: 'bg-yellow-100 dark:bg-yellow-900', textColor: 'text-yellow-800 dark:text-yellow-200' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📊 SWOT Analysis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section) => (
          <div key={section.title} className={`p-4 rounded-lg ${section.color}`}>
            <h3 className={`font-bold mb-2 ${section.textColor}`}>{section.title}</h3>
            <ul className="list-disc pl-5">
              {section.items.map((item, index) => (
                <li key={index} className={section.textColor}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}