import styles from './Orb.module.css';

export default function Orb({ style = {} }) {
  return <div className={styles.orb} style={style} />;
}
