import Head from"next/head"

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(ninja => {
      return {
        params: { id1: ninja.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps = async (context1) => {
    const id = context1.params.id1;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { ninja: data }
    }
  }
  
  const Details = ({ ninja }) => {
    return (
      <div>
        <Head>
        <title>Bright List | About</title>
        <meta name="keywords" content="ninjas"/>
        </Head>
        <h1>{ ninja.name }</h1>
        <p>{ ninja.email }</p>
        <p>{ ninja.website }</p>
        <p>{ ninja.address.city }</p>
      </div>
    );
  }
  
  export default Details;