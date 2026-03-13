export default function Home() {
	return (
		<main className="relative min-h-screen overflow-hidden bg-black text-white">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(255,255,255,0.08),transparent_22%)]" />

			<div className="relative flex min-h-screen items-center justify-end px-8 md:px-16">
				<div className="animate-title-reveal text-right">
					<div className="flex flex-col items-end gap-2">
						<p className="text-[11px] uppercase tracking-[0.55em] text-white/35 md:text-xs">
							launch edition
						</p>

						<h1 className="leading-none">
							<span className="block text-[48px] font-extralight tracking-[-0.04em] md:text-[92px]">
								project.no
							</span>
							<span className="mt-2 block text-[34px] font-light tracking-[0.18em] text-white/72 md:text-[58px]">
								-2nd
							</span>
						</h1>

						<div className="mt-6 h-px w-24 bg-white/20 md:w-32" />

						<p className="max-w-xs text-[12px] leading-6 tracking-[0.2em] text-white/38 md:max-w-md md:text-[13px]">
							A minimal starting point for ideas, systems, and
							experiments.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}