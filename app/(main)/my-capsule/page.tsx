"use client";

import { useState } from "react";

import CardContainer from "./_components/card-container";
import SelectTabSection from "./_components/select-tab-section";
import TitleSection from "./_components/title-section";

const MyCapsule = () => {
  const [selectedTab, setSelectedTab] = useState("전체");

  const handleSelect = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <>
      <TitleSection />
      <SelectTabSection onSelect={handleSelect} selectedTab={selectedTab} />
      <CardContainer />
    </>
  );
};

export default MyCapsule;
