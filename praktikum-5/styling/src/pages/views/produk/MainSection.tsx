import styles from "./produk.module.scss";

const MainSection = () => {
    const products = [
        { name: "Produk A", desc: "Deskripsi Produk A", price: "Rp 100.000" },
        { name: "Produk B", desc: "Deskripsi Produk B", price: "Rp 200.000" },
        { name: "Produk C", desc: "Deskripsi Produk C", price: "Rp 300.000" },
        { name: "Produk D", desc: "Deskripsi Produk D", price: "Rp 400.000" },
        { name: "Produk E", desc: "Deskripsi Produk E", price: "Rp 500.000" },
        { name: "Produk F", desc: "Deskripsi Produk F", price: "Rp 600.000" },
        { name: "Produk G", desc: "Deskripsi Produk G", price: "Rp 700.000" },
        { name: "Produk H", desc: "Deskripsi Produk H", price: "Rp 800.000" },
    ];

    return (
        <section className={styles.mainSection}>
            <div className={styles.container}>
                <h2>List Produk</h2>
                <div className={styles.productGrid}>
                    {products.map((product, index) => (
                        <div key={index} className={styles.productCard}>
                            <h3>{product.name}</h3>
                            <p>{product.desc}</p>
                            <p className={styles.price}>{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainSection;