export default function ElevatorPitch({ pitch }: { pitch: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🎤 Elevator Pitch</h2>
      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
        <p className="text-gray-800 dark:text-gray-200">{pitch}</p>
      </div>
    </div>
  );
}