import styles from '../styles/Home.module.css'
import JokeItem from './JokeItem'

export default function JokeList({jokes}) {
  return (
    <div className={styles.grid}> 
        {jokes.map((j) =>(
              <JokeItem joke={j} />
        ))}
    </div>
  )
}
