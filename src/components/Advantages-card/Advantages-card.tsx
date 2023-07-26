import styles from './Advantages-card.module.scss';

interface IAdvantagesCard {
  data: string[]
}

export const AdvantagesCard: React.FC<IAdvantagesCard> = ({ data }) => {
  return (
    <div className={styles.adv_cards}>
      <div className={styles.adv_layout}></div>
      <div className={styles.card_top}>
        <div className={styles.adv_card_line}></div>
        <img src={data[2]} alt={data[3]} className={styles.adv_img} />
      </div>
      <h3>{data[0]}</h3>
      <p>{data[1]}</p>
    </div>
  );
};