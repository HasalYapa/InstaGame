"use client";

import { Search, Gamepad2 } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { categories } from '../data/games';

export default function Header() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const currentCategory = searchParams.get('category') || 'All';

    const handleSearch = (e) => {
        const term = e.target.value;
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('q', term);
        } else {
            params.delete('q');
        }
        router.replace(`${pathname}?${params.toString()}`);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:text-primary/90 transition">
                    <Gamepad2 className="w-6 h-6" />
                    <span className="hidden sm:inline-block bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                        GamePortal
                    </span>
                </Link>

                {/* Navigation / Categories */}
                <nav className="hidden md:flex items-center gap-1">
                    {categories.map((cat) => (
                        <Link
                            key={cat}
                            href={cat === 'All' ? '/' : `/?category=${cat}`}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${currentCategory === cat
                                    ? 'bg-white/10 text-white'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {cat}
                        </Link>
                    ))}
                </nav>

                {/* Search */}
                <div className="relative w-full max-w-xs">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                    <input
                        type="search"
                        placeholder="Search games..."
                        onChange={handleSearch}
                        className="w-full bg-slate-900 border border-white/10 rounded-full pl-9 pr-4 py-2 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                </div>
            </div>
        </header>
    );
}
