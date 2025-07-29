"use client";
import SelectTabSection from "@/app/(main)/explore/_components/select-tab-section";
import TitleSection from "@/app/(main)/explore/_components/title-section";
import AddCapsuleButton from "@/app/(sub)/make-capsule/_components/add-capsule-button";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import { useState } from "react";

const Explore = () => {
  const [selected, setSelected] = useState<string>("전체");

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  return (
    <div>
      <RevealMotion>
        <TitleSection />
      </RevealMotion>
      <SelectTabSection onSelect={handleSelect} selectedTab={selected} />
      <AddCapsuleButton />
    </div>
  );
};

export default Explore;
