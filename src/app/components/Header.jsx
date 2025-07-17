export default function Header() {
    return (
        <header className="bg-black text-white shadow-lg py-6 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <h1 className="text-3xl font-bold tracking-tight">
                    ShopEase
                </h1>
                <nav className="flex flex-wrap gap-6 text-base font-medium">
                    <a href="/product" className="hover:text-yellow-400 transition-colors">
                        Home
                    </a>
                    <a href="/product" className="hover:text-yellow-400 transition-colors">
                        Products
                    </a>
                    <a href="/about" className="hover:text-yellow-400 transition-colors">
                        About
                    </a>
                    <a href="/contact" className="hover:text-yellow-400 transition-colors">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}