import styles from '../scss/styles.module.scss'
import FormContainer from './FormContainer.tsx'

const Main = () => {

  return (
    <div className={styles.modal}>
      <div className={`${styles.side} ${styles.logo}`}></div>
      <FormContainer />
    </div>
  )
}

export default Main
