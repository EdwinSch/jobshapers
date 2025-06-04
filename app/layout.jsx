import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jobshapers",
  description: "Wij gaan pas verder als het écht klopt.",
  keywords: "jobshapers, jobs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 inspect">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
