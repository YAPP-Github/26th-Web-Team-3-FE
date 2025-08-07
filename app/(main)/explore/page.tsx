"use client";
import SelectTabSection from "@/app/(main)/explore/_components/select-tab-section";
import TitleSection from "@/app/(main)/explore/_components/title-section";
import AddCapsuleButton from "@/app/(sub)/create-capsule/_components/add-capsule-button";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import { useState } from "react";
import CardContainer from "./_components/card-container";
import Footer from "./_components/footer";

const Explore = () => {
  const [selectedTab, setSelectedTab] = useState<string>("all");

  const handleSelect = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <>
      <RevealMotion>
        <TitleSection />
      </RevealMotion>
      <SelectTabSection onSelect={handleSelect} selectedTab={selectedTab} />
      <AddCapsuleButton />
      <CardContainer selectedTab={selectedTab} />
      <Footer />
    </>
  );
};

export default Explore;
