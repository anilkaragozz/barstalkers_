import { BarsAbout } from "@/page-view/about";
import { BarsContact } from "@/page-view/contact";
import { BarsNavbar } from "@/page-view/nav-menu/navbar";
import { BarsReferance } from "@/page-view/referance";
import { BarsSlider } from "@/page-view/slider/slider";

export default function Home() {
  return (
    <>
      <BarsNavbar />
      <div className="h-full w-full bg-orange-50 bg-grid-black/[0.1]">
        <BarsSlider />
        <BarsAbout />
        <BarsReferance />
        <BarsContact />
      </div>
    </>
  );
}
