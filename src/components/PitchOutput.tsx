'use client';

import { useState } from 'react';
import ElevatorPitch from './ElevatorPitch';
import SwotAnalysis from './SwotAnalysis';
import PitchDeck from './PitchDeck';
import VideoScript from './VideoScript';
import ExportOptions from './ExportOptions';

interface PitchOutputProps {
  results: {
    elevatorPitch: string;
    swotAnalysis: {
      strengths: string[];
      weaknesses: string[];
      opportunities: string[];
      threats: string[];
    };
    pitchDeck: {
      title: string;
      content: string;
    }[];
    videoScript: string;
  };
}

export default function PitchOutput({ results }: PitchOutputProps) {
  const [activeTab, setActiveTab] = useState('elevator');

  const tabs = [
    { id: 'elevator', label: '🎤 Elevator Pitch' },
    { id: 'swot', label: '📊 SWOT Analysis' },
    { id: 'deck', label: '📑 Pitch Deck' },
    { id: 'video', label: '🎬 Video Script' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === tab.id
                ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6">
        {activeTab === 'elevator' && <ElevatorPitch pitch={results.elevatorPitch} />}
        {activeTab === 'swot' && <SwotAnalysis swot={results.swotAnalysis} />}
        {activeTab === 'deck' && <PitchDeck deck={results.pitchDeck} />}
        {activeTab === 'video' && <VideoScript script={results.videoScript} />}

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <ExportOptions results={results} />
        </div>
      </div>
    </div>
  );
}