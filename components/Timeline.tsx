export type TimelineItem = {
  title: string;
  org: string;
  location?: string;
  dateRange: string;
  bullets: string[];
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-6">
      {items.map((item, idx) => (
        <div key={idx} className="rounded-2xl border p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">
                {item.org}{item.location ? ` • ${item.location}` : ""}
              </p>
            </div>
            <div className="text-sm text-gray-600">{item.dateRange}</div>
          </div>
          <ul className="mt-3 list-disc pl-5 text-gray-700">
            {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}