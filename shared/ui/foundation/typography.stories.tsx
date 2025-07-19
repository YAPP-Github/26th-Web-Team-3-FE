import { textTheme } from "@/shared/styles/tokens/text";
import * as styles from "./typography.css";

const TypographyItem = ({
  name,
  style,
  text,
}: {
  name: string;
  style: (typeof textTheme)[keyof typeof textTheme];
  text: string;
}) => (
  <div className={styles.typographyItemContainer}>
    <span className={styles.typographyItemName}>{name}</span>
    <span style={style}>{text}</span>
    <div className={styles.typographyItemDetails}>
      <span className={styles.typographyItemDetail}>
        Font Size: {style.fontSize}
      </span>
      <span className={styles.typographyItemDetail}>
        Font Weight: {style.fontWeight}
      </span>
      <span className={styles.typographyItemDetail}>
        Line Height: {style.lineHeight}
      </span>
      <span className={styles.typographyItemDetail}>
        Letter Spacing: {style.letterSpacing}
      </span>
      <span className={styles.typographyItemDetail}>Color: {style.color}</span>
    </div>
  </div>
);

export const Typography = () => (
  <div className={styles.typographyContainer}>
    <h1 className={styles.typographyTitle}>🔤 Lettie Typography</h1>

    {Object.entries(textTheme).map(([key, style]) => (
      <TypographyItem
        key={key}
        name={key}
        style={style}
        text={`${key} - 텍스트 스타일 예시입니다`}
      />
    ))}
  </div>
);

export default {
  title: "Foundation/Typography",
  parameters: {
    layout: "fullscreen",
  },
};
