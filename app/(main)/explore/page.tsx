"use client";

import SelectTabSection from "@/app/(main)/explore/_components/select-tab-section";
import TitleSection from "@/app/(main)/explore/_components/title-section";
import AddCapsuleButton from "@/app/(sub)/create-capsule/_components/add-capsule-button";
import { CAPSULE_SORT, type CapsuleSortType } from "@/shared/types/api/capsule";
import RevealMotion from "@/shared/ui/motion/reveal-motion";
import { useState } from "react";
import CardContainer from "./_components/card-container";
import Footer from "./_components/footer";

const Explore = () => {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [selectedSort, setSelectedSort] = useState<CapsuleSortType>(
    CAPSULE_SORT.DEFAULT,
  );
  const handleSelect = (value: string) => {
    setSelectedTab(value);
  };

  const handleSort = (value: CapsuleSortType) => {
    setSelectedSort(value);
  };

  return (
    <>
      <RevealMotion>
        <TitleSection />
      </RevealMotion>
      <SelectTabSection
        handleSort={handleSort}
        onSelect={handleSelect}
        selectedTab={selectedTab}
      />
      <AddCapsuleButton />
      <CardContainer selectedTab={selectedTab} selectedSort={selectedSort} />
      <Footer />
    </>
  );
};

export default Explore;
