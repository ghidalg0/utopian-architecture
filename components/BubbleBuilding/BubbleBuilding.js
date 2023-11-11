import Image from "next/image";

const BubbleBuilding = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/banner-transformed.png"
        width={1000}
        height={1000}
        className="w-full h-auto"
        alt="Building picture"
        priority={true}
      />
    </section>
  );
};

export default BubbleBuilding;
