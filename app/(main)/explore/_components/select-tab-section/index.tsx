import Down from "@/shared/assets/icon/down.svg";
import { CAPSULE_SORT, type CapsuleSortType } from "@/shared/types/api/capsule";
import Dropdown from "@/shared/ui/dropdown";
import * as styles from "./select-tab-section.css";

interface Props {
  handleFilter: (value: string) => void;
  selectedFilter: string;
  handleSort: (value: CapsuleSortType) => void;
  selectedSort: CapsuleSortType;
}

const SelectTabSection = ({
  handleFilter,
  selectedFilter,
  handleSort,
  selectedSort = CAPSULE_SORT.LATEST,
}: Props) => {
  const filterOptions = [
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

  const selectedFilterLabel = filterOptions.find(
    (option) => option.value === selectedFilter,
  )?.label;

  const selectedSortLabel = sortOptions.find(
    (option) => option.value === selectedSort,
  )?.label;

  return (
    <div className={styles.chipContainer}>
      <div className={styles.leftContainer}>
        <Dropdown className={styles.dropdown}>
          <Dropdown.Trigger className={styles.dropdownTrigger}>
            <span>{selectedSortLabel}</span>
            <Down />
          </Dropdown.Trigger>
          <Dropdown.Content className={styles.dropdownContent} align="left">
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
      </div>

      <div className={styles.rightContainer}>
        <Dropdown className={styles.dropdown}>
          <Dropdown.Trigger className={styles.dropdownTrigger}>
            <span>{selectedFilterLabel}</span>
            <Down />
          </Dropdown.Trigger>
          <Dropdown.Content className={styles.dropdownContent} align="left">
            {filterOptions.map((option) => (
              <Dropdown.Item
                key={option.value}
                label={option.label}
                onClick={() => handleFilter(option.value)}
                isSelected={selectedFilter === option.value}
              />
            ))}
          </Dropdown.Content>
        </Dropdown>
      </div>
    </div>
  );
};

export default SelectTabSection;
