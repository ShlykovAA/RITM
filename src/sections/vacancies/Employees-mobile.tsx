import { useState } from 'react';
import cn from 'classnames';
import styles from './Employees-mobile.module.scss';

export const EmployeesMobile = () => {
  const [ cardSide, setCardSide ] = useState({
    first: false,
    second: false,
  });
  const onTurnFirstCard = () => {
    setCardSide((prevStatus) => {return {...prevStatus, first: !prevStatus.first}});
  };
  const onTurnSecondCard = () => {
    setCardSide((prevStatus) => {return {...prevStatus, second: !prevStatus.second}});
  };
  return (
    <section className={styles.employees}>
      <div className={cn(styles.employee, styles.first_employee)}>
        <div className={styles.absolute_box}>
          <div className={cn(styles.photo_box, {[styles["photo_box_deactivated"]]: cardSide.first})}>
            <div className={styles.photo_box_top} onClick={onTurnFirstCard}>
              <p className={styles.turn_card}>Звернення</p>
              <p className={styles.job}>HR - МЕНЕДЖЕР</p>
            </div>
            <img src="/liana50.png" alt="Liana" className={styles.photo}/>
            <img src="/employ-card50.png" alt="field" className={styles.card_field_back}/>
          </div>
        </div>
        <div className={styles.absolute_box}>
          <div className={cn(styles.text_card, {[styles["text_card_active"]]: cardSide.first})} >
            <div className={styles.text_card_top} onClick={onTurnFirstCard}>
              <p className={styles.job}>HR - МЕНЕДЖЕР</p>
              <p className={styles.turn_card}>Фото</p>
            </div>
            <div className={styles.text_card_bottom}>
              <div>
                <p className={styles.card_description}>
                  Привіт!
                  <br />
                  <br />
                  Хочете розвиватись у сфері нерухомості? RITM — ідеальне місце для цього. Ми допоможемо досягти великих результатів та реалізувати Ваш потенціал. З нас умови розвитку та класна атмосфера, з Вас — енергія та цілеспрямованість. Щоб приєднатись до нашої команди — телефонуйте!
                </p>
              </div>
              <div className={styles.card_line}></div>
              <div className={styles.name_box}>
                <p className={styles.name}>ІВАЩЕНКО ЛІАНА</p>
                <a className={styles.btn} href="tel:+380977596100">
                  <span>ЗАТЕЛЕФОНУВАТИ</span>
                </a>
              </div>
            </div>
            <img src="/employ-card50.png" alt="field" className={styles.card_field}/>
          </div>
        </div>
        <div className={styles.layout}></div>
      </div>
      <div className={cn(styles.employee, styles.second_employee)}>
        <div className={styles.absolute_box}>
          <div className={cn(styles.photo_box, {[styles["photo_box_deactivated"]]: cardSide.second})}>
            <div className={styles.photo_box_top} onClick={onTurnSecondCard}>
              <p className={styles.turn_card}>Звернення</p>
              <p className={styles.job}>РЕКРУТЕР</p>
            </div>
            <img src="/liliya50.png" alt="Liliya" className={styles.photo} />
            <img src="/employ-card50.png" alt="field" className={styles.card_field_back}/>
          </div>
        </div>
        <div className={styles.absolute_box}>
          <div className={cn(styles.text_card, {[styles["text_card_active"]]: cardSide.second})}>
            <div className={styles.text_card_top} onClick={onTurnSecondCard}>
              <p className={styles.job}>РЕКРУТЕР</p>
              <p className={styles.turn_card}>Фото</p>
            </div>
            <div className={styles.text_card_bottom}>
              <div>
                <p className={styles.card_description}>
                  Вітаю!
                  <br />
                  <br />
                  Я радо поспілкуюсь з Вами особисто — детально розповім про роботу у нашій компанії та відповім на всі Ваші запитання. Якщо Ви прагнете реалізуватись у сфері нерухомості, вмієте знайти спільну мову з різними людьми та орієнтовані на результат — телефонуйте для запису на співбесіду!
                </p>
              </div>
              <div className={styles.card_line}></div>
              <div className={styles.name_box}>
                <p className={styles.name}>СОЛОВЧУК ЛІЛІЯ</p>
                <a className={styles.btn} href="tel:+380960553866">ЗАТЕЛЕФОНУВАТИ</a>
              </div>
            </div>
            <img src="/employ-card50.png" alt="field" className={styles.card_field}/>
          </div>
        </div>
        <div className={styles.layout}></div>
      </div>
    </section>
  );
};