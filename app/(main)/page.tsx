"use client";
import HomeButtonSection from "./_components/home-button-section";
import HomeCaptionSection from "./_components/home-caption-section";
import HomeTitleSection from "./_components/home-title-section";

import FloatingStarsContainer from "./_components/floating-stars-container";


const Home = () => {
  return (
    <div>
      <main>
        <FloatingStarsContainer
          size={1}
          color="#CFD1D5"
          speed={2.0}
          count={20}
          swayAmount={10}
          speedRandomness={0.8}
          sizeRandomness={0.8}
          swayRandomness={0.8}
        />
        <HomeTitleSection />
        <HomeButtonSection />
        <HomeCaptionSection />
      </main>
    </div>
  );
};

export default Home;
