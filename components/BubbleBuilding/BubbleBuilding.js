import Image from "next/image";

const BubbleBuilding = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/banner-transformed.png"
        width={1000}
        height={1000}
        className="w-full h-auto"
        alt="Building picture"
        priority={true}
      />
      <p className="absolute font-bold text-white bottom-8 right-8">
        Utopian Architecture
      </p>
    </section>
  );
};

export default BubbleBuilding;
