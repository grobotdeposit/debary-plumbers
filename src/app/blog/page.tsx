import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { BLOG_POSTS } from "@/lib/seo/blog";

export const metadata = buildPageMetadata({
  title: "Plumbing Blog | Tips, Guides & Cost Info for DeBary Homeowners",
  description:
    "Plumbing tips, cost guides, and homeowner advice for DeBary and Volusia County. Learn about emergency plumbing, water heaters, hard water, and more.",
  path: "/blog",
});

export default function BlogPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <SiteLayout>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Plumbing Tips & Guides
        </h1>
        <p className="mt-4 text-lg text-muted">
          Helpful articles for DeBary and Central Florida homeowners — costs,
          maintenance, and what to do in a plumbing emergency.
        </p>
        <div className="mt-10 space-y-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-border/80 bg-surface p-6 shadow-sm"
            >
              <time className="text-sm text-muted" dateTime={post.datePublished}>
                {new Date(post.datePublished).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="mt-2 text-xl font-semibold text-foreground">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-muted">{post.description}</p>
              <p className="mt-3 text-sm text-muted">{post.readTime}</p>
            </article>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
