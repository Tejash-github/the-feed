// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">
        <Link href="/">The Feed</Link>
      </h1>
      <nav>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;