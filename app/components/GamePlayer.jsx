"use client";

import { useState, useEffect } from 'react';
import { Play, Maximize2 } from 'lucide-react';
import Image from 'next/image';

export default function GamePlayer({ game }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showAd, setShowAd] = useState(false);
    const [adTimer, setAdTimer] = useState(3);

    const handlePlayClick = () => {
        // Trigger Interstitial Flow
        setShowAd(true);
    };

    useEffect(() => {
        let interval;
        if (showAd && adTimer > 0) {
            interval = setInterval(() => {
                setAdTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [showAd, adTimer]);

    useEffect(() => {
        if (showAd && adTimer === 0) {
            // eslint-disable-next-line
            setShowAd(false);
            setIsPlaying(true);
        }
    }, [showAd, adTimer]);

    if (showAd) {
        return (
            <div className="w-full aspect-video bg-black flex flex-col items-center justify-center rounded-xl overflow-hidden border border-white/10 relative">
                <div className="absolute top-4 right-4 bg-slate-800 px-3 py-1 rounded text-xs uppercase tracking-widest text-slate-400">
                    Ad
                </div>
                <div className="max-w-md text-center p-6 bg-slate-900 rounded-2xl border border-white/5 mx-4">
                    <h3 className="text-xl font-bold text-white mb-2">Advertisement</h3>
                    <p className="text-slate-400 mb-6">Your game will start in {adTimer} seconds...</p>
                    <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary transition-all duration-1000 ease-linear" style={{ width: `${(adTimer / 3) * 100}%` }} />
                    </div>
                </div>
            </div>
        );
    }

    if (isPlaying) {
        return (
            <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 relative">
                <iframe
                    src={game.iframeUrl}
                    title={game.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                {/* Fullscreen placeholder button (functionality depends on browser API often blocked in iframe if different origin, but nice to tab) */}
                <button
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 p-2 rounded-lg text-white backdrop-blur-sm transition opacity-0 hover:opacity-100"
                    onClick={() => document.querySelector('iframe')?.requestFullscreen()}
                    title="Fullscreen"
                >
                    <Maximize2 className="w-5 h-5" />
                </button>
            </div>
        );
    }

    // Initial State: "Play" thumbnail
    return (
        <div className="w-full aspect-video relative rounded-xl overflow-hidden group cursor-pointer" onClick={handlePlayClick}>
            <Image
                src={game.thumbnail}
                alt={game.title}
                fill
                className="object-cover filter brightness-50 group-hover:brightness-75 transition-all duration-500 scale-100 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-primary hover:bg-primary/90 text-white rounded-full p-6 shadow-2xl shadow-primary/20 transform scale-100 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-10 h-10 fill-current ml-1" />
                </button>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h2 className="text-2xl font-bold text-white">{game.title}</h2>
                <p className="text-slate-300">{game.category}</p>
            </div>
        </div>
    );
}
