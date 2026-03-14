"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
	const sigRefSp = useRef<HTMLSpanElement>(null);
	const sigRefPc = useRef<HTMLSpanElement>(null);
	const isGold = useRef<boolean>(false);

	useEffect(() => {
		const sigEl = sigRefSp.current;
		const sigElPc = sigRefPc.current;
		if (!sigEl) return;

		sigEl.innerHTML = "";
		if (sigElPc) sigElPc.innerHTML = "";

		const text = "produced by y.nakano";
		let i = 0;
		const timeouts: number[] = [];

		function addTimeout(fn: () => void, delay: number) {
			const id = window.setTimeout(fn, delay);
			timeouts.push(id);
			return id;
		}

		function typeChar() {
			if (i < text.length) {
				const span = document.createElement("span");
				span.className = "sig-char";
				span.textContent = text[i] === " " ? "\u00A0" : text[i];
				sigEl?.appendChild(span);
				const spanPc = document.createElement("span");
				spanPc.className = "sig-char";
				spanPc.textContent = text[i] === " " ? "\u00A0" : text[i];
				sigElPc?.appendChild(spanPc);
				i++;
				addTimeout(typeChar, 80);
			} else {
				addTimeout(triggerAttention, 600);
			}
		}

		function triggerAttention() {
			const vpText = document.getElementById("vpText");
			const vpArrow = document.getElementById("vpArrow");
			const vpWrapper = document.getElementById("vpWrapper");
			const vpTextPc = document.getElementById("vpTextPc");
			const vpArrowPc = document.getElementById("vpArrowPc");
			const vpWrapperPc = document.getElementById("vpWrapperPc");

			// スマホ
			if (vpWrapper) {
				vpWrapper.classList.remove("opacity-0", "translate-y-2");
				vpWrapper.classList.add("opacity-100", "translate-y-0");
			}
			// PC
			if (vpWrapperPc) {
				vpWrapperPc.classList.remove("opacity-0", "translate-y-2");
				vpWrapperPc.classList.add("opacity-100", "translate-y-0");
			}

			addTimeout(() => {
				[vpText, vpTextPc].forEach(el => {
					if (!el) return;
					el.classList.remove("text-white/48");
					el.classList.add("text-[#D4AF37]");
					el.style.textShadow = "0 0 8px rgba(212,175,55,0.35)";
				});
				isGold.current = true;
			}, 350);

			addTimeout(() => {
				[vpArrow, vpArrowPc].forEach(el => {
					if (!el) return;
					el.classList.remove("opacity-0", "-translate-y-1");
					el.classList.add("opacity-100", "translate-y-0");
					el.style.color = "rgba(212,175,55,0.9)";
				});
			}, 520);
		}

		const vpLink = document.getElementById("vpLink");

		function handleMouseEnter() {
			const vpText = document.getElementById("vpText");
			if (vpText) {
				vpText.style.color = "";
				vpText.style.textShadow = "";
			}
		}

		function handleMouseLeave() {
			if (!isGold.current) return;
			const vpText = document.getElementById("vpText");
			if (vpText) {
				vpText.style.color = "#D4AF37";
				vpText.style.textShadow = "0 0 8px rgba(212,175,55,0.35)";
			}
		}

		function handleMouseEnterPc() {
			const vpTextPc = document.getElementById("vpTextPc");
			if (vpTextPc) {
				vpTextPc.style.color = "";
				vpTextPc.style.textShadow = "";
			}
		}

		function handleMouseLeavePc() {
			if (!isGold.current) return;
			const vpTextPc = document.getElementById("vpTextPc");
			if (vpTextPc) {
				vpTextPc.style.color = "#D4AF37";
				vpTextPc.style.textShadow = "0 0 8px rgba(212,175,55,0.35)";
			}
		}

		const vpLinkPc = document.getElementById("vpLinkPc");

		if (vpLink) {
			vpLink.addEventListener("mouseenter", handleMouseEnter);
			vpLink.addEventListener("mouseleave", handleMouseLeave);
		}
		if (vpLinkPc) {
			vpLinkPc.addEventListener("mouseenter", handleMouseEnterPc);
			vpLinkPc.addEventListener("mouseleave", handleMouseLeavePc);
		}

		addTimeout(typeChar, 500);

		return () => {
			for (const id of timeouts) {
				window.clearTimeout(id);
			}
			if (vpLink) {
				vpLink.removeEventListener("mouseenter", handleMouseEnter);
				vpLink.removeEventListener("mouseleave", handleMouseLeave);
			}
			if (vpLinkPc) {
				vpLinkPc.removeEventListener("mouseenter", handleMouseEnterPc);
				vpLinkPc.removeEventListener("mouseleave", handleMouseLeavePc);
			}
		};
	}, []);

	return (
		<main className="relative min-h-screen overflow-hidden bg-black text-white">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(255,255,255,0.06),transparent_28%)]" />

			<div className="relative flex min-h-screen flex-col px-6 pt-24 pb-12 md:px-20 md:py-0">

				{/* タイトル */}
				<div className="flex justify-end md:hidden pt-4">
					<div className="animate-title max-w-[88vw] text-right">
						<h1 className="leading-none">
							<div>
								<span className="text-[34px] font-extralight tracking-[0.1em] text-white/88 sm:text-[42px]">
									office PROJECT.NO
								</span>
							</div>
							<div className="mt-3">
								<span className="text-[20px] font-extralight tracking-[0.16em] text-white/48 sm:text-[24px]">
									_2nd
								</span>
							</div>
						</h1>
						<div className="mt-6 ml-auto h-px w-20 bg-white/12" />
						<div className="mt-6 space-y-2 text-[11px] tracking-[0.18em] text-white/28">
							<p>Building systems.</p>
							<p>Designing structure.</p>
							<p>& Shaping strategy.</p>
						</div>
					</div>
				</div>

				{/* PC タイトル */}
				<div className="hidden md:flex flex-1 items-center justify-end">
					<div className="animate-title text-right">
						<h1 className="leading-none">
							<div className="block translate-x-2" style={{ animationDelay: "1.5s" }}>
								<div>
									<span className="text-[55px] font-extralight tracking-[0.22em] text-white/88">
										office PROJECT.NO
									</span>
								</div>
								<div className="mt-4">
									<span className="text-[40px] font-extralight tracking-[0.28em] text-white/48">
										_2nd
									</span>
								</div>
							</div>
						</h1>
						<div className="mt-12 ml-auto h-px w-28 bg-white/12" />
						<div className="mt-10 space-y-3 text-[13px] tracking-[0.32em] text-white/28">
							<p>Building systems.</p>
							<p>Designing structure.</p>
							<p>& Shaping strategy.</p>
						</div>
					</div>
				</div>

				{/* 下部まとめ: スマホはflowで表示、PCはabsolute */}
				<div className="mt-16 flex flex-col items-center gap-5 md:hidden">
					<div
						id="vpWrapper"
						className="translate-y-2 opacity-0 transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
					>
						<Link
							id="vpLink"
							href="/gateway"
							className="group inline-flex flex-col items-center gap-1.5"
						>
							<span
								id="vpText"
								className="whitespace-nowrap text-[10px] tracking-[0.24em] text-white/48 transition-all duration-500 group-hover:text-[#D4AF37] group-hover:[text-shadow:0_0_12px_rgba(212,175,55,0.55)]"
							>
								VIEW PROFILE
							</span>
							<span
								id="vpArrow"
								className="text-[10px] -translate-y-1 opacity-0 transition-all duration-500"
								style={{ color: "rgba(212,175,55,0)" }}
							>
								↓
							</span>
						</Link>
					</div>
					<div className="text-[12px] text-white/36">
						<span ref={sigRefSp} />
					</div>
				</div>

				{/* PC: VIEW PROFILE */}
				<div
					id="vpWrapperPc"
					className="hidden md:flex absolute bottom-40 left-1/2 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
				>
					<Link id="vpLinkPc" href="/gateway" className="group inline-flex flex-col items-center gap-1.5">
						<span
							id="vpTextPc"
							className="whitespace-nowrap text-[11px] tracking-[0.32em] text-white/48 transition-all duration-500 group-hover:text-[#D4AF37] group-hover:[text-shadow:0_0_12px_rgba(212,175,55,0.55)]"
						>
							VIEW PROFILE
						</span>
						<span
							id="vpArrowPc"
							className="text-[10px] -translate-y-1 opacity-0 transition-all duration-500"
							style={{ color: "rgba(212,175,55,0)" }}
						>
							↓
						</span>
					</Link>
				</div>

				{/* PC: produced by */}
				<div className="hidden md:block absolute bottom-16 left-20 text-[14px] text-white/36">
					<span ref={sigRefPc} />
				</div>

			</div>
		</main>
	);
}
