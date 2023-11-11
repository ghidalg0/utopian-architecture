import styles from "./shapped.module.css";

const ShappedGeometry = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className={styles.mosaic_wrapper}>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
      </div>
    </section>
  );
};

export default ShappedGeometry;
