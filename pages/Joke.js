import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import{useState} from 'react'

export default function Joke(jokes) {
  const [resObj, setResObj ] = useState([])
  const [resValue, setResValue] = useState(jokes.jokes.value)
  const router = useRouter()
  
  console.log(jokes.jokes.value);

  const random=async(e)=>{
    e.preventDefault()
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const randomJokes = await res.json()
    console.log(randomJokes.value)
    setResValue(randomJokes.value)  
  }

  const back=(e)=>{
    e.preventDefault()
    router.push('http://localhost:3000/')  
  }
    

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        
          <div><img src={jokes.jokes.icon_url}/></div>
          <br></br>

          <div><h1>{resValue}</h1></div>
          <br></br>
        
           <div>  
          <button onClick={random} className={styles.card}>Random Joke</button>
          <button onClick={back} className={styles.card}>Back</button>
          </div> 
        
        </div>
    </main>
  )
}



export const getServerSideProps = async(context) => {
  const res = await fetch(`https://api.chucknorris.io/jokes/random?${context.params}={category}`)
  const jokes = await res.json()
  console.log('hiiiii')

  return{
    props:{
      jokes,
    },
  }
}