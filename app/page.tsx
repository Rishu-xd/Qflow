"use client";

import { motion } from "motion/react";
import Image from "next/image";

const steps = [
  { number: "01", title: "Find your place", text: "Search nearby barbers, clinics, salons, and more." },
  { number: "02", title: "Take your spot", text: "Join the queue remotely with one tap. No waiting room needed." },
  { number: "03", title: "Arrive right on time", text: "Get live updates and head over when your turn is close." },
];

const places = [
  { name: "Mane Society", type: "Barbershop", wait: "12 min", color: "bg-[#f1c4a7] text-[#9e5637]" },
  { name: "Nurture Clinic", type: "Health clinic", wait: "18 min", color: "bg-[#b8d5dc] text-[#326875]" },
  { name: "The Daily Dose", type: "Wellness", wait: "6 min", color: "bg-[#e8dda6] text-[#756a2b]" },
];

export default function Home() {
  return (
    <main className="site-shell !bg-[#081811] !text-[#f4f5ed]">
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="qflow home"><Image className="brand-logo" src="/logo.svg" alt="qflow" width={117} height={57} priority /></a>
        <div className="nav-links"><a className="!text-[#c3d1c6] hover:!text-white" href="#how-it-works">How it works</a><a className="!text-[#c3d1c6] hover:!text-white" href="#businesses">For businesses</a></div>
        <div className="nav-actions"><a className="login-link !text-[#c3d1c6] hover:!text-white" href="#login">Log in</a><a className="button button-small button-dark !bg-[#02100c]" href="#signup">Sign up free <span>↗</span></a></div>
      </nav>
      <section className="hero" id="top">
        <div className="hero-copy">
          <motion.p className="eyebrow !text-[#9fbaa9]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Less waiting. More living.</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>Your time is <em className="!text-[#39b523]">yours.</em></motion.h1>
          <motion.p className="hero-text !text-[#b6c8bb]" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>Join the line from wherever you are. qflow lets you see the wait, grab a spot, and show up just in time.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}><a className="button button-lime !bg-[#39b523]" href="#find-a-place">Find a place <span>↗</span></a><a className="text-link !border-[#c3d1c6] !text-[#f4f5ed]" href="#businesses">I run a business <span>→</span></a></motion.div>
          <div className="trust-row"><div className="avatar-stack" aria-hidden="true"><span>J</span><span>M</span><span>A</span><span>+</span></div><p><strong>12,000+</strong> people are skipping the wait today</p></div>
        </div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
          <div className="!ml-[53px] h-[540px] rounded-[2px] bg-[linear-gradient(180deg,rgba(10,33,26,.02),rgba(10,33,26,.32)),url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center max-[850px]:!ml-[38px] max-[850px]:h-[430px] max-[480px]:!ml-[25px] max-[480px]:h-[365px]" />
          <div className="absolute left-0 top-[85px] w-[265px] bg-[#fffdf8] p-[21px] pb-5 text-[#18211d] shadow-[0_20px_60px_rgba(27,38,30,.18)] max-[850px]:top-[55px] max-[850px]:w-[min(265px,72vw)] max-[480px]:top-[38px]" id="find-a-place">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[.02em] text-[#6f7b73]"><span className="h-1.5 w-1.5 rounded-full bg-[#90bc45]" /><span>Live nearby</span><span className="ml-auto text-[#9ba49e]">3 places</span></div>
            <div className="my-[30px] mb-[19px] text-[21px] leading-[1.05] tracking-[-.055em]">What are you<br /><strong className="font-semibold">in the mood for?</strong></div>
            <div className="border-t border-[#e6e4de]">{places.map((place) => <div className="flex items-center gap-[9px] border-b border-[#e6e4de] py-3" key={place.name}><span className={`flex h-[31px] w-[31px] items-center justify-center rounded-full text-xs font-bold ${place.color}`}>{place.name.slice(0, 1)}</span><span className="flex flex-1 flex-col gap-[3px]"><strong className="text-[11px]">{place.name}</strong><small className="text-[9px] text-[#9ba19c]">{place.type}</small></span><span className="flex flex-col gap-[3px] text-right"><strong className="text-[11px]">{place.wait}</strong><small className="text-[9px] text-[#9ba19c]">wait</small></span></div>)}</div>
            <a className="mt-[18px] flex items-center justify-between text-[10px] font-bold text-[#64722e]" href="#find-a-place">Explore all places <span className="text-lg leading-none">↗</span></a>
          </div>
          <div className="absolute bottom-8 right-[-17px] flex rotate-[-3deg] items-center gap-2 bg-[#39b523] px-4 py-[13px] text-[10px] font-bold text-[#09251a] shadow-[0_10px_25px_rgba(27,38,30,.15)] max-[850px]:right-0 max-[850px]:bottom-[18px] max-[480px]:bottom-0 max-[480px]:px-[11px] max-[480px]:text-[9px]"><span className="text-[15px]">✦</span> No waiting rooms today</div>
        </motion.div>
      </section>
      <section className="ticker !bg-[#011603] !text-[#fafcfa]" aria-label="qflow benefits"><span>REAL-TIME QUEUES</span><i>✳</i><span>YOUR TIME, ON YOUR TERMS</span><i>✳</i><span>BUILT FOR LOCAL</span><i>✳</i><span>REAL-TIME QUEUES</span></section>
      <section className="steps-section !bg-[#081812]" id="how-it-works"><div className="section-heading"><p className="eyebrow !text-[#9fbaa9]">It&apos;s really that simple</p><h2>Make waiting<br /><em className="!text-[#39b523]">disappear.</em></h2></div><div className="step-grid">{steps.map((step) => <div className="step" key={step.number}><span className="step-number !text-[#9fbaa9]">{step.number}</span><h3>{step.title}</h3><p className="!text-[#b6c8bb]">{step.text}</p></div>)}</div></section>
      <section className="business-band !bg-[#030806]" id="businesses"><div><p className="eyebrow !text-[#9fbaa9] " style={{letterSpacing:"2px"}}>For local businesses</p><h2>Turn your queue<br />into <em className="!text-[#39b523]">loyalty.</em></h2></div><div id="signup"><p className="!text-[#c3d1c6]">Give your customers their time back while keeping your team moving. qflow makes your busiest days feel beautifully manageable.</p><a className="button button-lime !bg-[#39b523]" href="#signup">Bring qflow to your place <span>↗</span></a></div></section>
    </main>
  );
}
