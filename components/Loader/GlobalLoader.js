import styles from "./GlobalLoader.module.scss"

const GlobalLoader = () => {
  return (
    <div className={styles.GlobalLoader}>
      <img src="/images/loader.svg" alt="" />
    </div>
  )
}

export default GlobalLoader
