export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 lg:py-14">
            {children}
        </div>
    );
}