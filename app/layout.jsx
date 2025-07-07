import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jobshapers",
  description: "Wij gaan pas verder als het écht klopt.",
  keywords: "jobshapers, jobs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <ToastContainer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
