import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto flex min-h-screen w-full max-w-4xl items-center px-4 py-10 sm:px-6">
        <section className="glass-panel relative w-full overflow-hidden rounded-[2rem] p-8 sm:p-10">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/85 dark:text-white">
            Phantasma Network
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Page not found</h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            The changelog page you requested does not exist.
          </p>
          <Link
            href="/"
            className="glass-panel mt-8 inline-flex rounded-xl px-5 py-3 text-sm font-medium transition hover:border-[rgb(var(--brand-cyan)/0.35)] hover:text-[rgb(var(--brand-cyan))]"
          >
            Back to changelog
          </Link>
        </section>
      </main>
    </div>
  );
}
