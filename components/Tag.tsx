export default function Tag({ label }: { label: string }) {
    return (
        <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs text-gray-700">
            {label}
        </span>
    );
}