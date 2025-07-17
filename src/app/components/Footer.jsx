

export default function Footer() {
    return (
        <footer className="bg-black text-white py-6 px-4 md:px-8 mt-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">© 2025 ShopEase. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#privacy" className="hover:text-yellow-400 transition-colors text-sm">Privacy Policy</a>
                    <a href="#terms" className="hover:text-yellow-400 transition-colors text-sm">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
