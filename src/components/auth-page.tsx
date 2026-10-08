"use client";

import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

type AuthVisualProps = {
  badge: string;
  quote: string;
};

function AuthVisual({ badge, quote }: AuthVisualProps) {
  return (
    <section
      className="relative hidden min-h-dvh overflow-hidden border-l border-border/70 bg-card lg:flex lg:items-center lg:justify-center lg:p-10 xl:p-16"
      data-auth-panel="visual"
      aria-label="Product preview"
    >
      <div className="grid-bg absolute inset-0 opacity-35" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <figure className="relative w-full max-w-md">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-white/10 bg-background shadow-[0_32px_90px_rgba(0,0,0,0.5)]">
          <Image
            src="/sites/video-azbahri/tech-noir.webp"
            alt="Dark technical illustration of a connected laptop and computing device"
            fill
            priority
            sizes="(min-width: 1280px) 384px, 36vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 p-7">
            <div className="mb-4 flex items-center gap-2 text-xs font-medium text-primary">
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(85,209,135,0.8)]" />
              {badge}
            </div>
            <blockquote className="text-xl font-medium leading-8 tracking-tight text-white">
              “{quote}”
            </blockquote>
          </div>
        </div>
        <figcaption className="mt-6 text-center text-xs leading-5 text-muted-foreground">
          Accessible components · Responsive layouts · Strict TypeScript
        </figcaption>
      </figure>
    </section>
  );
}

export function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const password = String(form.get("password") ?? "");
    const confirmPassword = String(form.get("confirmPassword") ?? "");

    if (password !== confirmPassword) {
      setStatus("Passwords do not match.");
      return;
    }

    setStatus("Form validated. Connect an authentication provider to create accounts.");
  }

  return (
    <main className="min-h-dvh bg-background text-foreground" data-auth-layout="split">
      <div className="grid min-h-dvh lg:grid-cols-2">
        <section
          className="flex min-h-dvh flex-col px-5 py-6 sm:px-10 lg:px-14 xl:px-20"
          data-auth-panel="form"
        >
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-lg text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <ArrowLeft
                className="size-4 transition-transform group-hover:-translate-x-0.5 motion-reduce:transition-none"
                aria-hidden="true"
              />
              UI kit
            </Link>
            <Link
              href="/login"
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              Sign in
            </Link>
          </div>

          <div className="mx-auto flex w-full max-w-[27rem] flex-1 flex-col justify-center py-10 sm:py-12">
            <Link
              href="/"
              className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-xl focus-visible:ring-3 focus-visible:ring-ring/50"
              aria-label="Forge UI home"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_28px_rgba(246,189,65,0.2)]">
                <Sparkles className="size-4 icon-motion-wand" aria-hidden="true" />
              </span>
              <span className="font-semibold tracking-tight">Forge UI</span>
            </Link>

            <div className="mb-7">
              <p className="eyebrow">Start building</p>
              <h1
                id="register-title"
                className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
              >
                Create your account
              </h1>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground sm:text-base">
                Set up your workspace and start with production-ready UI patterns.
              </p>
            </div>

            <form
              className="space-y-4"
              aria-labelledby="register-title"
              onSubmit={handleSubmit}
              onInput={() => status && setStatus("")}
            >
              <div>
                <label className="label" htmlFor="register-name">
                  Full name
                </label>
                <div className="relative">
                  <UserRound
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    className="field min-h-11 pl-10"
                    id="register-name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="label" htmlFor="register-email">
                  Email address
                </label>
                <div className="relative">
                  <Mail
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    className="field min-h-11 pl-10"
                    id="register-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="label" htmlFor="register-password">
                  Password
                </label>
                <div className="relative">
                  <LockKeyhole
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    className="field min-h-11 px-10"
                    id="register-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    minLength={8}
                    placeholder="At least 8 characters"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-1.5 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                    aria-controls="register-password"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                    onClick={() => setShowPassword((visible) => !visible)}
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" aria-hidden="true" />
                    ) : (
                      <Eye className="size-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="label" htmlFor="register-confirm-password">
                  Confirm password
                </label>
                <div className="relative">
                  <LockKeyhole
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    className="field min-h-11 pl-10"
                    id="register-confirm-password"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    minLength={8}
                    placeholder="Repeat your password"
                    required
                  />
                </div>
              </div>

              <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-5 text-muted-foreground">
                <input
                  type="checkbox"
                  name="terms"
                  className="mt-0.5 size-4 shrink-0 rounded border-input bg-background accent-primary"
                  required
                />
                I agree to the terms and privacy policy for this template.
              </label>

              <Button type="submit" size="lg" className="h-11 w-full gap-2">
                <span>Create account</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>

              <p
                className="min-h-5 text-center text-xs leading-5 text-muted-foreground"
                role="status"
                aria-live="polite"
              >
                {status}
              </p>
            </form>

            <p className="mt-3 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                Sign in
              </Link>
            </p>
          </div>
        </section>

        <AuthVisual
          badge="Built for teams"
          quote="One strong foundation. Every product surface stays consistent."
        />
      </div>
    </main>
  );
}

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Form validated. Connect an authentication provider to enable sign in.");
  }

  return (
    <main className="min-h-dvh bg-background text-foreground" data-auth-layout="split">
      <div className="grid min-h-dvh lg:grid-cols-2">
        <section
          className="flex min-h-dvh flex-col px-5 py-6 sm:px-10 lg:px-14 xl:px-20"
          data-auth-panel="form"
        >
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-lg text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <ArrowLeft
                className="size-4 transition-transform group-hover:-translate-x-0.5 motion-reduce:transition-none"
                aria-hidden="true"
              />
              UI kit
            </Link>
            <Link
              href="/register"
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              Create account
            </Link>
          </div>

          <div className="mx-auto flex w-full max-w-[27rem] flex-1 flex-col justify-center py-12 sm:py-16">
            <Link
              href="/"
              className="mb-10 inline-flex w-fit items-center gap-2.5 rounded-xl focus-visible:ring-3 focus-visible:ring-ring/50"
              aria-label="Forge UI home"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_28px_rgba(246,189,65,0.2)]">
                <Sparkles className="size-4 icon-motion-wand" aria-hidden="true" />
              </span>
              <span className="font-semibold tracking-tight">Forge UI</span>
            </Link>

            <div className="mb-8">
              <p className="eyebrow">Secure workspace</p>
              <h1
                id="login-title"
                className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
              >
                Welcome back
              </h1>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground sm:text-base">
                Sign in to continue building polished interfaces with your team.
              </p>
            </div>

            <form
              className="space-y-5"
              aria-labelledby="login-title"
              onSubmit={handleSubmit}
              onInput={() => status && setStatus("")}
            >
              <div>
                <label className="label" htmlFor="login-email">
                  Email address
                </label>
                <div className="relative">
                  <Mail
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    className="field min-h-11 pl-10"
                    id="login-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="mb-1.5 flex items-center justify-between gap-4">
                  <label className="label mb-0" htmlFor="login-password">
                    Password
                  </label>
                  <span className="text-xs text-muted-foreground">Minimum 8 characters</span>
                </div>
                <div className="relative">
                  <LockKeyhole
                    className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    className="field min-h-11 px-10"
                    id="login-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    minLength={8}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-1.5 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                    aria-controls="login-password"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                    onClick={() => setShowPassword((visible) => !visible)}
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" aria-hidden="true" />
                    ) : (
                      <Eye className="size-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              <label className="flex w-fit cursor-pointer items-center gap-2.5 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  name="remember"
                  className="size-4 rounded border-input bg-background accent-primary"
                />
                Keep me signed in
              </label>

              <Button type="submit" size="lg" className="h-11 w-full gap-2">
                <span>Sign in</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>

              <p
                className="min-h-5 text-center text-xs leading-5 text-muted-foreground"
                role="status"
                aria-live="polite"
              >
                {status}
              </p>
            </form>

            <p className="mt-4 text-center text-sm text-muted-foreground">
              New to Forge UI?{" "}
              <Link
                href="/register"
                className="font-medium text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                Create an account
              </Link>
            </p>

            <div className="mt-10 flex items-start gap-3 border-t border-border/70 pt-6 text-xs leading-5 text-muted-foreground">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-400" aria-hidden="true" />
              <p>
                UI-only template. No credentials leave this browser until you connect a trusted
                authentication provider.
              </p>
            </div>
          </div>
        </section>

        <AuthVisual
          badge="Production-ready patterns"
          quote="Ship precise interfaces without rebuilding the fundamentals."
        />
      </div>
    </main>
  );
}
