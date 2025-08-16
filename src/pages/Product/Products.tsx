import React from "react";
import { useTranslation } from "../../context/TranslationContext";
import styles from "./Products.module.css";

import product1 from "../../assets/product_img/agriculture.jpg";
import product2 from "../../assets/product_img/machinery.jpg";
import product3 from "../../assets/product_img/handicrafts.jpg";

// Define your static product data here (with image references)
const staticProducts = [
  {
    id: 1,
    nameKey: "products.items.0.name",
    descKey: "products.items.0.desc",
    image: product1,    
  },
  {
    id: 2,
    nameKey: "products.items.1.name",
    descKey: "products.items.1.desc",
    image: product2,
  },
  {
    id: 3,
    nameKey: "products.items.2.name",
    descKey: "products.items.2.desc",
    image: product3,
  },
];

// ✅ Helper to resolve nested keys from object
function getValueByPath(obj: any, path: string): string {
  return path.split(".").reduce((acc, key) => acc?.[key], obj) || "";
}

const Products: React.FC = () => {
  const { t } = useTranslation(); // t is an object, not a function

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{t.products.heading}</h1>

      <div className={styles.grid}>
        {staticProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.image}
              alt={getValueByPath(t, product.nameKey)}
              className={styles.image}
            />
            <h3 className={styles.cardHeading}>
              {getValueByPath(t, product.nameKey)}
            </h3>
            <p className={styles.description}>
              {getValueByPath(t, product.descKey)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
