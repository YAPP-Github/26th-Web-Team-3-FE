import TabButton from "@/app/(main)/_components/tab-button";
import UpdownIcon from "@/shared/assets/icon/updown.svg";
import { CAPSULE_SORT, type CapsuleSortType } from "@/shared/types/api/capsule";
import Dropdown from "@/shared/ui/dropdown";
import * as styles from "./select-tab-section.css";
interface Props {
  onSelect: (value: string) => void;
  selectedTab: string;
  handleSort: (value: CapsuleSortType) => void;
}

const SelectTabSection = ({ onSelect, selectedTab, handleSort }: Props) => {
  const tabOptions = [
    { label: "전체", value: "all" },
    { label: "참여가능", value: "WRITABLE" },
    { label: "오픈된 캡슐", value: "OPENED" },
    { label: "마감된 캡슐", value: "WAITING_OPEN" },
  ];

  return (
    <div className={styles.chipContainer}>
      <Dropdown className={styles.dropdown}>
        <Dropdown.Trigger>
          <UpdownIcon />
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item
            label="최신 순"
            onClick={() => {
              handleSort(CAPSULE_SORT.LATEST);
            }}
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
