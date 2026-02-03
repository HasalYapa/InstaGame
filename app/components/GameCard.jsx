import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';

export default function GameCard({ game }) {
    return (
        <Link href={`/play/${game.id}`} className="group relative block bg-slate-900 rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
            {/* Thumbnail Aspect Ratio Container */}
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={game.thumbnail}
                    alt={game.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-primary text-white rounded-full p-3 transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <Play className="w-6 h-6 fill-current" />
                    </div>
                </div>
            </div>

            {/* Info */}
            <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <h3 className="font-bold text-slate-100 line-clamp-1 group-hover:text-primary transition-colors">
                            {game.title}
                        </h3>
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                            {game.category}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
