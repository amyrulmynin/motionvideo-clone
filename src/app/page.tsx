/* eslint-disable @next/next/no-img-element -- Native images preserve source sizing and loading behavior. */
import type { CSSProperties, ReactNode } from "react";

const homeUrl = "/";
const loginUrl = "https://video.azbahri.link/login";

const styleAsset = (slug: string) => `/sites/video-azbahri/${slug}.webp`;

const marqueeColumns: { style: CSSProperties; images: string[] }[] = [
  {
    style: { animationDuration: "70s" },
    images: [
      "kaiju-attack",
      "infographic",
      "radial-infographic",
      "slide-deck",
      "flat-illustration",
      "isometric-diorama",
    ],
  },
  {
    style: { animationDuration: "55s", animationDirection: "reverse" },
    images: [
      "kinetic-type",
      "malaysian-heritage",
      "app-showcase",
      "kawaii-pastel",
      "tech-noir",
      "food-menu",
    ],
  },
  {
    style: { animationDuration: "80s" },
    images: [
      "neon-sign",
      "map-journey",
      "liquid-gradient",
      "data-story",
      "claymation",
      "retro-synthwave",
    ],
  },
];

const steps: { step: string; title: string; body: string; icon: ReactNode }[] = [
  {
    step: "Step 1",
    title: "Pick a style",
    body: "Browse ready-made looks: neon signs, claymation, retro, infographics and more.",
    icon: (
      <>
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </>
    ),
  },
  {
    step: "Step 2",
    title: "Add your content",
    body: "Describe what the video is about. Add photos and brand colours if you like.",
    icon: (
      <>
        <path d="M17 6.1H3" />
        <path d="M21 12.1H3" />
        <path d="M15.1 18H3" />
      </>
    ),
  },
  {
    step: "Step 3",
    title: "Get your prompt",
    body: "Choose the ratio, quality and length. Copy the full prompt or save it for later.",
    icon: (
      <>
        <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
        <path d="m14 7 3 3" />
        <path d="M5 6v4" />
        <path d="M19 14v4" />
        <path d="M10 2v2" />
        <path d="M7 8H3" />
        <path d="M21 16h-4" />
        <path d="M11 3H9" />
      </>
    ),
  },
];

const platformCards: {
  ratio: string;
  label: string;
  width: string;
  height: string;
}[] = [
  { ratio: "16:9", label: "YouTube, websites", width: "2.25rem", height: "1.266rem" },
  { ratio: "9:16", label: "TikTok, Reels, Shorts", width: "1.266rem", height: "2.25rem" },
  { ratio: "1:1", label: "Feed posts", width: "2.25rem", height: "2.25rem" },
  { ratio: "4:5", label: "Portrait posts", width: "1.8rem", height: "2.25rem" },
];

const libraryStyles: { label: string; slug: string }[] = [
  { label: "Neon sign", slug: "neon-sign" },
  { label: "Claymation", slug: "claymation" },
  { label: "Retro synthwave", slug: "retro-synthwave" },
  { label: "Kaiju attack", slug: "kaiju-attack" },
  { label: "Kawaii pastel", slug: "kawaii-pastel" },
  { label: "Infographic", slug: "infographic" },
  { label: "Food menu", slug: "food-menu" },
  { label: "Malaysian heritage", slug: "malaysian-heritage" },
  { label: "Kinetic typography", slug: "kinetic-type" },
  { label: "Liquid gradient", slug: "liquid-gradient" },
  { label: "Product turntable", slug: "product-turntable" },
  { label: "Comic pop art", slug: "comic-pop-art" },
];

const ctaImages = [
  "neon-sign",
  "claymation",
  "retro-synthwave",
  "kaiju-attack",
  "kawaii-pastel",
  "infographic",
];

const footerLinks: { label: string; href: string }[] = [
  { label: "Terms", href: "https://video.azbahri.link/terms" },
  { label: "Privacy", href: "https://video.azbahri.link/privacy-policy" },
  { label: "Refunds", href: "https://video.azbahri.link/refund-policy" },
  { label: "Shipping", href: "https://video.azbahri.link/shipping-policy" },
];

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="size-7 shrink-0" aria-hidden="true">
      <rect width="32" height="32" rx="9" className="fill-accent" />
      <path d="M9 9.5h3v13H9zM20 9.5h3v13h-3z" className="fill-on-accent/25" />
      <path d="M13.5 11.2v9.6l7.2-4.8z" className="fill-on-accent" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 shrink-0"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 shrink-0 text-accent"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-white/5 bg-ink-950/85 backdrop-blur-lg">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-1.5 px-4">
          <a
            href={homeUrl}
            className="flex items-center gap-2 mr-auto"
            aria-label="MotionVideo home"
          >
            <Logo />
            <span className="text-[1.0625rem] font-semibold tracking-tight">
              motion<span className="text-accent">video</span>
            </span>
          </a>
          <a href={loginUrl} className="btn h-9 px-3 text-muted hover:text-fg">
            Log in
          </a>
          <a href={loginUrl} className="btn btn-accent h-9 px-3.5">
            Get started
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 pt-8 pb-10 lg:grid lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12 lg:pt-14 lg:pb-16">
          <div>
            <p className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent ring-1 ring-accent/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0 size-3.5"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              </svg>
              {" 44 video styles ready to use"}
            </p>
            <h1 className="mt-[15px] text-3xl leading-[1.1] font-semibold tracking-tight sm:mt-4 sm:text-4xl lg:text-5xl">
              Pick a style. Add your story.{" "}
              <span className="text-accent">Get the full video prompt.</span>
            </h1>
            <p className="mt-4 max-w-md text-muted sm:text-base">
              Choose a ready-made video look, type what your video is about, and
              MotionVideo writes the complete prompt, sized and timed for the
              platform you need.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={loginUrl} className="btn btn-accent h-11 px-5">
                Get started <ArrowRightIcon />
              </a>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="grid grid-cols-3 gap-2.5 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] mt-8 h-72 sm:h-96 lg:mt-0 lg:h-[34rem]"
          >
            {marqueeColumns.map((column) => (
              <div
                key={column.images[0]}
                className="animate-marquee-up motion-reduce:animate-none"
                style={column.style}
              >
                {[...column.images, ...column.images].map((slug, index) => (
                  <img
                    key={`${slug}-${index}`}
                    src={styleAsset(slug)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="mb-2.5 aspect-[4/5] w-full rounded-xl object-cover ring-1 ring-white/5"
                  />
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            How it works
          </h2>
          <p className="mt-1 text-muted">Three steps, about a minute.</p>

          <ol className="mt-5 grid gap-2.5 sm:grid-cols-3">
            {steps.map((item) => (
              <li className="panel" key={item.step}>
                <div className="flex items-center gap-2.5">
                  <span className="grid size-9 place-items-center rounded-xl bg-accent/10 text-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4 shrink-0 size-4.5"
                    >
                      {item.icon}
                    </svg>
                  </span>
                  <span className="text-2xs font-semibold tracking-wider text-faint uppercase">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-14">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Your content, in a proven style
            </h2>
            <p className="mt-2 max-w-md text-muted">
              Each style is a tested prompt that describes the look, motion,
              type, colour and sound. MotionVideo drops your content in and fills
              in the size and length, so the result is ready to paste.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckIcon /> No prompt writing skills needed
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon /> Same look every time you use a style
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon /> Saved in your account to reuse later
              </li>
            </ul>
          </div>

          <div className="panel mt-6 lg:mt-0">
            <div className="mb-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <img
                  src={styleAsset("neon-sign")}
                  alt=""
                  className="aspect-[4/5] w-9 rounded-md object-cover"
                />
                <div className="leading-tight">
                  <p className="text-xs font-semibold">Neon sign</p>
                  <p className="text-2xs text-muted">9:16 · 1080p · 15s</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-2xs text-muted">
                <span className="size-2 rounded-full bg-accent" /> Your content
              </span>
            </div>
            <div className="rounded-xl bg-ink-950 p-3 text-xs leading-relaxed whitespace-pre-line text-fg/60 ring-1 ring-white/5">
              <span>Make my video in this style: Neon sign.</span>
              {"\n\n"}
              <span className="-mx-1 rounded bg-accent/10 px-1 text-accent">
                {
                  'My content\n- What the video is about: Grand opening of Kopi Pagi cafe in Bangi. Headline: "Your morning starts here".'
                }
              </span>
              {"\n\n"}
              <span>
                {
                  "Look and motion\n- My message is a glowing neon tube sign, mounted on a dark brick wall at night. The sign is tilted very slightly, like it was hung by hand.\n- It starts switched off, so you can see the dark glass tubes. Then the tubes flicker on letter by letter with a realistic stutter: a few quick blinks, then a steady glow."
                }
              </span>
              {"\n"}
              <span className="text-faint">…</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Made for every platform
          </h2>
          <p className="mt-1 text-muted">
            480p to 1080p, 5 to 30 seconds, in the shape you need.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {platformCards.map((card) => (
              <div className="panel flex items-center gap-3 p-3" key={card.ratio}>
                <span className="grid size-10 shrink-0 place-items-center">
                  <span
                    className="rounded-[3px] border-2 border-accent bg-accent/15"
                    style={{ width: card.width, height: card.height }}
                  />
                </span>
                <span className="min-w-0 leading-tight">
                  <span className="block font-semibold">{card.ratio}</span>
                  <span className="block truncate text-2xs text-muted">
                    {card.label}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                A library of styles
              </h2>
              <p className="mt-1 text-muted">
                A few of the 44 looks you can use today.
              </p>
            </div>
            <a
              href={loginUrl}
              className="hidden shrink-0 items-center gap-1 text-sm font-medium text-accent sm:inline-flex"
            >
              See them all <ArrowRightIcon />
            </a>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-x-2.5 gap-y-3.5 sm:grid-cols-4 lg:grid-cols-6">
            {libraryStyles.map((style) => (
              <a href={loginUrl} className="group block" key={style.slug}>
                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-ink-800 ring-1 ring-white/5">
                  <img
                    src={styleAsset(style.slug)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-1.5 truncate text-[0.8125rem] font-medium">
                  {style.label}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pt-4 pb-12 lg:pb-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-orange-500 px-5 py-8 text-on-accent sm:px-10 sm:py-10">
            <div className="relative max-w-lg">
              <h2 className="text-2xl leading-tight font-semibold tracking-tight sm:text-3xl">
                Ready to make your first video prompt?
              </h2>
              <p className="mt-2 text-on-accent/75">
                Create an account and pick a style. It takes about a minute.
              </p>
              <a
                href={loginUrl}
                className="btn mt-5 h-11 bg-ink-950 px-5 text-fg hover:bg-ink-900"
              >
                Create your account <ArrowRightIcon />
              </a>
            </div>
            <div
              className="pointer-events-none absolute top-1/2 -right-10 hidden w-72 -translate-y-1/2 rotate-6 gap-2 sm:grid sm:grid-cols-3"
              aria-hidden="true"
            >
              {ctaImages.map((slug) => (
                <img
                  key={slug}
                  src={styleAsset(slug)}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-lg object-cover shadow-xl ring-1 ring-black/10"
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row">
          <a
            href={homeUrl}
            className="flex items-center gap-2"
            aria-label="MotionVideo home"
          >
            <Logo />
            <span className="text-[1.0625rem] font-semibold tracking-tight">
              motion<span className="text-accent">video</span>
            </span>
          </a>
          <p className="flex gap-3 text-xs text-muted">
            {footerLinks.map((link) => (
              <a href={link.href} className="hover:text-fg" key={link.href}>
                {link.label}
              </a>
            ))}
          </p>
          <p className="text-xs text-faint">
            © 2026 AZBAHRI Technologies Enterprise
          </p>
        </div>
      </footer>
    </>
  );
}
