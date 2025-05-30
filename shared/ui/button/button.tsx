import * as styles from "./button.css";

interface ButtonProps {
  text: string;
}

// TODO: 추후 수정
const Button = ({ text }: ButtonProps) => {
  return <button className={styles.buttonStyle}>{text}</button>;
};

export default Button;
