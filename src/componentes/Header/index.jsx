import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import styles from '@/componentes/Header/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Image src={Logo} alt='logomarca' className={styles.header_logo} />
      </div>

      <nav >
        <Link href='#products'>PRODUTOS</Link>
        <Link href='#about'>SOBRE</Link>
        <Link href='#contact'>CONTATO</Link>
      </nav>
    </header>
  );
};