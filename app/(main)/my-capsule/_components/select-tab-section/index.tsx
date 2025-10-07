import Down from "@/shared/assets/icon/down.svg";
import {
  MY_CAPSULE_FILTER,
  type MyCapsuleFilterType,
} from "@/shared/types/api/capsule";
import { CAPSULE_SORT, type CapsuleSortType } from "@/shared/types/api/capsule";
import Dropdown from "@/shared/ui/dropdown";
import * as styles from "./select-tab-section.css";

interface Props {
  handleFilter: (value: MyCapsuleFilterType) => void;
  selectedFilter: MyCapsuleFilterType;
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
    { label: "전체", value: MY_CAPSULE_FILTER.ALL },
    { label: "좋아요", value: MY_CAPSULE_FILTER.LIKED },
    { label: "내가 만든 캡슐", value: MY_CAPSULE_FILTER.CREATED },
    { label: "참여 중인 캡슐", value: MY_CAPSULE_FILTER.PARTICIPATING },
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
