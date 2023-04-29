import styles from '../../styles/Jobs.module.css'
import Link from 'next/link'
import Head from 'next/head';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {
  console.log(ninjas)

  return (
    <>
    <Head>
      <title>Bright List | About</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    
    <h1>All Ninjas</h1>
    {ninjas.map(ninja => (
      <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
        <a className={styles.single}>
          <h3>{ ninja.name }</h3>
        </a>
      </Link>
    ))}
  
  </>
  );
}
 
export default Ninjas;