export default function Home() {
	return (
		<main className="relative min-h-screen overflow-hidden bg-black text-white">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(255,255,255,0.08),transparent_25%)]" />

			<div className="relative flex min-h-screen items-center justify-end px-10 md:px-20">
				<div className="animate-title text-right">
					<h1 className="leading-none">
						<span className="block text-[56px] font-extralight tracking-[-0.02em] md:text-[96px]">
							p r o j e c t . n o
						</span>

						<span className="mt-2 ml-4 block text-[36px] font-light tracking-[0.18em] text-white/70 md:text-[60px]">
							-2nd
						</span>
					</h1>

					<div className="mt-10 h-px w-32 bg-white/20" />

					<div className="mt-10 space-y-2 text-[14px] tracking-[0.25em] text-white/40">
						<p>Building systems.</p>
						<p>Designing structure.</p>
					</div>
				</div>
			</div>

      {/* 左下サイン */}
<div className="absolute bottom-8 left-8 md:bottom-10 md:left-10 text-white/70 text-[16px]">
  {"produced by y.nakano".split("").map((char, i) => (
    <span
      key={i}
      className="sig-char"
      style={{ animationDelay: `${1.5 + i * 0.15}s` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</div>
		</main>
	);
}
