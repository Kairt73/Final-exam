import styles from './naming.module.css'

const Naming = () => {
    return (
        <div>
            <div className={styles.naming_text}>
                <h1 className={styles.naming_title}>
                    Features
                </h1>
                <p className={styles.naming_paragraph}>
                    Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.
                </p>
            </div>
        </div>
    )
}

export default Naming