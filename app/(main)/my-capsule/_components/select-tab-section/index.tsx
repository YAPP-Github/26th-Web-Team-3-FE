import TabButton from "@/app/(main)/_components/tab-button";
import UpdownIcon from "@/shared/assets/icon/updown.svg";
import {
  MY_CAPSULE_FILTER,
  type MyCapsuleFilterType,
} from "@/shared/types/api/capsule";
import { CAPSULE_SORT, type CapsuleSortType } from "@/shared/types/api/capsule";
import Dropdown from "@/shared/ui/dropdown";
import * as styles from "./select-tab-section.css";
interface Props {
  onSelect: (value: MyCapsuleFilterType) => void;
  selectedTab: MyCapsuleFilterType;
  handleSort: (value: CapsuleSortType) => void;
}

const SelectTabSection = ({ onSelect, selectedTab, handleSort }: Props) => {
  const tabOptions = [
    { label: "전체", value: MY_CAPSULE_FILTER.ALL },
    { label: "좋아요", value: MY_CAPSULE_FILTER.LIKED },
    { label: "내가 만든 캡슐", value: MY_CAPSULE_FILTER.CREATED },
    { label: "참여 중인 캡슐", value: MY_CAPSULE_FILTER.PARTICIPATING },
  ];

  return (
    <div className={styles.chipContainer}>
      <div className={styles.chipWrapper}>
        {tabOptions.map((option) => (
          <TabButton
            key={option.value}
            text={option.label}
            selected={selectedTab === option.value}
            onClick={() => onSelect(option.value)}
          />
        ))}
      </div>
      <Dropdown className={styles.dropdown}>
        <Dropdown.Trigger>
          <UpdownIcon />
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item
            label="최신 순"
            onClick={() => handleSort(CAPSULE_SORT.LATEST)}
          />
          <Dropdown.Item
            label="오픈 임박 순"
            onClick={() => handleSort(CAPSULE_SORT.OPEN_IMMINENT)}
          />
          <Dropdown.Item
            label="편지 마감 순"
            onClick={() => handleSort(CAPSULE_SORT.WRITE_DEADLINE)}
          />
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
};

export default SelectTabSection;
