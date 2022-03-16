import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function JokeItem({joke}) {
    console.log(joke)
    
  return (
      <>
        <Link href="http://localhost:3000/Joke/" as={`http://localhost:3000/Joke/${joke}`}  ><a className={styles.card}><h2 >{joke}</h2></a>
        </Link>
       
      </>
  )
}

