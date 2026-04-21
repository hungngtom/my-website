export default function Tag({ label }: { label: string }) {
    return (
        <span className="inline-flex items-center rounded-full border border-[#0f172a]/15 bg-white/70 px-2.5 py-1 text-xs text-gray-700">
            {label}
        </span>
    );
}