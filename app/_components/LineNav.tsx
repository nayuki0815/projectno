"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
	{ href: "/", label: "TOP" },
	{ href: "/gateway", label: "GATEWAY" },
	{ href: "/company", label: "COMPANY" },
	{ href: "/product", label: "PRODUCT" },
	{ href: "/contact", label: "CONTACT" },
];

export function LineNav() {
	const pathname = usePathname();

	if (pathname === "/") return null;

	return (
		<div className="fixed left-8 top-1/2 z-50 hidden -translate-y-1/2 md:block">
			<div className="relative pl-8">
				<div className="absolute left-2 top-0 h-full w-px bg-white/12" />

				<nav className="flex flex-col gap-6">
					{items.map((item) => {
						const active =
							item.href === "/"
								? pathname === "/"
								: pathname.startsWith(item.href);

						return (
							<Link
								key={item.href}
								href={item.href}
								className="group relative block"
							>
								<span
									className={`absolute -left-[25px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full transition-all duration-300 ${
										active
											? "scale-125 bg-[#D4AF37]"
											: "bg-white/25 group-hover:bg-[#D4AF37]"
									}`}
								/>

								<span
									className={`text-[11px] tracking-[0.28em] transition-all duration-300 ${
										active
											? "text-[#D4AF37] [text-shadow:0_0_10px_rgba(212,175,55,0.45)]"
											: "text-white/35 group-hover:text-[#D4AF37] group-hover:[text-shadow:0_0_10px_rgba(212,175,55,0.45)]"
									}`}
								>
									{item.label}
								</span>
							</Link>
						);
					})}
				</nav>
			</div>
		</div>
	);
}