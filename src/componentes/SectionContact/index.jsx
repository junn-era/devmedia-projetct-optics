import styles from '@/componentes/SectionContact/SectionContact.module.css';

export default function SectionContact() {
  return (
    <section id='contact' className={styles.section_contact}>
      <div className={styles.limit_section}>
        <h3>Fale conosco</h3>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

        <div className={styles.contact_container}>
          <div className={styles.contact_content}>
            <h4>Contato</h4>
            <div>
              <img src='local.png' title='Ícone localização' alt="Pino de localização" />
              <span>Nova Iguaçu, RJ</span>
            </div>
            <div>
              <img src="telefone.png" title="Ícone telefone" alt="Ícone de um telefone" />
              <span>(21) 9999-9999</span>
            </div>
            <div>
              <img src="email.png" title="Ícone email" alt="Ícone de uma carta" />
              <span>contato@oticavida.com</span>
            </div>
          </div>
          <div className={styles.contact_content}>
            <h4>Nossas Redes Sociais</h4>
            <div>
              <img src="fb.png" title="Ícone facebook" alt="logo do facebook" />
              <span>/OticaVida</span>
            </div>
            <div>
              <img src="ig.png" title="Ícone instagram" alt="logo do instagram" />
              <span>@oticavidarj</span>
            </div>
            <div>
              <img src="tt.png" title="Ícone twitter" alt="logo do twitter" />
              <span>@oticavidarj</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};