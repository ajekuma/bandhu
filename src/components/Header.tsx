export default function Header() {
    return (
      <header className="flex justify-between items-center p-6 border-b shadow-sm">
        <div className="text-xl font-bold">Bandhu</div>
        <nav className="flex items-center gap-6">
          <ul className="hidden md:flex gap-4 text-sm font-medium">
            <li><a href="#">Home</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm">Get a Demo</button>
        </nav>
      </header>
    );
  }
  