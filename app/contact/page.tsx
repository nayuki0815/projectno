// app/contact/page.tsx
import Link from "next/link";
import { FadeInPage } from "../_components/FadeInPage";


export default function ContactPage() {
	return (
				<FadeInPage>
		
		<main className="min-h-screen bg-black text-white">
			<div className="mx-auto flex min-h-screen max-w-5xl flex-col px-8 pb-16 pt-24 md:px-12 md:pt-32">
				<div>
					<p className="text-[11px] tracking-[0.32em] text-white/35">
						office PROJECT.NO
					</p>

					<h1 className="mt-6 text-4xl font-extralight tracking-[0.08em] md:text-6xl">
						Contact
					</h1>

					<div className="mt-6 h-px w-24 bg-white/15" />

					<p className="mt-8 max-w-2xl text-sm leading-8 tracking-[0.06em] text-white/55 md:text-base">
						ご相談、ご連絡は以下よりお願いいたします。
						開発、設計、業務システムに関するお問い合わせを受け付けています。
					</p>
				</div>

				<div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
					<p className="text-[11px] tracking-[0.24em] text-white/35">EMAIL</p>

<a
	href="mailto:contact@example.com"
	className="mt-5 block break-all text-base font-light tracking-[0.02em] text-white/85 underline underline-offset-4 transition hover:text-white md:text-lg md:tracking-[0.04em]"
>
	programme.tact.nayuki0815@gmail.com
</a>

					<p className="mt-6 text-sm leading-7 tracking-[0.04em] text-white/45">
						内容確認後、順次ご返信いたします。
					</p>
				</div>

				<div className="mt-auto pt-16">
					<div className="flex items-center gap-6 text-xs tracking-[0.24em] text-white/35">
						<Link href="/product" className="transition hover:text-white/65">
							← BACK
						</Link>
						<Link href="/gateway" className="transition hover:text-white/65">
							BACK TO PROFILE
						</Link>
					</div>
				</div>
			</div>
		</main>
				</FadeInPage>
		
	);
}