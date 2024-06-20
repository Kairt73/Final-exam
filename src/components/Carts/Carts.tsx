import styles from './carts.module.css'

const Carts = () => {
    return (
        <div>
            <div className={styles.carts}>
                <div className={styles.cart}>
                    <div className={styles.cart_content}>
                        <img className={styles.cart_image} src="../../../public/img/Image1.png" alt="SDS" width={250} height={200} />
                        <div className={styles.cart_text}>
                            <h3 className={styles.cart_title}>
                                Search Data
                            </h3>
                            <p className={styles.cart_paragraph}>
                                Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.
                            </p>
                            <div className={styles.cart_button}>
                                <h3 className={styles.learn}>Learn more</h3>
                                <img src="../../../public/img/arrow.svg" alt="SDS" width={20} height={14} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cart_purple}>
                    <div className={styles.cart_content}>
                        <img className={styles.cart_image} src="../../../public/img/Image2.png" alt="SDS" width={250} height={200} />
                        <div className={styles.cart_text}>
                            <h3 className={styles.cart_title}>
                                24 Hours Access
                            </h3>
                            <p className={styles.cart_paragraph}>
                                Access is given 24 hours a full morning to night and
                                meet again in the morning, giving you comfort when
                                you need data when urgent.
                            </p>
                            <div className={styles.cart_button}>
                                <h3 className={styles.learn}>Learn more</h3>
                                <img src="../../../public/img/arrow.svg" alt="SDS" width={20} height={14} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cart_pink}>
                    <div className={styles.cart_content}>
                        <img className={styles.cart_image} src="../../../public/img/Image3.png" alt="SDS" width={250} height={200} />
                        <div className={styles.cart_text}>
                            <h3 className={styles.cart_title}>
                                Print Out
                            </h3>
                            <p className={styles.cart_paragraph}>
                                Print out service gives you convenience if someday
                                you need print data, just edit it all and just print it.
                            </p>
                            <div className={styles.cart_button}>
                                <h3 className={styles.learn}>Learn more</h3>
                                <img src="../../../public/img/arrow.svg" alt="SDS" width={20} height={14} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cart_blue}>
                    <div className={styles.cart_content}>
                        <img className={styles.cart_image} src="../../../public/img/Image4.png" alt="SDS" width={250} height={200} />
                        <div className={styles.cart_text}>
                            <h3 className={styles.cart_title}>
                                Security Code
                            </h3>
                            <p className={styles.cart_paragraph}>
                                Data Security is one of our best facilities. Allows for your files
                                to be safer. The file can be secured with a code or password that
                                you created, so only you can open the file.
                            </p>
                            <div className={styles.cart_button}>
                                <h3 className={styles.learn}>Learn more</h3>
                                <img src="../../../public/img/arrow.svg" alt="SDS" width={20} height={14} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carts