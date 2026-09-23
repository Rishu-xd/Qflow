import Image from "next/image";
import Link from "next/link";
import AuthForm from "@/components/auth-form";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#081811] px-[5vw] py-7 text-[#f4f5ed] before:absolute before:right-[-18vw] before:top-[-22vw] before:h-[52vw] before:w-[52vw] before:max-h-[680px] before:max-w-[680px] before:rounded-full before:border before:border-[#39b52333]">
      <Link className="relative z-10 inline-flex" href="/" aria-label="qflow home"><Image className="h-auto w-[86px]" src="/logo.svg" alt="qflow" width={117} height={57} /></Link>
      <section className="relative mx-auto grid min-h-[calc(100vh-140px)] max-w-[1120px] grid-cols-[minmax(300px,.9fr)_minmax(340px,470px)] items-center gap-[clamp(45px,10vw,170px)] max-[760px]:flex max-[760px]:min-h-[calc(100vh-95px)] max-[760px]:flex-col max-[760px]:justify-center max-[760px]:gap-[42px] max-[760px]:p-[55px_0_20px]">
        <div className="max-w-[540px] max-[760px]:w-full">
          <p className="eyebrow">Welcome back</p>
          <h1 className="text-[clamp(58px,7vw,98px)]">Your time is <em className="text-[#39b523]">yours.</em></h1>
          <p className="max-w-[330px] text-base leading-[1.6] text-[#b6c8bb]">Pick up where you left off and get back to living between the lines.</p>
        </div>
        <div className="bg-[#fffdf8] p-[clamp(28px,5vw,48px)] text-[#18211d] max-[760px]:w-full">
          <h2 className="mb-2 text-[38px]">Log in</h2>
          <p className="mb-7 text-[13px] text-[#69726d]">Enter your details to continue.</p>
          <AuthForm mode="login" />
          <p className="mt-7 border-t border-[#e4e5df] pt-[22px] text-[13px] text-[#69726d]">New to qflow? <Link className="font-bold text-[#287b22]" href="/signup">Create an account</Link></p>
        </div>
      </section>
    </main>
  );
}