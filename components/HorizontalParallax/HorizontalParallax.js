"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styles from "./styles.module.css";

const HorizontalParallax = () => {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <div>
      <Parallax pages={4} horizontal={true} ref={parallax}>
        <ParallaxLayer
          className="relative flex items-center justify-center"
          onClick={() => scroll(1)}
          speed={0}
        >
          <div
            className={styles.background}
            style={{ backgroundImage: "url('/landscape/oasis.png')" }}
          />
          <p className="absolute bottom-8 right-8 text-zinc-800">
            Utopian Architecture
          </p>

          <div className="z-50 flex w-full max-w-4xl p-8 mx-auto bg-white rounded shadow opacity-100 h-96">
            <div className="text-left pe-8 text-zinc-800">
              <h2 className="mb-8 text-5xl">Bubble Oasis</h2>
              <p className="text-left text-zinc-600">
                Experience harmonious living in this contemporary circular
                desert oasis. Seamlessly blending modern design with nature,
                this unique home offers panoramic views, sustainable features,
                and a tranquil escape in the heart of the arid landscape.
              </p>
              <div className="flex justify-center w-full mt-16">
                <Link
                  href="/"
                  className="self-center px-16 py-2 text-white rounded-sm bg-zinc-800"
                >
                  Visit Bubble Oasis
                </Link>
              </div>
            </div>
            <Image
              src="/oasis.webp"
              width={1000}
              height={1000}
              alt="picture"
              className="w-auto h-full rounded-sm"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          className="relative flex items-center justify-center"
          offset={1}
          speed={0}
          onClick={() => scroll(0)}
        >
          <div
            className={styles.background}
            style={{ backgroundImage: "url('/landscape/caktus.png')" }}
          />
          <p className="absolute bottom-8 right-8 text-zinc-800">
            Utopian Architecture
          </p>
          <div className="z-50 flex w-full max-w-4xl p-8 mx-auto bg-white rounded shadow h-96">
            <div className="text-left pe-8 text-zinc-800">
              <h2 className="mb-8 text-5xl">Caktus Villa</h2>
              <p className="text-left text-zinc-600">
                Discover serenity in this desert haven inspired by cactus
                beauty. Tranquil living meets nature&apos;s charm in a home
                designed for harmony and peaceful retreat.
              </p>
              <div className="flex justify-center w-full mt-16">
                <Link
                  href="/"
                  className="self-center px-16 py-2 text-white rounded-sm bg-zinc-800"
                >
                  Visit Caktus Villa
                </Link>
              </div>
            </div>
            <Image
              src="/caktus.png"
              width={1000}
              height={1000}
              alt="picture"
              className="w-auto h-full rounded-sm"
            />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default HorizontalParallax;
