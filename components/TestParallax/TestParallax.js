"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const ParallaxSection = () => {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div>
      <div className={styles.background} />

      <Parallax pages={5}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <h2 className="text-6xl font-bold text-white lg:text-9xl">
            Bubble Oasis
          </h2>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className={`${styles.sticky}`}>
            <p>I&apos;m a sticky layer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p className="mb-4 text-lg text-left text-zinc-800">
              Circular Panoramic Design:{" "}
              <span className="text-xs text-zinc-400">
                {" "}
                Embrace 360-degree views of the desert landscape from every
                angle in this thoughtfully designed circular home.
              </span>
            </p>
            <p className="mb-4 text-lg text-left text-zinc-800">
              Sustainable Oasis:{" "}
              <span className="text-xs text-zinc-400">
                {" "}
                Harness the power of the sun with integrated solar panels,
                making this dwelling an eco-friendly haven in the desert.
              </span>
            </p>
            <p className="mb-4 text-lg text-left text-zinc-800">
              Indoor-Outdoor Fusion:{" "}
              <span className="text-xs text-zinc-400">
                {" "}
                Experience the seamless flow between indoor and outdoor spaces,
                blurring the lines between the desert and the modern interior.
              </span>
            </p>
            <p className="mb-4 text-lg text-left text-zinc-800">
              Energy-Efficient Architecture:{" "}
              <span className="text-xs text-zinc-400">
                {" "}
                Innovative design elements maximize energy efficiency, ensuring
                a comfortable and sustainable living experience in the arid
                climate.
              </span>
            </p>
            <p className="mb-4 text-lg text-left text-zinc-800">
              Natural Light Abundance:{" "}
              <span className="text-xs text-zinc-400">
                {" "}
                Bask in natural sunlight pouring through strategically placed
                windows, creating a bright and airy atmosphere throughout the
                circular dwelling.
              </span>
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p className="mb-4 text-lg text-left text-zinc-800">
              Minimalistic Elegance:{" "}
              <span className="text-xs text-zinc-400">
                {" "}
                Discover a modern aesthetic with clean lines, minimalist
                furnishings, and a focus on simplicity that complements the
                desert&apos;s vast expanse.
              </span>
            </p>
            <p className="mb-4 text-lg text-left text-zinc-800">
              Smart Home Technology:{" "}
              <span className="text-xs text-zinc-400">
                {" "}
                Enjoy the convenience of cutting-edge technology with smart home
                features, seamlessly integrated to enhance comfort and
                efficiency in this desert retreat.
              </span>
            </p>
            <p className="mb-4 text-lg text-left text-zinc-800">
              Private Desert Retreat:{" "}
              <span className="text-xs text-zinc-400">
                {" "}
                Nestled in a secluded location, this circular house provides a
                private escape, allowing residents to connect with the desert
                environment while maintaining a sense of tranquility.
              </span>
            </p>
            <p className="mb-4 text-lg text-left text-zinc-800">
              Infinity Pool Oasis:{" "}
              <span className="text-xs text-zinc-400">
                {" "}
                Relax in a luxurious infinity pool that appears to merge with
                the desert horizon, offering a refreshing contrast to the arid
                surroundings.
              </span>
            </p>
            <p className="mb-4 text-lg text-left text-zinc-800">
              Flexible Living Spaces:{" "}
              <span className="text-xs text-zinc-400">
                {" "}
                Adaptable interiors cater to various needs, providing residents
                with the freedom to customize and optimize their living spaces
                within the circular design.
              </span>
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div className={`${styles.finalCard}`}>
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
              src="/desert-1.webp"
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

export default ParallaxSection;
