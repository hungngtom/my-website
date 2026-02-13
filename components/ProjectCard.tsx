import Link from "next/link";
import Tag from "./Tag";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="rounded-2x1 border p-6 hover:shadow-sm transition">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                        <Link href={`/projects/${project.slug}`} className="hover:underline">
                            {project.title}
                        </Link>
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{project.description}</p>
                </div>
                <Link href={`/projects/${project.slug}`} className="text-sm text-blue-500 hover:underline underline-offset-4">
                    Read more
                </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                    <Tag key={t} label={t} />
                ))}
            </div>
        </div>
    );
}