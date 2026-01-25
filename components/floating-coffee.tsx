'use client';

export default function FloatingCoffee() {
  const handleDonate = () => {
    const confirmed = window.confirm(
      'Support ReadmeCraft with a $5 coffee ☕ ?'
    );

    if (confirmed) {
      window.open(
        'https://www.buymeacoffee.com/j0zf?amount=5',
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  return (
    <button
      onClick={handleDonate}
      aria-label="Buy me a coffee"
      title="Buy me a coffee ($5)"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-yellow-400 text-black text-xl
        flex items-center justify-center
        shadow-xl
        hover:bg-yellow-300 hover:scale-105
        active:scale-95 transition
      "
    >
      <i className="fa-solid fa-mug-hot"></i>
    </button>
  );
}
