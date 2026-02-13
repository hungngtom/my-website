export default function Container({ children }: { children: React.ReactNode }) {
    return <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>;
}