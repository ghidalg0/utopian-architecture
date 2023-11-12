import BubbleBuilding from "@/components/BubbleBuilding/BubbleBuilding";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import HorizontalParallax from "@/components/HorizontalParallax/HorizontalParallax";
import ShappedGeometry from "@/components/ShappedGeometry/ShappedGeometry";

export default function Home() {
  return (
    <main className="">
      <HeroBanner />
      <ShappedGeometry />
      <BubbleBuilding />
      <HorizontalParallax />
    </main>
  );
}
