import Link from "next/link";
import { FadeInPage } from "../_components/FadeInPage";

const features = [
	{
		title: "System Design",
		description: "業務に合わせた構造設計と情報整理",
	},
	{
		title: "Web Application",
		description: "実運用を意識したWebアプリケーション開発",
	},
	{
		title: "SaaS Thinking",
		description: "拡張性と継続性を考えたプロダクト設計",
	},
];

export default function ProductPage() {
	return (
		<FadeInPage>
			<main className="min-h-screen bg-black text-white">
				<div className="mx-auto flex min-h-screen max-w-5xl flex-col px-8 pb-16 pt-24 md:px-12 md:pt-32">
					<div>
						<p className="text-[11px] tracking-[0.32em] text-white/35">
							office PROJECT.NO
						</p>

						<h1 className="mt-6 text-4xl font-extralight tracking-[0.08em] md:text-6xl">
							Product
						</h1>

						<div className="mt-6 h-px w-24 bg-white/15" />

						<p className="mt-8 max-w-2xl text-sm leading-8 tracking-[0.06em] text-white/55 md:text-base">
							office PROJECT.NO では、現場の課題を整理し、
							運用しやすい業務システムやWebアプリケーションを構想・開発しています。
						</p>
					</div>

					<div className="mt-14 grid gap-5 md:grid-cols-3">
						{features.map((item) => (
							<div
								key={item.title}
								className="rounded-3xl border border-white/10 bg-white/[0.02] p-7"
							>
								<p className="text-lg font-light tracking-[0.05em] text-white/90">
									{item.title}
								</p>
								<p className="mt-5 text-sm leading-7 tracking-[0.04em] text-white/50">
									{item.description}
								</p>
							</div>
						))}
					</div>

					<div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
						<p className="text-[11px] tracking-[0.24em] text-white/35">OVERVIEW</p>
						<p className="mt-5 max-w-3xl text-sm leading-8 tracking-[0.04em] text-white/60 md:text-base">
							顧客管理、案件管理、売上管理、業務ルール整理など、
							複数の情報がつながる領域に強みがあります。
							単体機能ではなく、全体の流れの中で意味を持つ設計を目指しています。
						</p>
					</div>

					<div className="mt-auto pt-16">
						<div className="flex items-center gap-6 text-xs tracking-[0.24em] text-white/35">
							<Link href="/company" className="transition hover:text-white/65">
								← BACK
							</Link>
							<Link href="/contact" className="transition hover:text-white/65">
								NEXT: CONTACT →
							</Link>
						</div>
					</div>
				</div>
			</main>
		</FadeInPage>
	);
}