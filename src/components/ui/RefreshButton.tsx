import { RefreshCw } from 'lucide-react';

export function RefreshButton() {
  const Refresh = () => {
    window.location.reload(); }

  return (
    <button
      onClick={Refresh}
      className="flex items-center justify-center bg-black text-white rounded-lg p-2"
    >
      <RefreshCw size={24} />
    </button>
  );
}
