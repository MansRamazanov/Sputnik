import React from 'react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  title: string;
  origin: string;
  price: number;
  currency: 'RUB' | 'USD' | 'EUR';
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  origin,
  price,
  currency,
  imageUrl,
}) => {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price / 100);
  };

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.origin}>Страна: {origin}</p>
        <p className={styles.price}>{formatPrice(price, currency)}</p>
      </div>
    </div>
  );
};

export default ProductCard; 