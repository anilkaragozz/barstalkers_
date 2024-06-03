import { BarsAbout } from "@/page-view/about";
import { BarsContact } from "@/page-view/contact";
import { BarsNavbar } from "@/page-view/nav-menu";
import { BarsReferance } from "@/page-view/referance";
import { BarsWelcome } from "@/page-view/welcome";

export default function Home() {
  return (
    <>
      <BarsNavbar />
      <div className="h-full w-full bg-white bg-grid-black/[0.05]">
        <BarsWelcome />
        <BarsAbout />

        <BarsReferance />
        <BarsContact />
      </div>
    </>
  );
}
