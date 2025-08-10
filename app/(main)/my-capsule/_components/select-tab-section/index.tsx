import TabButton from "@/app/(main)/_components/tab-button";
import UpdownIcon from "@/shared/assets/icon/updown.svg";
import {
  MY_CAPSULE_FILTER,
  type MyCapsuleFilterType,
} from "@/shared/types/api/capsule";
import Dropdown from "@/shared/ui/dropdown";
import * as styles from "./select-tab-section.css";

interface Props {
  onSelect: (value: MyCapsuleFilterType) => void;
  selectedTab: MyCapsuleFilterType;
}

const SelectTabSection = ({ onSelect, selectedTab }: Props) => {
  const tabOptions = [
    { label: "전체", value: MY_CAPSULE_FILTER.ALL },
    { label: "좋아요", value: MY_CAPSULE_FILTER.LIKED },
    { label: "내가 만든 캡슐", value: MY_CAPSULE_FILTER.CREATED },
    { label: "참여 중인 캡슐", value: MY_CAPSULE_FILTER.PARTICIPATING },
  ];

  return (
    <div className={styles.chipContainer}>
      <Dropdown className={styles.dropdown}>
        <Dropdown.Trigger>
          <UpdownIcon />
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item label="최신 순" />
          <Dropdown.Item label="오픈 임박 순" />
          <Dropdown.Item label="편지 마감 순" />
        </Dropdown.Content>
      </Dropdown>
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
    </div>
  );
};

export default SelectTabSection;
