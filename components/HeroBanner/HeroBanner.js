import Link from "next/link";
import ContentWrapper from "../Wrapper/ContentWrapper";

const HeroBanner = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <ContentWrapper>
        <h1 className="pb-8 font-extrabold text-center text-transparent bg-top bg-cover text-9xl bg-utopian bg-clip-text">
          Utopian Architecture
        </h1>
        <h2 className="mt-8 text-3xl font-bold text-center text-zinc-700">
          Explore visionary landscapes, where dream and design converge
          seamlessly, unveiling a utopian tapestry of architectural innovation
          and boundless possibilities.
        </h2>
      </ContentWrapper>
      <div className="absolute flex justify-center bottom-8">
        <Link href="#first" className="text-zinc-500">
          Visit Archos House
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
