import arrow from '../../assets/arrow.svg';
import image from '../../assets/image.jpg';
import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardImageContainer}>
          <img className={styles.cardImage} src={image} alt="From Unsplash by Joel Filipe" />
          <div className={styles.arrowContainer}>
            <img className={styles.arrow} src={arrow} alt="Arrow Icon" />
          </div>
        </div>

        <div className={styles.cardInfos}>
          <div className={styles.top}>
            <p className={styles.price}>$499,999</p>
            <div className={styles.info}>
              <p>&#8226;&nbsp;5 Beds</p>
              <p>&#8226;&nbsp;4 Baths</p>
            </div>
          </div>
          <div className={styles.bot}>
            <p className={styles.name}>Cameron Housing</p>
            <p className={styles.size}>&#8226;&nbsp;1,300 sqft</p>
          </div>

          <button className={styles.button}>View full property details</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
