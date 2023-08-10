import styles from './Employees.module.scss';
import cn from 'classnames';

export const Employees = () => {
  return (
    <section className={styles.employees}>
      <img src="/fon-900-2.png" alt="background_orange" className={styles.adv_bg_orange}/>
      <div className={cn(styles.employee, styles.first_employee)}>
        <div className={styles.photo_box}>
          <img src="/liana50.png" alt="Liana" className={styles.photo}/>
        </div>
        <div className={styles.text_card}>
          <div className={styles.text_card_top}>
            <img src="/RITM-logo-1-1300.png" alt="RITM" className={styles.logo} />
            <div className={styles.job_box}>
              <p className={styles.job}>HR - МЕНЕДЖЕР</p>
            </div>
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
              {/* <a className={styles.btn} href="tel:+380977596100">
                <span>ЗАТЕЛЕФОНУВАТИ</span>
              </a> */}
              <div className={styles.contacts_btn_box}>
                <a href="tel:+380977596100" className={styles.contacts_a}>
                  <img src="/phone2.png" alt="phone" className={styles.contacts_img} />
                  </a>
                <a href="viber://chat?number=%2B380990530908" className={styles.contacts_a}>
                  <img src="/viber.png" alt="viber" className={styles.contacts_img} />
                </a>
                <a href="https://t.me/liana_ritm" className={styles.contacts_a}>
                  <img src="/telegram-240.png" alt="telegram" className={styles.contacts_img} />
                </a>
              </div>  
            </div>
          </div>
          <img src="/employ-card50.png" alt="field" className={styles.card_field}/>
        </div>
        <div className={styles.layout}></div>
      </div>
      <div className={cn(styles.employee, styles.second_employee)}>
        <div className={styles.text_card}>
          <div className={styles.text_card_top}>
            <img src="/RITM-logo-1-1300.png" alt="RITM" className={styles.logo} />
            <div className={styles.job_box}>
              <p className={styles.job}>РЕКРУТЕР</p>
            </div>
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
        <div className={styles.photo_box}>
          <img src="/liliya50.png" alt="Liliya" className={styles.photo} />
        </div>
        <div className={styles.layout}></div>
      </div>
    </section>
  );
};