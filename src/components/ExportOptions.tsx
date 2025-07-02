'use client';

import { exportToPDF } from '@/lib/pdf-export';

interface ExportOptionsProps {
  results: any;
}

export default function ExportOptions({ results }: ExportOptionsProps) {
  const handlePDFExport = () => {
    exportToPDF(results);
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-3">Export Options</h3>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handlePDFExport}
          className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md text-gray-800 dark:text-gray-200 transition-colors"
        >
          <span className="mr-2">📄</span> Export as PDF
        </button>
      </div>
    </div>
  );
}
