import "./globals.css";
import type { Metadata } from "next";
import { LineNav } from "./_components/LineNav";

export const metadata: Metadata = {
	title: "PROJECT.NO",
	description: "Office introduction site",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja">
			<body className="bg-black text-white">
				<LineNav />
				{children}
			</body>
		</html>
	);
}