import BubbleBuilding from "@/components/BubbleBuilding/BubbleBuilding";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import ShappedGeometry from "@/components/ShappedGeometry/ShappedGeometry";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroBanner />
      <ShappedGeometry />
      <BubbleBuilding />
    </main>
  );
}
