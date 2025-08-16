import React, { useEffect, useState } from 'react';
import styles from './Products.module.css';

type LangType = 'en' | 'hi' | 'ru' | 'de';

type ProductsProps = {
  lang: LangType;
};

type Product = {
  id: number;
  name: string;
  desc: string;
  image?: string;
};

const sectionHeading = {
  en: 'Our Products & Services',
  hi: 'हमारे उत्पाद और सेवाएँ',
};

const BACKEND_URL = 'http://localhost:4000';

const Products: React.FC<ProductsProps> = ({ lang }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`${BACKEND_URL}/api/products?lang=${lang}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [lang]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{sectionHeading[lang]}</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className={styles.grid}>
        {!loading && !error && products.map((product) => (
          <div key={product.id} className={styles.card}>
            {product.image && (
              <img
                src={product.image.startsWith('http') ? product.image : `${BACKEND_URL}${product.image}`}
                alt={product.name}
                className={styles.image}
              />
            )}
            <h3 className={styles.cardHeading}>{product.name}</h3>
            <p className={styles.description}>{product.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products; 