import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-7 py-1"
      >
        <header>Logo</header>
        <header></header>
        {children}
      </body>
    </html>
  );
}
