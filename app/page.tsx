import About from "@/components/about";
import { CarouselDemo } from "@/components/carousel";
import Hospitals from "@/components/hospital-card";
import MapSection from "@/components/map-section";

export default function Home() {
  return (
    <div>
      <CarouselDemo />
      <About />
      <Hospitals />
      <MapSection />
    </div>
  );
}
