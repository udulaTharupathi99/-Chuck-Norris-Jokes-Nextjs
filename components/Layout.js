
import styles from '../styles/Home.module.css' 

export default function Layout({children}) {
  return (
      <>
        <div className={styles.container}>
            <main>
            {children}
            
            <footer className={styles.footer}></footer>
            </main>
        </div>
      </>
  )
}
