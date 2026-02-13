export default function Footer() {
    return(
        <footer className="border-t">
            <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col gap-2">
                <div>&copy; {new Date().getFullYear()} Hung Nguyen. All rights reserved.</div>
                <div className="flex gap-4">
                    <a className="hover:underline" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a className="hover:underline" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
                    <a className="hover:underline" href="mailto:nghungnguyen01@gmail.com" target="_blank" rel="noreferrer">Email</a>
                </div>
            </div>
        </footer>
    );
}