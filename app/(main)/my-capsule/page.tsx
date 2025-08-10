"use client";

import {
  MY_CAPSULE_FILTER,
  type MyCapsuleFilterType,
} from "@/shared/types/api/capsule";
import { useState } from "react";
import CardContainer from "./_components/card-container";
import SelectTabSection from "./_components/select-tab-section";
import TitleSection from "./_components/title-section";

const MyCapsule = () => {
  const [selectedTab, setSelectedTab] = useState<MyCapsuleFilterType>(
    MY_CAPSULE_FILTER.ALL,
  );

  const handleSelect = (value: MyCapsuleFilterType) => {
    setSelectedTab(value);
  };

  return (
    <>
      <TitleSection />
      <SelectTabSection onSelect={handleSelect} selectedTab={selectedTab} />
      <CardContainer selectedTab={selectedTab} />
    </>
  );
};

export default MyCapsule;
