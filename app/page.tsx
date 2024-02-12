import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  const isSignedIn = Boolean(session?.user);

  return (
    <div>
      <section className="hero is-halfheight">
        <div className="hero-body">
          <div>
            <p className="title">Glimpsee</p>
            <p className="subtitle">
              Generate beautiful social media preview images for your website.
              Customize the title, background, and icon to suit your needs.
            </p>
            {!isSignedIn && (
              <Link
                href="/api/auth/signin"
                className="button is-primary is-large"
              >
                Get started
              </Link>
            )}
            {isSignedIn && (
              <Link href="/glimps" className="button is-primary is-large">
                My Glimps
              </Link>
            )}
          </div>
        </div>
      </section>
      <section className="section has-background-light">
        <div className="container">
          <h2 className="is-size-2 has-text-weight-medium">Why Glimpsee?</h2>
          <p className="is-size-5">
            Glimpsee helps you create beautiful and engaging OpenGraph images
            for your website. These Glimps are used when your website is shared
            on social media platforms, making them an essential part of your
            website&apos;s SEO.
          </p>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child p-1">
            <figure className="image is-2by1">
              <img
                alt="sample blog post glimpsee image"
                src={`${process.env.NEXT_PUBLIC_HOSTNAME}/api/og?id=${51}`}
              />
            </figure>
          </article>
          <article className="tile is-child p-1">
            <figure className="image is-2by1">
              <img
                alt="sample blog post glimpsee image"
                src={`${process.env.NEXT_PUBLIC_HOSTNAME}/api/og?id=${52}`}
              />
            </figure>
          </article>
          <article className="tile is-child p-1">
            <figure className="image is-2by1">
              <img
                alt="sample blog post glimpsee image"
                src={`${process.env.NEXT_PUBLIC_HOSTNAME}/api/og?id=${53}`}
              />
            </figure>
          </article>
        </div>
      </section>
    </div>
  );
}
