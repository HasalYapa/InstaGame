import GameCard from "./components/GameCard";
import { games } from "./data/games";

/**
 * Validates if a game matches the search query and category.
 */
function filterGames(game, query, category) {
  const matchesQuery = !query || game.title.toLowerCase().includes(query.toLowerCase());
  const matchesCategory = !category || category === "All" || game.category === category;
  return matchesQuery && matchesCategory;
}

export default async function Home({ searchParams }) {
  // Await searchParams since it might be a Promise in future Next.js versions or current configurations
  const params = await searchParams;
  const category = params?.category || "All";
  const query = params?.q || "";

  const filteredGames = games.filter((game) => filterGames(game, query, category));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-2">
          {category === "All" ? "Trending Games" : `${category} Games`}
        </h1>
        <p className="text-slate-400">
          {filteredGames.length} result{filteredGames.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-white/5">
          <p className="text-xl text-slate-400">No games found matching your criteria.</p>
          <p className="text-slate-500 mt-2">Try adjusting your filters or search term.</p>
        </div>
      )}
    </div>
  );
}
