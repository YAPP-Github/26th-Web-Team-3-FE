import * as styles from "./icons.css";

import Calendar from "@/shared/assets/icon/calendar.svg";
import Capsule from "@/shared/assets/icon/capsule.svg";
import Check from "@/shared/assets/icon/check.svg";
import Close from "@/shared/assets/icon/close.svg";
import Copy from "@/shared/assets/icon/copy.svg";
import Google from "@/shared/assets/icon/google.svg";
import Grid from "@/shared/assets/icon/grid.svg";
import Heart from "@/shared/assets/icon/heart.svg";
import Home from "@/shared/assets/icon/home.svg";
import Layers from "@/shared/assets/icon/layers.svg";
import Left from "@/shared/assets/icon/left.svg";
import List from "@/shared/assets/icon/list.svg";
import Mail from "@/shared/assets/icon/mail.svg";
import Menu from "@/shared/assets/icon/menu.svg";
import Naver from "@/shared/assets/icon/naver.svg";
import Plus from "@/shared/assets/icon/plus.svg";
import Right from "@/shared/assets/icon/right.svg";
import Search from "@/shared/assets/icon/search.svg";
import Share from "@/shared/assets/icon/share.svg";
import Time from "@/shared/assets/icon/time.svg";
import Updown from "@/shared/assets/icon/updown.svg";
import Warning from "@/shared/assets/icon/warning.svg";

import None from "@/shared/assets/2D-illust/none.svg";
import Thumbnail1 from "@/shared/assets/2D-illust/thumbnail_1.svg";
import Thumbnail2 from "@/shared/assets/2D-illust/thumbnail_2.svg";
import Thumbnail3 from "@/shared/assets/2D-illust/thumbnail_3.svg";
import Thumbnail4 from "@/shared/assets/2D-illust/thumbnail_4.svg";
import Thumbnail5 from "@/shared/assets/2D-illust/thumbnail_5.svg";
import Thumbnail6 from "@/shared/assets/2D-illust/thumbnail_6.svg";

const iconGroups = {
  icons: {
    calendar: Calendar,
    capsule: Capsule,
    check: Check,
    close: Close,
    copy: Copy,
    google: Google,
    grid: Grid,
    heart: Heart,
    home: Home,
    layers: Layers,
    left: Left,
    list: List,
    mail: Mail,
    menu: Menu,
    naver: Naver,
    plus: Plus,
    right: Right,
    search: Search,
    share: Share,
    time: Time,
    updown: Updown,
    warning: Warning,
  },
  "2D-illust": {
    none: None,
    thumbnail_1: Thumbnail1,
    thumbnail_2: Thumbnail2,
    thumbnail_3: Thumbnail3,
    thumbnail_4: Thumbnail4,
    thumbnail_5: Thumbnail5,
    thumbnail_6: Thumbnail6,
  },
};

const IconItem = ({
  name,
  IconComponent,
}: {
  name: string;
  IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) => (
  <div className={styles.iconItemContainer}>
    <div className={styles.iconBox}>
      <IconComponent width={32} height={32} />
    </div>
    <span className={styles.iconName}>{name}</span>
  </div>
);

const IconGrid = ({
  icons,
  title,
}: {
  icons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>;
  title: string;
}) => (
  <div className={styles.iconGrid}>
    <h2 className={styles.iconCategory}>{title}</h2>
    <div className={styles.iconGridItems}>
      {Object.entries(icons).map(([name, IconComponent]) => (
        <IconItem key={name} name={name} IconComponent={IconComponent} />
      ))}
    </div>
  </div>
);

export const Icons = () => (
  <div className={styles.iconsContainer}>
    <h1 className={styles.iconsTitle}>🎨 YAPP Icons & Assets</h1>

    {Object.entries(iconGroups).map(([groupName, icons]) => (
      <IconGrid
        key={groupName}
        icons={icons}
        title={`${groupName.charAt(0).toUpperCase() + groupName.slice(1)} ${
          groupName === "icons" ? "Icons" : "Illustrations"
        }`}
      />
    ))}
  </div>
);

export default {
  title: "Foundation/Icons",
  parameters: {
    layout: "fullscreen",
  },
};
