import styles from './GradientText.module.css';

export default function GradientText({ children, style = {} }) {
  return (
    <span className={styles.gradText} style={style}>
      {children}
    </span>
  );
}
