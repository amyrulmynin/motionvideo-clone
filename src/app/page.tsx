"use client";

import {
  ArrowRight,
  Bell,
  Check,
  ChevronDown,
  CircleAlert,
  Copy,
  Inbox,
  LoaderCircle,
  MoreHorizontal,
  Plus,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import {
  type FormEvent,
  type KeyboardEvent,
  type ReactNode,
  useRef,
  useState,
} from "react";

import { AdvancedShowcase } from "@/components/advanced-showcase";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const tabs = ["Preview", "Code", "Usage"] as const;
type TabName = (typeof tabs)[number];

const palette = [
  { name: "Canvas", value: "#090B0E", className: "bg-background" },
  { name: "Surface", value: "#11151A", className: "bg-card" },
  { name: "Border", value: "#2A3038", className: "bg-border" },
  { name: "Accent", value: "#F6BD41", className: "bg-primary" },
  { name: "Danger", value: "#FF6577", className: "bg-destructive" },
  { name: "Success", value: "#55D187", className: "bg-emerald-400" },
];

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section-shell">
      <div className="mb-6 max-w-2xl">
        <p className="eyebrow">Component set</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}

function StatusBadge({
  tone,
  children,
}: {
  tone: "neutral" | "success" | "warning" | "danger";
  children: ReactNode;
}) {
  const tones = {
    neutral: "border-border bg-muted text-muted-foreground",
    success: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    warning: "border-primary/20 bg-primary/10 text-primary",
    danger: "border-destructive/20 bg-destructive/10 text-destructive",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

function Avatar({ initials, className }: { initials: string; className?: string }) {
  return (
    <span
      className={cn(
        "grid size-9 shrink-0 place-items-center rounded-full border border-white/10 bg-gradient-to-br from-primary/80 to-orange-500 text-xs font-bold text-primary-foreground shadow-sm",
        className,
      )}
      aria-label={`Avatar for ${initials}`}
    >
      {initials}
    </span>
  );
}

export default function Home() {
  const [notifications, setNotifications] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<TabName>("Preview");
  const [accordionOpen, setAccordionOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;

    if (nextIndex === null) return;
    event.preventDefault();
    setActiveTab(tabs[nextIndex]);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-5 px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Forge UI home">
            <span className="grid size-8 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_24px_rgba(246,189,65,0.22)]">
              <Sparkles className="size-4" aria-hidden="true" />
            </span>
            <span className="font-semibold tracking-tight">Forge UI</span>
          </a>
          <nav
            aria-label="Component sections"
            className="ml-auto hidden items-center gap-1 lg:flex"
          >
            {[
              ["Foundations", "foundations"],
              ["Buttons", "buttons"],
              ["Forms", "forms"],
              ["Feedback", "feedback"],
              ["Data", "data-display"],
              ["Advanced", "advanced"],
              ["Overlays", "overlays"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <Button className="ml-auto lg:ml-2" size="sm" onClick={() => dialogRef.current?.showModal()}>
            Get started
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden border-b border-border/60">
          <div className="grid-bg absolute inset-0 -z-10 opacity-45" aria-hidden="true" />
          <div
            className="absolute -top-44 left-1/2 -z-10 size-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <StatusBadge tone="warning">Next.js 16 · React 19 · Tailwind 4</StatusBadge>
            <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              A sharp starting point for your next product.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Production-ready foundations, controls, states, and interaction patterns.
              Copy the pieces you need; delete the rest.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="h-11 rounded-xl px-5"
                onClick={() => document.querySelector("#foundations")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore components <ArrowRight data-icon="inline-end" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 rounded-xl px-5"
                onClick={() => navigator.clipboard?.writeText("npx create-next-app@latest")}
              >
                <Copy data-icon="inline-start" /> Copy starter command
              </Button>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
              {[
                ["6", "Core sections"],
                ["20+", "UI patterns"],
                ["0", "Extra packages"],
                ["100%", "Responsive"],
              ].map(([value, label]) => (
                <div key={label} className="bg-card px-4 py-4">
                  <p className="text-xl font-semibold text-primary">{value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section
          id="foundations"
          title="Foundations"
          description="A compact token set for colour, type, radius, and spacing. Change values once in globals.css to retheme every component."
        >
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="surface p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold">Colour tokens</h3>
                <code className="code-pill">CSS variables</code>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {palette.map((colour) => (
                  <div key={colour.name} className="rounded-xl border border-border bg-background p-2.5">
                    <div className={cn("h-16 rounded-lg border border-white/10", colour.className)} />
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <span className="text-xs font-medium">{colour.name}</span>
                      <code className="text-[10px] text-muted-foreground">{colour.value}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface p-5 sm:p-6">
              <h3 className="font-semibold">Type scale</h3>
              <div className="mt-5 space-y-5">
                <div>
                  <p className="text-3xl font-semibold tracking-tight">Display</p>
                  <p className="mt-1 text-xs text-muted-foreground">30px / semibold</p>
                </div>
                <div>
                  <p className="text-xl font-semibold tracking-tight">Section heading</p>
                  <p className="mt-1 text-xs text-muted-foreground">20px / semibold</p>
                </div>
                <div>
                  <p className="text-sm leading-6">Body text keeps long-form content readable.</p>
                  <p className="mt-1 text-xs text-muted-foreground">14px / regular</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["8", "12", "16", "24", "32"].map((space) => (
                    <code key={space} className="code-pill">{space}px</code>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="buttons"
          title="Buttons"
          description="Clear hierarchy, complete states, useful sizes, and visible keyboard focus out of the box."
        >
          <div className="surface p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button disabled>
                <LoaderCircle className="animate-spin motion-reduce:animate-none" aria-hidden="true" />
                Loading
              </Button>
              <Button disabled variant="outline">Disabled</Button>
              <Button size="icon" aria-label="Add item">
                <Plus aria-hidden="true" />
              </Button>
            </div>
            <div className="my-6 h-px bg-border" />
            <div className="flex flex-wrap items-end gap-3">
              <Button size="xs">Extra small</Button>
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large <ArrowRight data-icon="inline-end" /></Button>
              <Button variant="link">Text link</Button>
            </div>
          </div>
        </Section>

        <Section
          id="forms"
          title="Forms"
          description="Native controls with associated labels, guidance, validation, disabled states, and real submit/reset behaviour."
        >
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <form className="surface p-5 sm:p-6" onSubmit={handleSubmit} onReset={() => setSubmitted(false)}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold">Project request</h3>
                  <p className="mt-1 text-xs text-muted-foreground">Fields marked required must be completed.</p>
                </div>
                <StatusBadge tone="neutral">Form</StatusBadge>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="label" htmlFor="full-name">Full name</label>
                  <input className="field" id="full-name" name="fullName" autoComplete="name" required placeholder="Alya Rahman" />
                  <p className="help">Use the name shown on your account.</p>
                </div>
                <div>
                  <label className="label" htmlFor="email">Work email</label>
                  <input className="field" id="email" type="email" name="email" autoComplete="email" required placeholder="alya@company.com" />
                  <p className="help">We will only use this for the request.</p>
                </div>
                <div>
                  <label className="label" htmlFor="company-size">Company size</label>
                  <select className="field" id="company-size" name="companySize" defaultValue="" required>
                    <option value="" disabled>Select team size</option>
                    <option>1–10 people</option>
                    <option>11–50 people</option>
                    <option>51–250 people</option>
                    <option>251+ people</option>
                  </select>
                </div>
                <div>
                  <label className="label" htmlFor="start-date">Target start</label>
                  <input className="field" id="start-date" type="date" name="startDate" />
                </div>
                <div className="sm:col-span-2">
                  <label className="label" htmlFor="project-brief">Project brief</label>
                  <textarea className="field min-h-28 resize-y py-2.5" id="project-brief" name="projectBrief" required placeholder="Tell us what success looks like…" />
                  <p className="help">Include audience, outcome, and timing.</p>
                </div>
              </div>

              <fieldset className="mt-5">
                <legend className="label">Priority</legend>
                <div className="flex flex-wrap gap-4">
                  {["Speed", "Quality", "Budget"].map((priority, index) => (
                    <label key={priority} className="inline-flex items-center gap-2 text-sm">
                      <input className="size-4 accent-primary" type="radio" name="priority" defaultChecked={index === 1} value={priority.toLowerCase()} />
                      {priority}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-5 flex items-start gap-2.5">
                <input className="mt-0.5 size-4 rounded accent-primary" id="terms" type="checkbox" required />
                <label htmlFor="terms" className="text-sm leading-5 text-muted-foreground">
                  I agree that this demo may validate the form locally.
                </label>
              </div>

              {submitted && (
                <p className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2.5 text-sm text-emerald-300" role="status">
                  <Check className="size-4" aria-hidden="true" /> Request validated successfully.
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                <Button type="submit">Submit request</Button>
                <Button type="reset" variant="outline">Reset</Button>
              </div>
            </form>

            <div className="surface p-5 sm:p-6">
              <h3 className="font-semibold">Control states</h3>
              <div className="mt-5 space-y-5">
                <div>
                  <label className="label" htmlFor="workspace-slug">Error state</label>
                  <input className="field border-destructive focus-visible:border-destructive focus-visible:ring-destructive/25" id="workspace-slug" defaultValue="my workspace" aria-invalid="true" aria-describedby="slug-error" />
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive" id="slug-error">
                    <CircleAlert className="size-3.5" aria-hidden="true" /> Spaces are not allowed.
                  </p>
                </div>
                <div>
                  <label className="label" htmlFor="disabled-input">Disabled state</label>
                  <input className="field" id="disabled-input" value="Unavailable on this plan" disabled readOnly />
                </div>
                <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background p-3.5">
                  <div>
                    <p className="text-sm font-medium" id="email-notifications-label">
                      Email notifications
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground" id="email-notifications-description">
                      Weekly product updates.
                    </p>
                  </div>
                  <Switch
                    checked={notifications}
                    onCheckedChange={setNotifications}
                    aria-labelledby="email-notifications-label"
                    aria-describedby="email-notifications-description"
                  />
                </div>
                <div>
                  <label className="label" htmlFor="search-example">Input with icon</label>
                  <div className="relative">
                    <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                    <input className="field pl-9" id="search-example" type="search" placeholder="Search components" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="feedback"
          title="Feedback"
          description="Persistent alerts for context and transient toast feedback for completed actions."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="surface border-sky-400/20 bg-sky-400/[0.06] p-4">
              <div className="flex gap-3">
                <CircleAlert className="mt-0.5 size-4 shrink-0 text-sky-300" aria-hidden="true" />
                <div><h3 className="text-sm font-semibold text-sky-200">Information</h3><p className="mt-1 text-xs leading-5 text-sky-100/65">New settings apply on the next deployment.</p></div>
              </div>
            </div>
            <div className="surface border-emerald-400/20 bg-emerald-400/[0.06] p-4">
              <div className="flex gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-emerald-300" aria-hidden="true" />
                <div><h3 className="text-sm font-semibold text-emerald-200">Success</h3><p className="mt-1 text-xs leading-5 text-emerald-100/65">Your workspace has been published.</p></div>
              </div>
            </div>
            <div className="surface border-destructive/20 bg-destructive/[0.06] p-4">
              <div className="flex gap-3">
                <CircleAlert className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
                <div><h3 className="text-sm font-semibold text-red-200">Action needed</h3><p className="mt-1 text-xs leading-5 text-red-100/65">Add a payment method to continue.</p></div>
              </div>
            </div>
          </div>
          <div className="surface mt-4 flex flex-wrap items-center justify-between gap-4 p-5">
            <div>
              <h3 className="font-semibold">Toast notification</h3>
              <p className="mt-1 text-xs text-muted-foreground">Use for concise, non-blocking confirmation.</p>
            </div>
            <Button variant="outline" onClick={() => setToastVisible(true)}>
              <span>Show toast</span> <Bell data-icon="inline-end" />
            </Button>
          </div>
          <div className="pointer-events-none fixed right-4 bottom-4 z-50" aria-live="polite" aria-atomic="true">
            {toastVisible && (
              <div className="pointer-events-auto flex w-[min(22rem,calc(100vw-2rem))] items-start gap-3 rounded-2xl border border-border bg-popover p-4 text-popover-foreground shadow-2xl">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-emerald-400/10 text-emerald-300"><Check className="size-4" aria-hidden="true" /></span>
                <div className="min-w-0 flex-1"><p className="text-sm font-semibold">Changes saved</p><p className="mt-0.5 text-xs text-muted-foreground">Your preferences are up to date.</p></div>
                <button type="button" className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground" onClick={() => setToastVisible(false)} aria-label="Dismiss notification"><X className="size-4" /></button>
              </div>
            )}
          </div>
        </Section>

        <Section
          id="data-display"
          title="Data display"
          description="Cards, status, people, progress, loading, empty states, tables, and navigation patterns for product screens."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Monthly revenue", "$84,240", "+12.4%"],
              ["Active customers", "2,430", "+8.1%"],
              ["Conversion rate", "6.84%", "+1.2%"],
            ].map(([label, value, change]) => (
              <div key={label} className="surface p-5">
                <div className="flex items-center justify-between gap-4"><p className="text-xs font-medium text-muted-foreground">{label}</p><Button size="icon-xs" variant="ghost" aria-label={`More options for ${label}`}><MoreHorizontal /></Button></div>
                <p className="mt-4 text-2xl font-semibold tracking-tight">{value}</p>
                <p className="mt-2 text-xs font-medium text-emerald-300">{change} <span className="font-normal text-muted-foreground">vs last month</span></p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="surface overflow-hidden">
              <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
                <div><h3 className="font-semibold">Recent projects</h3><p className="mt-0.5 text-xs text-muted-foreground">Updated a few seconds ago</p></div>
                <Button size="sm" variant="outline">View all</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[36rem] text-left text-sm">
                  <thead className="bg-muted/45 text-xs text-muted-foreground">
                    <tr><th scope="col" className="px-5 py-3 font-medium">Project</th><th scope="col" className="px-4 py-3 font-medium">Owner</th><th scope="col" className="px-4 py-3 font-medium">Status</th><th scope="col" className="px-5 py-3 text-right font-medium">Updated</th></tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ["Atlas dashboard", "AR", "Live", "2m ago"],
                      ["Northstar mobile", "DM", "Review", "1h ago"],
                      ["Acme storefront", "SK", "Draft", "Yesterday"],
                    ].map(([project, owner, status, updated]) => (
                      <tr key={project} className="hover:bg-muted/30">
                        <td className="px-5 py-3.5 font-medium">{project}</td>
                        <td className="px-4 py-3.5"><Avatar initials={owner} className="size-7 text-[10px]" /></td>
                        <td className="px-4 py-3.5"><StatusBadge tone={status === "Live" ? "success" : status === "Review" ? "warning" : "neutral"}>{status}</StatusBadge></td>
                        <td className="px-5 py-3.5 text-right text-xs text-muted-foreground">{updated}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <div className="surface p-5">
                <div className="flex items-center justify-between"><h3 className="font-semibold">Launch progress</h3><span className="text-xs text-muted-foreground">72%</span></div>
                <progress className="mt-4 h-2 w-full overflow-hidden rounded-full" value="72" max="100">72%</progress>
                <div className="mt-4 flex -space-x-2">
                  {['AR', 'DM', 'SK'].map((initials) => <Avatar key={initials} initials={initials} className="ring-2 ring-card" />)}
                  <span className="grid size-9 place-items-center rounded-full border border-border bg-muted text-xs text-muted-foreground ring-2 ring-card">+4</span>
                </div>
              </div>
              <div className="surface p-5" role="status" aria-label="Loading content">
                <span className="sr-only">Loading</span>
                <div className="h-3 w-2/5 animate-pulse rounded-full bg-muted motion-reduce:animate-none" />
                <div className="mt-4 h-8 w-3/5 animate-pulse rounded-lg bg-muted motion-reduce:animate-none" />
                <div className="mt-3 h-3 w-full animate-pulse rounded-full bg-muted motion-reduce:animate-none" />
                <div className="mt-2 h-3 w-4/5 animate-pulse rounded-full bg-muted motion-reduce:animate-none" />
                <p className="mt-4 text-xs text-muted-foreground">Skeleton loading state</p>
              </div>
            </div>
          </div>

          <div className="surface mt-4 grid place-items-center px-5 py-12 text-center">
            <span className="grid size-12 place-items-center rounded-2xl border border-border bg-muted text-muted-foreground"><Inbox className="size-5" aria-hidden="true" /></span>
            <h3 className="mt-4 font-semibold">Empty state</h3>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">No projects match this view. Create one to start organizing your work.</p>
            <Button className="mt-5"><Plus data-icon="inline-start" /> New project</Button>
          </div>

          <nav className="mt-4 flex items-center justify-between gap-4" aria-label="Pagination">
            <p className="text-xs text-muted-foreground">Showing 1–10 of 48</p>
            <div className="flex items-center gap-1">
              <Button size="sm" variant="outline" disabled>Previous</Button>
              <Button size="icon-sm" aria-current="page">1</Button>
              <Button size="icon-sm" variant="ghost">2</Button>
              <Button size="icon-sm" variant="ghost">3</Button>
              <Button size="sm" variant="outline">Next</Button>
            </div>
          </nav>
        </Section>

        <AdvancedShowcase />

        <Section
          id="overlays"
          title="Overlays"
          description="Tabs, disclosure, toast, and a native modal demonstrate real keyboard-friendly interactions without extra packages."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="surface p-5 sm:p-6">
              <h3 className="font-semibold">Tabs</h3>
              <div className="mt-4 inline-flex rounded-xl border border-border bg-background p-1" role="tablist" aria-label="Component example">
                {tabs.map((tab, index) => (
                  <button
                    key={tab}
                    ref={(element) => { tabRefs.current[index] = element; }}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab}
                    aria-controls={`panel-${tab.toLowerCase()}`}
                    id={`tab-${tab.toLowerCase()}`}
                    tabIndex={activeTab === tab ? 0 : -1}
                    onClick={() => setActiveTab(tab)}
                    onKeyDown={(event) => handleTabKey(event, index)}
                    className={cn(
                      "rounded-lg px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      activeTab === tab ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div
                className="mt-4 min-h-32 rounded-xl border border-border bg-background p-4"
                role="tabpanel"
                id={`panel-${activeTab.toLowerCase()}`}
                aria-labelledby={`tab-${activeTab.toLowerCase()}`}
              >
                {activeTab === "Preview" && <div><p className="text-sm font-medium">Ready to compose</p><p className="mt-2 text-xs leading-5 text-muted-foreground">Use tabs for related views at the same hierarchy. Arrow keys move focus between options.</p></div>}
                {activeTab === "Code" && <pre className="overflow-x-auto text-xs leading-5 text-primary"><code>{`<Button variant="outline">\n  Continue\n</Button>`}</code></pre>}
                {activeTab === "Usage" && <div><p className="text-sm font-medium">Keep labels concise</p><p className="mt-2 text-xs leading-5 text-muted-foreground">Use two to four tabs. For larger navigation sets, use links instead.</p></div>}
              </div>
            </div>

            <div className="surface p-5 sm:p-6">
              <h3 className="font-semibold">Disclosure &amp; dialog</h3>
              <div className="mt-4 rounded-xl border border-border bg-background">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 rounded-xl px-4 py-3.5 text-left text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                  aria-expanded={accordionOpen}
                  aria-controls="accordion-content"
                  onClick={() => setAccordionOpen((current) => !current)}
                >
                  What is included in this starter?
                  <ChevronDown className={cn("size-4 shrink-0 text-muted-foreground transition-transform motion-reduce:transition-none", accordionOpen && "rotate-180")} aria-hidden="true" />
                </button>
                <div id="accordion-content" hidden={!accordionOpen} className="border-t border-border px-4 py-3 text-xs leading-5 text-muted-foreground">
                  Theme tokens, reusable buttons, complete forms, common feedback, data patterns, and accessible interactions.
                </div>
              </div>
              <div className="mt-4 rounded-xl border border-dashed border-border p-5 text-center">
                <p className="text-sm font-medium">Need a blocking decision?</p>
                <p className="mt-1 text-xs text-muted-foreground">Use a modal only when attention cannot move elsewhere.</p>
                <Button className="mt-4" variant="outline" aria-haspopup="dialog" onClick={() => dialogRef.current?.showModal()}>
                  Open dialog
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Forge UI · Built as a starting point, not a constraint.</p>
          <a className="w-fit text-foreground hover:text-primary" href="#top">Back to top</a>
        </div>
      </footer>

      <dialog
        ref={dialogRef}
        className="m-auto w-[min(30rem,calc(100%-2rem))] rounded-2xl border border-border bg-popover p-0 text-popover-foreground shadow-2xl backdrop:bg-black/75"
        aria-labelledby="dialog-title"
        onClose={() => setSubmitted(false)}
      >
        <form method="dialog" className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary"><Sparkles className="size-5" aria-hidden="true" /></span>
            <Button size="icon-sm" variant="ghost" type="submit" aria-label="Close dialog"><X /></Button>
          </div>
          <h2 className="mt-5 text-xl font-semibold tracking-tight" id="dialog-title">Start from a strong baseline</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Copy the components you need, connect your real data, and replace the demo content. No hidden setup required.</p>
          <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <Button type="submit" variant="outline">Cancel</Button>
            <Button type="submit">Use this starter</Button>
          </div>
        </form>
      </dialog>
    </>
  );
}
