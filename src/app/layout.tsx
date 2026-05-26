import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivam Kumar Sagar — Full Stack Developer",
  description:
    "Full Stack Developer crafting exceptional digital experiences with modern web technologies. Explore my projects, skills, and get in touch.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Portfolio"],
  authors: [{ name: "Shivam Kumar Sagar" }],
  openGraph: {
    title: "Shivam Kumar Sagar — Full Stack Developer",
    description: "Full Stack Developer crafting exceptional digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise">{children}</body>
    </html>
  );
}
