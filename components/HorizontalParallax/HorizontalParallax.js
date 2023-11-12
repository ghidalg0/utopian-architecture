"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styles from "./styles.module.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const villas = [
  {
    name: "Bubble Oasis",
    background: "url('/landscape/oasis.png')",
    image: "/oasis.webp",
    description:
      "Experience harmonious living in this contemporary circular desert oasis. Seamlessly blending modern design with nature, this unique home offers panoramic views, sustainable features, and a tranquil escape in the heart of the arid landscape.",
  },
  {
    name: "Caktus Villa",
    background: "url('/landscape/caktus.png')",
    image: "/caktus.png",
    description:
      "Discover serenity in this desert haven inspired by cactus beauty. Tranquil living meets nature&apos;s charm in a home designed for harmony and peaceful retreat.",
  },
];

const HorizontalParallax = () => {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <div>
      <Parallax pages={villas.length} horizontal={true} ref={parallax}>
        {villas.map((villa, index) => {
          return (
            <ParallaxLayer
              className="relative flex items-center justify-center"
              key={villa.name}
              offset={index}
              speed={0}
            >
              <div
                className={styles.background}
                style={{ backgroundImage: villa.background }}
              />
              <p className="absolute bottom-8 right-8 text-zinc-800">
                Utopian Architecture
              </p>

              <div className="z-50 flex items-center gap-40">
                {index === 0 ? (
                  <button className="w-16 h-16 "></button>
                ) : (
                  <button
                    onClick={() => scroll(index - 1)}
                    className="flex items-center justify-center w-16 h-16 bg-white rounded-full text-zinc-800"
                  >
                    <ChevronLeftIcon className="w-8 h-8" />
                  </button>
                )}
                <div className="flex w-full max-w-4xl p-8 mx-auto bg-white rounded h-96">
                  <div className="text-left pe-8 text-zinc-800">
                    <h2 className="mb-8 text-5xl">{villa.name}</h2>
                    <p className="text-left text-zinc-600">
                      {villa.description}
                    </p>
                    <div className="flex justify-center w-full mt-16">
                      <Link
                        href="/parallax"
                        className="self-center px-16 py-2 text-white rounded-sm bg-zinc-800"
                      >
                        Visit {villa.name}
                      </Link>
                    </div>
                  </div>
                  <Image
                    src={villa.image}
                    width={1000}
                    height={1000}
                    alt="picture"
                    priority={true}
                    className="w-auto h-full rounded-sm"
                  />
                </div>
                {index === villas.length - 1 ? (
                  <button className="w-16 h-16 "></button>
                ) : (
                  <button
                    onClick={() => scroll(index + 1)}
                    className="flex items-center justify-center w-16 h-16 bg-white rounded-full text-zinc-800"
                  >
                    <ChevronRightIcon className="w-8 h-8" />
                  </button>
                )}
              </div>
            </ParallaxLayer>
          );
        })}
      </Parallax>
    </div>
  );
};

export default HorizontalParallax;
