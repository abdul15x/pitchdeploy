export default function VideoScript({ script }: { script: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🎬 Video Pitch Script</h2>
      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
        <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">{script}</p>
      </div>
    </div>
  );
}