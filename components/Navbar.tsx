import Link from "next/link";

export default function Navbar() {
    return(
        <header className="border-b border-[#0f172a]/10 bg-[#f7f2e8]/95 backdrop-blur">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between gap-6">
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-full border border-[#0f172a]/20 flex items-center justify-center text-xs font-semibold">
                        HN
                    </div>
                    <span className="font-medium text-sm tracking-wide">
                        Hung Nguyen
                    </span>
                </Link>

                <nav className="flex items-center gap-6 text-sm text-gray-700">
                    <Link href="/projects" className="hover:text-[#0f172a]">Projects</Link>
                    <Link href="/resume" className="hover:text-[#0f172a]">Resume</Link>
                    <Link href="/blog" className="hover:text-[#0f172a]">Blog</Link>
                    <Link href="/about" className="hover:text-[#0f172a]">About</Link>
                </nav>
            </div>
        </header>
    );
}
