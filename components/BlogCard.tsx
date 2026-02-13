import Link from "next/link";
import Tag from "@/components/Tag";
import type { BlogPost } from "@/content/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="rounded-2xl border p-6 hover:shadow-sm transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-600">{new Date(post.date).toLocaleDateString()}</p>
          <p className="mt-3 text-sm text-gray-600">{post.summary}</p>
        </div>
        <Link href={`/blog/${post.slug}`} className="text-sm underline underline-offset-4">
          Read
        </Link>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((t) => <Tag key={t} label={t} />)}
      </div>
    </div>
  );
}
