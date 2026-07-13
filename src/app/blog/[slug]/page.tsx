import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageCTA } from "@/components/seo/PageSections";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schema";
import {
  BLOG_POSTS,
  getAllBlogSlugs,
  getBlogPostBySlug,
} from "@/lib/seo/blog";
import { getServiceBySlug } from "@/lib/seo/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedService = getServiceBySlug(post.relatedService);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${slug}` },
  ];

  return (
    <SiteLayout>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          articleSchema(post.title, post.description, `/blog/${slug}`, post.datePublished),
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />
        <time className="text-sm text-muted" dateTime={post.datePublished}>
          {new Date(post.datePublished).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.readTime}
        </time>
        <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{post.description}</p>

        {post.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-2xl font-bold text-foreground">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 text-muted leading-relaxed">
                {p}
              </p>
            ))}
          </section>
        ))}

        {relatedService && (
          <p className="mt-10 rounded-xl border border-border/80 bg-surface-soft p-5 text-muted">
            Need help now?{" "}
            <Link
              href={`/services/${relatedService.slug}`}
              className="font-semibold text-primary hover:underline"
            >
              {relatedService.h1}
            </Link>{" "}
            — submit the form for a fast callback.
          </p>
        )}
      </article>
      <PageCTA />
    </SiteLayout>
  );
}
