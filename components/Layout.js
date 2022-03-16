
import styles from '../styles/Home.module.css' 

export default function Layout({children}) {
  return (
      <>
        <nav className={styles.nav}> <h2>Chuck Norris Jokes</h2></nav>
        <div className={styles.container}>
            <main >
              {children}
            </main>  
        </div>
        <footer className={styles.footer}></footer>
      </>
  )
}
