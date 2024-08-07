import styles from '@/componentes/SectionProducts/SectionProducts.module.css';

export default function SectionProducts() {
  return (
    <section id='products' className={styles.section_products}>
      <div className={styles.limit_section}>
        <h3>Nossos produtos</h3>
        <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
        <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
        <div className={styles.container_product}>
          <div className={styles.box_product}>
            <h4>Óculos de grau</h4>
            <img src='oculos01.png' alt="Óculos de grau" />
            <p>R$ 500,00</p>
          </div>
          <div className={styles.box_product}>
            <h4>Óculos transition</h4>
            <img src='oculos02.png' alt="Óculos transition" />
            <p>R$ 750,00</p>
          </div>
          <div className={styles.box_product}>
            <h4>Óculos de Sol</h4>
            <img src="oculos03.png" alt="Óculos de Sol" />
            <p>R$ 700,00</p>
          </div>
          <div className={styles.box_product}>
            <h4>Óculos infantil</h4>
            <img src="oculos04.png" alt="Óculos infantil" />
            <p>R$ 500,00</p>
          </div>
        </div>

        <p>Todos os nossos produtos incluem:</p>

        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  );
};