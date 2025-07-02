'use client';

import { useState } from 'react';
import Form from '@/components/Form';
import PitchOutput from '@/components/PitchOutput';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleGenerate = async (formData: { startupName: string; description: string }) => {
    setLoading(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate pitch');
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error generating pitch:', error);
      // Handle error state
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">⚡ PitchBolt</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Transform your startup idea into a compelling pitch in seconds</p>
        </header>

        <Form onSubmit={handleGenerate} loading={loading} />

        {results && <PitchOutput results={results} />}
      </div>
    </main>
  );
}
