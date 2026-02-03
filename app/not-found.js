export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
            <p className="text-slate-400 mb-8">Oops! The page you're looking for doesn't exist.</p>
            <a href="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
                Go Back Home
            </a>
        </div>
    );
}
