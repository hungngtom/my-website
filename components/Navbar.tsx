import Link from "next/link";

export default function Navbar() {
    return(
        <header className="border-b">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl">Hung Nguyen</Link>

                <nav className="flex items-center gap-6 text-sm">
                <Link href="/projects" className="hover:underline">Projects</Link>
                <Link href="/resume" className="hover:underline">Resume</Link>
                <Link href="/blog" className="hover:underline">Blog</Link>
                <Link href="/about" className="hover:underline">About</Link>
                </nav>
            </div>
        </header>
    );
}
