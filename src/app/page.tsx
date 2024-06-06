import { BarsAbout } from "@/page-view/about";
import { BarsFooter } from "@/page-view/footer";
import { BarsNavbar } from "@/page-view/nav-menu";
import { BarsNewsletter } from "@/page-view/newsletter";
import { BarsReferance } from "@/page-view/reference";
import { BarsWelcome } from "@/page-view/welcome";

export default function Home() {
  return (
    <>
      <BarsNewsletter />
      <BarsNavbar />
      <BarsWelcome />
      <BarsAbout />
      <BarsReferance />
      <BarsFooter />
    </>
  );
}
