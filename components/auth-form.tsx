"use client";

import { motion } from "motion/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type AuthMode = "login" | "signup";

type AuthFormProps = {
  mode: AuthMode;
};

export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const isSignup = mode === "signup";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!supabase) {
      setMessage("Supabase is not configured. Add the public environment variables and try again.");
      return;
    }

    setIsSubmitting(true);
    const result = isSignup
      ? await supabase.auth.signUp({
          email,
          password,
          options: { data: { full_name: name } },
        })
      : await supabase.auth.signInWithPassword({ email, password });

    if (result.error) {
      setMessage(result.error.message);
    } else if (isSignup && !result.data.session) {
      setMessage("Check your email to confirm your account, then log in.");
    } else {
      router.push("/");
      router.refresh();
    }

    setIsSubmitting(false);
  }

  return (
    <motion.form
      className="flex flex-col gap-[18px]"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.12 }}
    >
      {isSignup && (
        <label className="flex flex-col gap-2 text-[11px] font-bold tracking-[.03em] text-[#536058]">
          Your name
          <input className="border border-[#cbd2cb] bg-transparent p-[13px_12px] text-[15px] text-[#18211d] outline-none transition focus:border-[#39b523] focus:shadow-[0_0_0_3px_#39b52324]" value={name} onChange={(event) => setName(event.target.value)} required />
        </label>
      )}
      <label className="flex flex-col gap-2 text-[11px] font-bold tracking-[.03em] text-[#536058]">
        Email address
        <input className="border border-[#cbd2cb] bg-transparent p-[13px_12px] text-[15px] text-[#18211d] outline-none transition focus:border-[#39b523] focus:shadow-[0_0_0_3px_#39b52324]" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </label>
      <label className="flex flex-col gap-2 text-[11px] font-bold tracking-[.03em] text-[#536058]">
        Password
        <input className="border border-[#cbd2cb] bg-transparent p-[13px_12px] text-[15px] text-[#18211d] outline-none transition focus:border-[#39b523] focus:shadow-[0_0_0_3px_#39b52324]" type="password" value={password} onChange={(event) => setPassword(event.target.value)} minLength={6} required />
      </label>
      {message && <p className="m-0 bg-[#f5e5df] p-[11px_12px] text-[12px] leading-[1.45] text-[#974f39]" role="alert">{message}</p>}
      <button className="button mt-[7px] cursor-pointer border-0 bg-[#39b523] px-5 py-4 disabled:cursor-wait disabled:opacity-65" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Working..." : isSignup ? "Create account" : "Log in"}
        <span>↗</span>
      </button>
    </motion.form>
  );
}