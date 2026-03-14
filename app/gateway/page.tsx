// app/gateway/page.tsx
import Link from "next/link";
import { FadeInPage } from "../_components/FadeInPage";

const items = [
	{
		href: "/company",
		title: "企業概要",
		description: "office PROJECT.NO の考え方、事業概要、基本情報",
	},
	{
		href: "/product",
		title: "商品概要",
		description: "開発しているプロダクト、提供領域、構想",
	},
	{
		href: "/contact",
		title: "問い合わせ",
		description: "ご相談、ご連絡、お問い合わせはこちら",
	},
];

export default function GatewayPage() {
	return (
		<FadeInPage>
			<main className="min-h-screen bg-black text-white">
				<div className="mx-auto flex min-h-screen max-w-6xl flex-col px-8 pb-16 pt-24 md:px-12 md:pt-32">
					<div>
						<p className="text-[11px] tracking-[0.32em] text-white/35">
							office PROJECT.NO
						</p>

						<h1 className="mt-6 text-4xl font-extralight tracking-[0.08em] md:text-6xl">
							Profile
						</h1>

						<div className="mt-6 h-px w-24 bg-white/15" />

						<p className="mt-8 max-w-2xl text-sm leading-8 tracking-[0.06em] text-white/55 md:text-base">
							office PROJECT.NO の概要をご案内します。
							以下より、各ページをご覧ください。
						</p>
					</div>

					<div className="mt-14 grid gap-5 md:grid-cols-3">
						{items.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-white/25 hover:bg-white/[0.04]"
							>
								<div className="flex items-start justify-between gap-4">
									<h2 className="text-xl font-light tracking-[0.06em] text-white/90">
										{item.title}
									</h2>

									<span className="text-sm text-white/25 transition group-hover:translate-x-1 group-hover:text-white/55">
										→
									</span>
								</div>

								<p className="mt-6 text-sm leading-7 tracking-[0.04em] text-white/50">
									{item.description}
								</p>

								<div className="mt-10 text-[11px] tracking-[0.24em] text-white/35 transition group-hover:text-white/65">
									VIEW
								</div>
							</Link>
						))}
					</div>

					<div className="mt-auto pt-16">
						<Link
							href="/"
							className="inline-flex items-center gap-3 text-xs tracking-[0.24em] text-white/35 transition hover:text-white/65"
						>
							<span>←</span>
							<span>BACK TO TOP</span>
						</Link>
					</div>
				</div>
			</main>
		</FadeInPage>
	);
}