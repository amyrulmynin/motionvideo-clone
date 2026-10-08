"use client";

import {
  ArrowLeft,
  ArrowRight,
  BellRing,
  Check,
  ChevronDown,
  ChevronsUpDown,
  CircleHelp,
  Command,
  Copy,
  FileText,
  Gauge,
  Keyboard,
  LayoutDashboard,
  LogOut,
  Palette,
  Plus,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  UploadCloud,
  UserPlus,
  WandSparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  type CSSProperties,
  type ChangeEvent,
  type KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const commandItems: Array<{
  label: string;
  detail: string;
  shortcut: string;
  icon: LucideIcon;
}> = [
  { label: "Create project", detail: "Start a blank workspace", shortcut: "C", icon: Plus },
  { label: "Open dashboard", detail: "Review project activity", shortcut: "D", icon: LayoutDashboard },
  { label: "Invite teammate", detail: "Add someone to this workspace", shortcut: "I", icon: UserPlus },
  { label: "Project settings", detail: "Configure defaults and access", shortcut: "S", icon: Settings },
];

const projectOptions = [
  "Analytics dashboard",
  "Marketing website",
  "Mobile application",
  "Commerce storefront",
  "Documentation portal",
];

const setupSteps = [
  { title: "Workspace", body: "Name the space and choose a visual identity.", icon: Palette },
  { title: "Permissions", body: "Choose who can view, edit, and invite.", icon: ShieldCheck },
  { title: "Launch", body: "Review the setup and publish when ready.", icon: Rocket },
];

const animatedIcons: Array<{
  label: string;
  className: string;
  icon: LucideIcon;
}> = [
  { label: "Float", className: "icon-motion-float", icon: Sparkles },
  { label: "Ring", className: "icon-motion-ring", icon: BellRing },
  { label: "Orbit", className: "icon-motion-orbit", icon: Gauge },
  { label: "Pulse", className: "icon-motion-pulse", icon: ShieldCheck },
  { label: "Wand", className: "icon-motion-wand", icon: WandSparkles },
  { label: "Launch", className: "icon-motion-launch", icon: Rocket },
];

function AdvancedShowcase() {
  const [activity, setActivity] = useState("Ready for interaction");
  const [commandQuery, setCommandQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [comboOpen, setComboOpen] = useState(false);
  const [comboQuery, setComboQuery] = useState("");
  const [activeOption, setActiveOption] = useState(0);
  const [fileName, setFileName] = useState("No file selected");
  const [rangeValue, setRangeValue] = useState(68);
  const [step, setStep] = useState(0);
  const commandDialogRef = useRef<HTMLDialogElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const filteredCommands = useMemo(() => {
    const query = commandQuery.trim().toLowerCase();
    if (!query) return commandItems;
    return commandItems.filter((item) =>
      `${item.label} ${item.detail}`.toLowerCase().includes(query),
    );
  }, [commandQuery]);

  const filteredOptions = useMemo(() => {
    const query = comboQuery.trim().toLowerCase();
    if (!query) return projectOptions;
    return projectOptions.filter((option) => option.toLowerCase().includes(query));
  }, [comboQuery]);

  function openCommandPalette() {
    setCommandQuery("");
    commandDialogRef.current?.showModal();
  }

  function runCommand(label: string) {
    setActivity(`${label} selected`);
    commandDialogRef.current?.close();
  }

  function selectProject(option: string) {
    setComboQuery(option);
    setComboOpen(false);
    setActivity(`${option} selected`);
  }

  function handleComboboxKey(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setComboOpen(true);
      setActiveOption((current) =>
        Math.min(current + 1, Math.max(filteredOptions.length - 1, 0)),
      );
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setComboOpen(true);
      setActiveOption((current) => Math.max(current - 1, 0));
    }
    if (event.key === "Enter" && comboOpen && filteredOptions[activeOption]) {
      event.preventDefault();
      selectProject(filteredOptions[activeOption]);
    }
    if (event.key === "Escape") setComboOpen(false);
  }

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setFileName(file?.name ?? "No file selected");
    if (file) setActivity(`${file.name} ready to upload`);
  }

  useEffect(() => {
    function handleShortcut(event: globalThis.KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openCommandPalette();
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleShortcut);
    window.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("keydown", handleShortcut);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <section id="advanced" className="section-shell">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">Advanced patterns</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Advanced interactions
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
            Search, select, upload, configure, and navigate with real state and
            keyboard support.
          </p>
        </div>
        <p
          className="inline-flex min-h-8 items-center gap-2 rounded-full border border-border bg-card px-3 text-xs text-muted-foreground"
          aria-live="polite"
        >
          <span className="size-1.5 rounded-full bg-emerald-400" />
          {activity}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <article className="surface p-5 sm:p-6">
          <span className="advanced-icon">
            <Command className="icon-motion-pulse size-5" aria-hidden="true" />
          </span>
          <h3 className="mt-5 font-semibold">Command palette</h3>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Jump to common actions without leaving keyboard flow.
          </p>
          <Button className="mt-5 w-full justify-between" variant="outline" onClick={openCommandPalette}>
            <span className="flex items-center gap-2">
              <Search className="size-4" aria-hidden="true" /> Search commands
            </span>
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
              Ctrl K
            </kbd>
          </Button>
        </article>

        <article className="surface p-5 sm:p-6">
          <span className="advanced-icon">
            <SlidersHorizontal className="icon-motion-float size-5" aria-hidden="true" />
          </span>
          <h3 className="mt-5 font-semibold">Dropdown menu</h3>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Compact actions with outside-click and Escape dismissal.
          </p>
          <div className="relative mt-5" ref={menuRef}>
            <Button
              className="w-full justify-between"
              variant="outline"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              onKeyDown={(event) => {
                if (event.key === "Escape") setMenuOpen(false);
              }}
            >
              Workspace actions
              <ChevronDown
                className={cn(
                  "size-4 transition-transform motion-reduce:transition-none",
                  menuOpen && "rotate-180",
                )}
                aria-hidden="true"
              />
            </Button>
            {menuOpen && (
              <div
                role="menu"
                aria-label="Workspace actions"
                className="absolute top-full right-0 left-0 z-20 mt-2 rounded-xl border border-border bg-popover p-1.5 shadow-2xl"
              >
                {(
                  [
                    ["Duplicate workspace", Copy],
                    ["Open settings", Settings],
                    ["Sign out", LogOut],
                  ] as Array<[string, LucideIcon]>
                ).map(([label, Icon]) => (
                  <button
                    key={label}
                    type="button"
                    role="menuitem"
                    className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-xs text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground focus-visible:outline-none"
                    onClick={() => {
                      setActivity(`${label} selected`);
                      setMenuOpen(false);
                    }}
                  >
                    <Icon className="size-3.5" aria-hidden="true" />
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </article>

        <article className="surface p-5 sm:p-6">
          <span className="advanced-icon">
            <ChevronsUpDown className="icon-motion-ring size-5" aria-hidden="true" />
          </span>
          <h3 className="mt-5 font-semibold">Combobox</h3>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Filter a long list and select with mouse or keyboard.
          </p>
          <div className="relative mt-5">
            <label className="sr-only" htmlFor="advanced-combobox">
              Project type
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                id="advanced-combobox"
                className="field pr-9 pl-9"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded={comboOpen}
                aria-controls="advanced-combobox-options"
                aria-activedescendant={
                  comboOpen && filteredOptions[activeOption]
                    ? `advanced-option-${filteredOptions[activeOption].toLowerCase().replaceAll(" ", "-")}`
                    : undefined
                }
                value={comboQuery}
                placeholder="Find a project type"
                onFocus={() => setComboOpen(true)}
                onChange={(event) => {
                  setComboQuery(event.target.value);
                  setActiveOption(0);
                  setComboOpen(true);
                }}
                onKeyDown={handleComboboxKey}
              />
              <ChevronsUpDown
                className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
            {comboOpen && (
              <div
                id="advanced-combobox-options"
                role="listbox"
                className="absolute top-full right-0 left-0 z-20 mt-2 max-h-48 overflow-y-auto rounded-xl border border-border bg-popover p-1.5 shadow-2xl"
              >
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option, index) => (
                    <button
                      key={option}
                      id={`advanced-option-${option.toLowerCase().replaceAll(" ", "-")}`}
                      type="button"
                      role="option"
                      aria-selected={comboQuery === option}
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-xs",
                        index === activeOption
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => selectProject(option)}
                    >
                      {option}
                      {comboQuery === option && <Check className="size-3.5 text-primary" aria-hidden="true" />}
                    </button>
                  ))
                ) : (
                  <p className="px-2.5 py-3 text-xs text-muted-foreground">No matching project type.</p>
                )}
              </div>
            )}
          </div>
        </article>

        <article className="surface p-5 sm:p-6">
          <span className="advanced-icon">
            <UploadCloud className="icon-motion-float size-5" aria-hidden="true" />
          </span>
          <h3 className="mt-5 font-semibold">File upload</h3>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Native file selection with an immediate filename preview.
          </p>
          <label className="mt-5 flex cursor-pointer flex-col items-center rounded-xl border border-dashed border-border bg-background px-4 py-6 text-center transition-colors hover:border-primary/50 hover:bg-primary/[0.03] focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/15">
            <UploadCloud className="icon-motion-launch size-6 text-primary" aria-hidden="true" />
            <span className="mt-2 text-xs font-medium">Choose a project asset</span>
            <span className="mt-1 max-w-full truncate text-[11px] text-muted-foreground">{fileName}</span>
            <input className="sr-only" type="file" onChange={handleFile} />
          </label>
        </article>

        <article className="surface p-5 sm:p-6">
          <span className="advanced-icon">
            <Gauge className="icon-motion-orbit size-5" aria-hidden="true" />
          </span>
          <div className="mt-5 flex items-center justify-between gap-4">
            <h3 className="font-semibold">Range slider</h3>
            <output className="code-pill" htmlFor="quality-range">{rangeValue}%</output>
          </div>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Tune a value and expose the exact result as it changes.
          </p>
          <input
            id="quality-range"
            className="range-control mt-7 w-full"
            type="range"
            min="0"
            max="100"
            value={rangeValue}
            style={{ "--range-progress": `${rangeValue}%` } as CSSProperties}
            aria-label="Quality level"
            onChange={(event) => setRangeValue(Number(event.target.value))}
          />
          <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
            <span>Fast</span><span>Balanced</span><span>Precise</span>
          </div>
        </article>

        <article className="surface p-5 sm:p-6 lg:col-span-2">
          <span className="advanced-icon">
            <Rocket className="icon-motion-launch size-5" aria-hidden="true" />
          </span>
          <h3 className="mt-5 font-semibold">Stepper</h3>
          <div className="mt-5 grid grid-cols-3 gap-2" aria-label="Setup progress">
            {setupSteps.map((item, index) => (
              <div key={item.title} className="flex items-center gap-2">
                <span
                  className={cn(
                    "grid size-7 shrink-0 place-items-center rounded-full border text-[10px] font-semibold",
                    index < step && "border-emerald-400 bg-emerald-400 text-emerald-950",
                    index === step && "border-primary bg-primary text-primary-foreground",
                    index > step && "border-border bg-background text-muted-foreground",
                  )}
                  aria-current={index === step ? "step" : undefined}
                >
                  {index < step ? <Check className="size-3.5" aria-hidden="true" /> : index + 1}
                </span>
                <span className="hidden text-xs font-medium sm:inline">{item.title}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-border bg-background p-4">
            {(() => {
              const ActiveIcon = setupSteps[step].icon;
              return (
                <div className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <ActiveIcon className="icon-motion-pulse size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">{setupSteps[step].title}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{setupSteps[step].body}</p>
                  </div>
                </div>
              );
            })()}
          </div>
          <div className="mt-4 flex justify-between gap-2">
            <Button variant="outline" disabled={step === 0} onClick={() => setStep((current) => Math.max(current - 1, 0))}>
              <ArrowLeft data-icon="inline-start" /> Back
            </Button>
            <Button
              onClick={() => {
                if (step === setupSteps.length - 1) {
                  setActivity("Setup completed");
                  setStep(0);
                } else {
                  setStep((current) => current + 1);
                }
              }}
            >
              {step === setupSteps.length - 1 ? "Complete" : "Next"}
              {step < setupSteps.length - 1 && <ArrowRight data-icon="inline-end" />}
            </Button>
          </div>
        </article>

        <article className="surface p-5 sm:p-6">
          <span className="advanced-icon">
            <CircleHelp className="icon-motion-wand size-5" aria-hidden="true" />
          </span>
          <h3 className="mt-5 font-semibold">Tooltip</h3>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Hover or focus the icon to reveal concise contextual help.
          </p>
          <div className="mt-7 flex items-center gap-3 rounded-xl border border-border bg-background p-4">
            <span className="text-sm font-medium">Deployment region</span>
            <span className="group relative ml-auto">
              <button
                type="button"
                className="grid size-7 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-describedby="region-tooltip"
              >
                <CircleHelp className="icon-motion-ring size-4" aria-hidden="true" />
                <span className="sr-only">About deployment region</span>
              </button>
              <span
                id="region-tooltip"
                role="tooltip"
                className="pointer-events-none absolute right-0 bottom-full z-20 mb-2 w-48 translate-y-1 rounded-lg border border-border bg-popover px-3 py-2 text-xs leading-5 text-popover-foreground opacity-0 shadow-xl transition group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 motion-reduce:transition-none"
              >
                Choose the region nearest most of your users.
              </span>
            </span>
          </div>
        </article>
      </div>

      <div className="surface mt-4 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold">Animated icon set</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Lightweight CSS motion; automatically still when reduced motion is enabled.
            </p>
          </div>
          <Keyboard className="size-5 text-muted-foreground" aria-hidden="true" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6">
          {animatedIcons.map(({ label, className, icon: Icon }) => (
            <div key={label} className="animated-icon-card grid min-h-24 place-items-center rounded-xl border border-border bg-background p-3 text-center">
              <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className={cn("size-4", className)} aria-hidden="true" />
              </span>
              <span className="mt-2 text-[10px] text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <dialog
        ref={commandDialogRef}
        className="m-auto w-[min(36rem,calc(100%-2rem))] rounded-2xl border border-border bg-popover p-0 text-popover-foreground shadow-2xl backdrop:bg-black/75"
        aria-labelledby="command-palette-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="p-2">
          <div className="flex items-center gap-2 border-b border-border px-2">
            <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <label className="sr-only" htmlFor="command-search">Search commands</label>
            <input
              id="command-search"
              className="h-12 min-w-0 flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
              value={commandQuery}
              placeholder="Type a command or search…"
              onChange={(event) => setCommandQuery(event.target.value)}
            />
            <button type="button" className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground" onClick={() => commandDialogRef.current?.close()} aria-label="Close command palette">
              <X className="size-4" />
            </button>
          </div>
          <h2 className="sr-only" id="command-palette-title">Command palette</h2>
          <div className="max-h-80 overflow-y-auto p-1.5">
            <p className="px-2 py-2 text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">Commands</p>
            {filteredCommands.length > 0 ? (
              filteredCommands.map((item) => {
                const Icon = item.icon;
                return (
                  <button key={item.label} type="button" className="group flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left hover:bg-muted focus-visible:bg-muted focus-visible:outline-none" onClick={() => runCommand(item.label)}>
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-border bg-background text-muted-foreground group-hover:text-primary">
                      <Icon className="icon-motion-pulse size-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1"><span className="block text-sm font-medium">{item.label}</span><span className="block truncate text-xs text-muted-foreground">{item.detail}</span></span>
                    <kbd className="rounded border border-border bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground">{item.shortcut}</kbd>
                  </button>
                );
              })
            ) : (
              <div className="grid place-items-center px-4 py-10 text-center"><FileText className="size-5 text-muted-foreground" aria-hidden="true" /><p className="mt-2 text-sm font-medium">No commands found</p><p className="mt-1 text-xs text-muted-foreground">Try another keyword.</p></div>
            )}
          </div>
        </div>
      </dialog>
    </section>
  );
}

export { AdvancedShowcase };
