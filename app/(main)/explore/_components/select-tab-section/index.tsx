import LeftIcon from "@/shared/assets/icon/left.svg";
import { CAPSULE_SORT, type CapsuleSortType } from "@/shared/types/api/capsule";
import Dropdown from "@/shared/ui/dropdown";
import * as styles from "./select-tab-section.css";

interface Props {
  onSelect: (value: string) => void;
  selectedTab: string;
  handleSort: (value: CapsuleSortType) => void;
  selectedSort?: CapsuleSortType; // 현재 선택된 정렬 옵션
}

const SelectTabSection = ({
  onSelect,
  selectedTab,
  handleSort,
  selectedSort = CAPSULE_SORT.LATEST,
}: Props) => {
  const tabOptions = [
    { label: "전체", value: "all" },
    { label: "참여가능", value: "WRITABLE" },
    { label: "오픈된 캡슐", value: "OPENED" },
    { label: "마감된 캡슐", value: "WAITING_OPEN" },
  ];

  const sortOptions = [
    { label: "최신 순", value: CAPSULE_SORT.LATEST },
    { label: "오픈 임박 순", value: CAPSULE_SORT.OPEN_IMMINENT },
    { label: "편지 마감 순", value: CAPSULE_SORT.WRITE_DEADLINE },
  ];

  const selectedTabLabel = tabOptions.find(
    (option) => option.value === selectedTab,
  )?.label;

  const selectedSortLabel = sortOptions.find(
    (option) => option.value === selectedSort,
  )?.label;

  return (
    <div className={styles.chipContainer}>
      <Dropdown className={styles.dropdown}>
        <Dropdown.Trigger className={styles.dropdownTrigger}>
          <span>{selectedSortLabel}</span>
          <LeftIcon className={styles.dropdownIcon} />
        </Dropdown.Trigger>
        <Dropdown.Content>
          {sortOptions.map((option) => (
            <Dropdown.Item
              key={option.value}
              label={option.label}
              onClick={() => handleSort(option.value)}
              isSelected={selectedSort === option.value}
            />
          ))}
        </Dropdown.Content>
      </Dropdown>

      <Dropdown className={styles.dropdown}>
        <Dropdown.Trigger className={styles.dropdownTrigger}>
          <span>{selectedTabLabel}</span>
          <LeftIcon className={styles.dropdownIcon} />
        </Dropdown.Trigger>
        <Dropdown.Content>
          {tabOptions.map((option) => (
            <Dropdown.Item
              key={option.value}
              label={option.label}
              onClick={() => onSelect(option.value)}
              isSelected={selectedTab === option.value}
            />
          ))}
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
};

export default SelectTabSection;
