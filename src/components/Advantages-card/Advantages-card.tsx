import cn from 'classnames';
import styles from './Advantages-card.module.scss';

interface IAdvantagesCard {
  data: string[]
}

export const AdvantagesCard: React.FC<IAdvantagesCard> = ({ data }) => {
  return (
    <div className={cn(styles.adv_cards, {
      [styles["smaller"]]: data[5] === "fourth",
      [styles["larger"]]: data[5] === "fifth",
    })}>
      <div className={styles.adv_layout}></div>
      <div className={cn(styles.card_top, {[styles["card_top_fifth"]]: data[5] === "fifth"})} >
        <div className={styles.adv_card_line}></div>
        <img src={data[3]} alt={data[4]} className={cn(styles.adv_img, {[styles["smaller_img"]]: data[5] === "fourth"})} />
      </div>
      <h3>{data[0]}<br />{data[1]}</h3>
      <p>{data[2]}</p>
    </div>
  );
};