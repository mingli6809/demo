import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav >
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={128} height={77} />
      </div>
      <div className={styles.nav}>
      <Link href="/" ><a>Home   &nbsp;</a></Link>
      <Link href="/about"><a>     About &nbsp;</a></Link>
      <Link href="/ninjas/"><a>  Bright_Listing</a></Link>
      </div>
    </nav>
);
}
 
export default Navbar;