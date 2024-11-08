import Image from "next/image";
import styles from "./page.module.css";
import GroupAlphabetSelections from "./components/groupAlphabetSelections";
import CustomPagination from "./components/customPagination";
import CustomMatrixSelector from "./components/customMatrixSelector";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.section}>
        <GroupAlphabetSelections />
      </section>
      
      <section className={styles.section}>
        <CustomPagination />
      </section>
      
      <section className={styles.section}>
        <CustomMatrixSelector />
      </section>
    </main>
  );
}
