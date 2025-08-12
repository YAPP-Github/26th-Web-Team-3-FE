"use client";

import {
  CAPSULE_SORT,
  type CapsuleSortType,
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
  const [selectedSort, setSelectedSort] = useState<CapsuleSortType>(
    CAPSULE_SORT.DEFAULT,
  );

  const handleSelect = (value: MyCapsuleFilterType) => {
    setSelectedTab(value);
  };

  const handleSort = (value: CapsuleSortType) => {
    setSelectedSort(value);
  };

  return (
    <>
      <TitleSection />
      <SelectTabSection
        onSelect={handleSelect}
        selectedTab={selectedTab}
        handleSort={handleSort}
      />
      <CardContainer selectedTab={selectedTab} selectedSort={selectedSort} />
    </>
  );
};

export default MyCapsule;
