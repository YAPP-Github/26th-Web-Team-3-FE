import TabButton from "@/app/(main)/_components/tab-button";
import UpdownIcon from "@/shared/assets/icon/updown.svg";
import Dropdown from "@/shared/ui/dropdown";
import * as styles from "./select-tab-section.css";

interface Props {
  onSelect: (value: string) => void;
  selectedTab: string;
}

const SelectTabSection = ({ onSelect, selectedTab }: Props) => {
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
