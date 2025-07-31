import { Inter } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthWrapper from "@/components/AuthWrapper";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Jobshapers",
  description: "Elke carrière verdient de juiste vorm",
  keywords:
    "werving en selectie, recruitment bureau, vacaturebureau, vacatures, banen, werk vinden, nieuwe baan, vaste baan, juiste match, werk dat bij je past, persoonlijke begeleiding werk, loopbaanbegeleiding, carrière advies, sollicitatie begeleiding, jobcoach, personeel vinden, personeel gezocht, medewerkers werven, personeel bemiddelen, recruitment specialist, intermediair werk, banenbank, werken in [jouw regio/stad] (bijv. werken in Limburg / werken in Brabant), zzp opdrachten, interim opdrachten, freelance opdrachten, HR vacatures, sales vacatures, commercieel medewerker, accountmanager vacatures, infra vacatures, civiele techniek vacatures, bouwinfra banen",
};

export default function RootLayout({ children }) {
  return (
    <AuthWrapper>
      <html lang="en">
        <body className={`${nunito.className} bg-white`}>
          <ToastContainer position="top-center" autoClose={2000} />
          <Header />
          {children}
          <Analytics />
          <Footer />
        </body>
      </html>
    </AuthWrapper>
  );
}
