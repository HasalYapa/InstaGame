export default function AdPlaceholder({ slotId, className = "" }) {
    const isBanner = slotId === 'TOP_BANNER';
    const imgSrc = isBanner ? '/ad-banner.png' : '/ad-square.png';

    return (
        <div
            className={`bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden flex items-center justify-center text-slate-500 text-xs font-mono uppercase tracking-widest ${className}`}
        >
            <img
                src={imgSrc}
                alt={`Ad Space ${slotId}`}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
        </div>
    );
}
