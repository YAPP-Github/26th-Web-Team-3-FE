import { colorTheme } from "@/shared/styles/tokens/color";
import * as styles from "./colors.css";

interface ColorSwatchProps {
  color: string;
  name: string;
}

const ColorSwatch = ({ color, name }: ColorSwatchProps) => (
  <div className={styles.colorSwatchContainer}>
    <div className={styles.colorSwatchBox} style={{ background: color }} />
    <div className={styles.colorSwatchLabel}>
      <span>{name}</span>
    </div>
  </div>
);

interface ColorGridProps {
  colors: Record<string, string>;
  title: string;
}

const ColorGrid = ({ colors, title }: ColorGridProps) => (
  <div className={styles.colorGrid}>
    <h2>{title}</h2>
    <div className={styles.colorGridItems}>
      {Object.entries(colors).map(([key, value]) => (
        <ColorSwatch key={key} name={key} color={value} />
      ))}
    </div>
  </div>
);

export const Colors = () => (
  <div className={styles.colorContainer}>
    <h1 className={styles.colorTitle}>🎨 Lettie Color Palette</h1>

    {Object.entries(colorTheme).map(([groupName, colors]) => (
      <ColorGrid
        key={groupName}
        colors={colors}
        title={`${groupName.charAt(0).toUpperCase() + groupName.slice(1)} Colors`}
      />
    ))}
  </div>
);

export default {
  title: "Foundation/Colors",
  parameters: {
    layout: "fullscreen",
  },
};
