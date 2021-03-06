import React from 'react';
import AnimatedNumber from 'react-animated-number';
import PriceShift from './PriceShift';
import styles from '../styles/StockHeader.css';

const StockHeader = (props) => {
  const {
    data,
    companyName,
    displayPrice,
    hover,
  } = props;
  const priceFormatOptions = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };
  if (data.length) {
    return (
      <div className={`${styles.priceDisplay} ${styles.stockHeader}`}>
        <div className={styles.companyName}>{companyName}</div>
        <div className={styles.price} id="price">
          <AnimatedNumber
            duration={750}
            stepPrecision={2}
            style={{
              transition: '3.0s ease-out',
              transitionProperty:
                'background-color, color, opacity',
            }}
            frameStyle={perc => (
              perc === 100 ? {} : { opacity: 1 }
            )}
            value={displayPrice}
            formatValue={n => (
              Intl.NumberFormat('en-US', priceFormatOptions).format(n)
            )}
          />
        </div>
        <div className={styles.priceShift}>
          <PriceShift openingPrice={data[0].close} displayPrice={displayPrice} hover={hover} />
        </div>
      </div>
    );
  }
  return '';
};

export default StockHeader;
