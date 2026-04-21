export default function Footer() {
    return(
        <footer className="border-t border-[#0f172a]/10 bg-[#f7f2e8]">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col gap-2">
                <div>© {new Date().getFullYear()} Hung Nguyen. All rights reserved.</div>
                <div className="flex flex-wrap gap-4">
                    <a className="hover:text-[#0f172a] underline underline-offset-4" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a className="hover:text-[#0f172a] underline underline-offset-4" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
                    <a className="hover:text-[#0f172a] underline underline-offset-4" href="mailto:nghungnguyen01@gmail.com" target="_blank" rel="noreferrer">Email</a>
                </div>
            </div>
        </footer>
    );
}