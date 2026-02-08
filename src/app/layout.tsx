import "./globals.css";

export const metadata = {
  title: "Nike Product Catalog",
  description: "Nike catalog powered by Next.js, Drizzle, and Neon."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
