import { games } from "../../data/games";
import AdPlaceholder from "../../components/AdPlaceholder";
import GamePlayer from "../../components/GamePlayer";
import { notFound } from "next/navigation";

// Generate Metadata for SEO
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const game = games.find((g) => g.id === slug);

    if (!game) {
        return {
            title: "Game Not Found - GamePortal",
        };
    }

    return {
        title: `Play ${game.title} - Free Online Game`,
        description: `Play ${game.title} online for free. ${game.description} Best ${game.category} games on GamePortal.`,
        openGraph: {
            images: [game.thumbnail],
        },
    };
}

export default async function PlayPage({ params }) {
    const { slug } = await params;
    const game = games.find((g) => g.id === slug);

    if (!game) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Top Banner Ad */}
            <div className="mb-8 flex justify-center">
                <AdPlaceholder slotId="GAME_TOP_BANNER" className="w-full max-w-4xl h-[90px]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* Main Content (Game) */}
                <div className="lg:col-span-3">
                    <GamePlayer game={game} />

                    <div className="mt-6 bg-slate-900/50 rounded-xl p-6 border border-white/5">
                        <h1 className="text-2xl font-bold text-white mb-2">{game.title}</h1>
                        <div className="flex gap-4 text-sm text-slate-400 mb-4">
                            <span className="bg-slate-800 px-2 py-1 rounded">{game.category}</span>
                            <span>ID: {game.id}</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                            {game.description} Play this amazing game now on GamePortal.
                            Experience high-quality gameplay directly in your browser without downloads.
                        </p>
                    </div>
                </div>

                {/* Sidebar (Ads & Related - Simplified as just Ads for now) */}
                <div className="space-y-6">
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-white/5">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Sponsored</h3>
                        <AdPlaceholder slotId="SIDEBAR_RECTANGLE" className="w-full aspect-square" />
                    </div>
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-white/5">
                        <AdPlaceholder slotId="SIDEBAR_SKYSCRAPER" className="w-full h-[300px]" />
                    </div>
                </div>
            </div>

            {/* Bottom Banner Ad */}
            <div className="mt-12 flex justify-center">
                <AdPlaceholder slotId="GAME_BOTTOM_BANNER" className="w-full max-w-4xl h-[90px]" />
            </div>
        </div>
    );
}
