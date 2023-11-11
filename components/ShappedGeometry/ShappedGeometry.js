import styles from "./shapped.module.css";

const ShappedGeometry = () => {
  return (
    <section
      className="relative flex items-center justify-center h-screen"
      id="first"
    >
      <div className={styles.mosaic_wrapper}>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
      </div>
      <p className="absolute font-bold text-zinc-800 bottom-8 right-8">
        Utopian Architecture
      </p>
    </section>
  );
};

export default ShappedGeometry;
