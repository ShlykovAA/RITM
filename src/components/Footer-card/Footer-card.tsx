import styles from './Footer-card.module.scss';

interface IFooterCard {
  data: string[]
}

export const FooterCard: React.FC<IFooterCard> = ({ data }) => {
  return (
    <a href="" className={styles.a_container}>
      <div className={styles.cards_title}>
        <img src={data[0]} alt={data[1]} className={styles.cards_logo} />
        <p>{data[1]}</p>
      </div>
      <div className={styles.cards_text}>
        <p>{data[2]}</p>
      </div>
    </a>
  );
};