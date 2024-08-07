import styles from '@/componentes/SectionCover/SectionCover.module.css';

export default function SectionCover() {
  return (
    <section className={styles.section_cover}>
      <div className={styles.limit_section}>
        <p>Preços baixos em</p>
        <h1>Óculos de grau e de sol</h1>
        <p>Você só encontra aqui</p>
      </div>
    </section>
  );
};