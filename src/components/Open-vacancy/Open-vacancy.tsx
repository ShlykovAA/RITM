import styles from './Open-vacancy.module.scss';

interface IOpenVacancy {
  data: string[]
}

export const OpenVacancy: React.FC<IOpenVacancy> = ({ data }) => {
  return (
    <div className={styles.vacancy_card}>
      <div className={styles.phone_box}>
        <a href="tel:+380977596100" className={styles.a_tell}><img src="/phone.png" alt="phone" className={styles.vacancy_phone}/></a>
        <h3>{data[0]}</h3>
      </div>
      <div className={styles.point_box}>
        <img src="/point.png" alt="point" className={styles.vacancy_point}/>
        <p>{data[1]}</p>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};