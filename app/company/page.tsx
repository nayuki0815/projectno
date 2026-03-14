// app/company/page.tsx
import Link from "next/link";
import { FadeInPage } from "../_components/FadeInPage";

const companyInfo = [
	{ label: "Name", value: "office PROJECT.NO" },
	{ label: "Business", value: "Web application / SaaS / System design" },
	{ label: "Location", value: "Japan/Tokyo" },
];

export default function CompanyPage() {
	return (
		<FadeInPage>
			<main className="min-h-screen bg-black text-white overflow-hidden">
				<div className="mx-auto flex min-h-screen max-w-5xl flex-col px-8 pb-16 pt-24 md:px-12 md:pt-32">
					<div>
						<p className="text-[11px] tracking-[0.32em] text-white/35">
							office PROJECT.NO
						</p>

						<h1 className="mt-6 text-4xl font-extralight tracking-[0.08em] md:text-6xl">
							Company
						</h1>

						<div className="mt-6 h-px w-24 bg-white/15" />

						<p className="mt-8 max-w-2xl text-sm leading-8 tracking-[0.06em] text-white/55 md:text-base">
							office PROJECT.NO は、業務システム・Webアプリケーション・SaaSの
							設計と開発を行うプロジェクトです。構造を整え、継続できる仕組みをつくることを大切にしています。
						</p>
					</div>

					<div className="mt-14 grid gap-5 md:grid-cols-3">
						{companyInfo.map((item) => (
							<div
								key={item.label}
								className="rounded-3xl border border-white/10 bg-white/[0.02] p-7"
							>
								<p className="text-[11px] tracking-[0.24em] text-white/35">
									{item.label}
								</p>
								<p className="mt-4 text-base font-light leading-7 tracking-[0.04em] text-white/85">
									{item.value}
								</p>
							</div>
						))}
					</div>

					<div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
						<p className="text-[11px] tracking-[0.24em] text-white/35">
							MESSAGE
						</p>
						<p className="mt-5 max-w-3xl text-sm leading-8 tracking-[0.04em] text-white/60 md:text-base">
							見た目だけではなく、運用できること、育てられること、
							現場で使い続けられることを意識して設計しています。
							office PROJECT.NO は、開発そのものだけでなく、
							その先の構造づくりまで含めて考えるチームです。
						</p>
					</div>

					<div className="mt-auto pt-16">
						<div className="flex items-center gap-6 text-xs tracking-[0.24em] text-white/35">
							<Link href="/gateway" className="transition hover:text-white/65">
								← BACK
							</Link>
							<Link href="/product" className="transition hover:text-white/65">
								NEXT: PRODUCT →
							</Link>
						</div>
					</div>
				</div>
			</main>
		</FadeInPage>
	);
}