export default function AdPlaceholder({ slotId, className = "" }) {
    // In a real app, this would contain the AdSense/Monetag script or slot definition.
    // For now, it's a visual placeholder.
    return (
        <div
            className={`bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-500 text-xs font-mono uppercase tracking-widest ${className}`}
        >
            <span className="opacity-50">Ad Space {slotId}</span>
        </div>
    );
}
