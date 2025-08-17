"use client";

import Physics from "@/app/(main)/_components/physics";
import Image from "next/image";
import HomeButtonSection from "./_components/home-button-section";
import HomeCaptionSection from "./_components/home-caption-section";
import HomeTitleSection from "./_components/home-title-section";
import * as styles from "./home.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <main className={styles.mainContainer}>
        <HomeTitleSection />
        <HomeButtonSection />
        <HomeCaptionSection />
        <div className={styles.physicsContainer}>
          <Physics
            gravX={0}
            gravY={0.5}
            wallOptions={{ top: true, bottom: true, right: true, left: true }}
            frictionOptions={{ friction: 0.1, frictionAir: 0.05 }}
            mouseOptions={{
              enable: true,
              angularStiffness: 0.05,
              stiffness: 0.2,
            }}
            densityOptions={{ enable: true, density: 0.01 }}
            sleeping={false}
          >
            <Image
              src="/bead0.png"
              alt="physics"
              className={styles.image}
              width={180}
              height={180}
              unoptimized
            />
            <Image
              src="/bead1.png"
              alt="physics"
              className={styles.image}
              width={180}
              height={180}
              unoptimized
            />
            <Image
              src="/bead2.png"
              alt="physics"
              className={styles.image}
              width={180}
              height={180}
              unoptimized
            />
            <Image
              src="/bead0.png"
              alt="physics"
              className={styles.image}
              width={180}
              height={180}
              unoptimized
            />
            <Image
              src="/bead2.png"
              alt="physics"
              className={styles.image}
              width={180}
              height={180}
              unoptimized
            />
            <Image
              src="/bead1.png"
              alt="physics"
              className={styles.image}
              width={180}
              height={180}
              unoptimized
            />
            <Image
              src="/home-lettie-1.png"
              alt="physics"
              className={styles.image}
              width={180}
              height={180}
              unoptimized
            />
            <Image
              src="/home-lettie-2.png"
              alt="physics"
              className={styles.image}
              width={180}
              height={180}
              unoptimized
            />
            <Image
              src="/bead1.png"
              alt="physics"
              className={styles.image}
              width={180}
              height={180}
              unoptimized
            />
          </Physics>
        </div>
      </main>
    </div>
  );
};

export default Home;
