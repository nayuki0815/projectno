"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
	const sigRef = useRef<HTMLSpanElement>(null);
	const isGold = useRef<boolean>(false);

	useEffect(() => {
		const sigEl = sigRef.current;
		if (!sigEl) return;

		sigEl.innerHTML = "";

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
				sigEl.appendChild(span);
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
			if (!vpText || !vpArrow || !vpWrapper) return;

			vpWrapper.classList.remove("opacity-0", "translate-y-2");
			vpWrapper.classList.add("opacity-100", "translate-y-0");

			addTimeout(() => {
				vpText.classList.remove("text-white/48");
				vpText.classList.add("text-[#D4AF37]");
				vpText.style.textShadow = "0 0 8px rgba(212,175,55,0.35)";
				isGold.current = true;
			}, 350);

			addTimeout(() => {
				vpArrow.classList.remove("opacity-0", "-translate-y-1");
				vpArrow.classList.add("opacity-100", "translate-y-0");
				vpArrow.style.color = "rgba(212,175,55,0.9)";
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

		if (vpLink) {
			vpLink.addEventListener("mouseenter", handleMouseEnter);
			vpLink.addEventListener("mouseleave", handleMouseLeave);
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
		};
	}, []);

	return (
		<main className="relative min-h-screen overflow-hidden bg-black text-white">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(255,255,255,0.06),transparent_28%)]" />

			<div className="relative flex min-h-screen items-end justify-end px-6 pb-40 pt-20 md:items-center md:px-20 md:pb-0 md:pt-0">
				<div className="animate-title max-w-[88vw] text-right md:max-w-none">
					<h1 className="leading-none">
						<div
							className="block md:translate-x-2"
							style={{ animationDelay: "1.5s" }}
						>
							<div>
								<span className="text-[34px] font-extralight tracking-[0.1em] text-white/88 sm:text-[42px] md:text-[55px] md:tracking-[0.22em]">
									office PROJECT.NO
								</span>
							</div>

							<div className="mt-3 md:mt-4">
								<span className="text-[20px] font-extralight tracking-[0.16em] text-white/48 sm:text-[24px] md:text-[40px] md:tracking-[0.28em]">
									_2nd
								</span>
							</div>
						</div>
					</h1>

					<div className="mt-8 ml-auto h-px w-20 bg-white/12 md:mt-12 md:w-28" />

					<div className="mt-8 space-y-3 text-[11px] tracking-[0.18em] text-white/28 md:mt-10 md:text-[13px] md:tracking-[0.32em]">
						<p>Building systems.</p>
						<p>Designing structure.</p>
						<p>& Shaping strategy.</p>
					</div>
				</div>
			</div>

			<div
				id="vpWrapper"
				className="absolute bottom-24 left-1/2 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] md:bottom-40"
			>
				<Link
					id="vpLink"
					href="/gateway"
					className="group inline-flex flex-col items-center gap-1.5"
				>
					<span
						id="vpText"
						className="whitespace-nowrap text-[10px] tracking-[0.24em] text-white/48 transition-all duration-500 group-hover:text-[#D4AF37] group-hover:[text-shadow:0_0_12px_rgba(212,175,55,0.55)] md:text-[11px] md:tracking-[0.32em]"
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

			<div className="absolute bottom-8 left-6 text-[12px] text-white/36 md:bottom-16 md:left-20 md:text-[14px]">
				<span ref={sigRef} />
			</div>
		</main>
	);
}