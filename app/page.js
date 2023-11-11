import BubbleBuilding from "@/components/BubbleBuilding/BubbleBuilding";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroBanner />
      <BubbleBuilding />
    </main>
  );
}
