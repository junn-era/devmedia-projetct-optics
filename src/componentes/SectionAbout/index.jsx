import styles from '@/componentes/SectionAbout/SectionAbout.module.css';

export default function SectionAbout() {
  return (
    <section id='about' className={styles.section_about}>
      <div className={styles.limit_section, styles.container_about}>

        <h3>QUEM SOMOS NÓS</h3>

        <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou
          suas atividades focada no atendimento ao público de renda mais baixa,
          sempre com o objetivo de proporcionar ao cliente bom atendimento,
          qualidade e preço baixo.
        </p>

        <div className={styles.box_cards}>
          <img src="loja.png" alt="Foto da loja" />

          <div className={styles.card}>
            <h4>Nossas Filiais</h4>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América do Sul</p>
          </div>

          <div className={styles.card}>
            <h4>Atendimento flexível</h4>
            <p>Nossa equipe é treinada para te atender com excelência</p>
          </div>

          <img src="atendimento.png" alt="Foto de uma mulher atendendo cliente" />
        </div>
      </div>

    </section >
  );
};