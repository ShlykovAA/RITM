import { OpenVacancy } from '../../components/Open-vacancy';
import { currentVacanciesTextData } from '../../consts/current-vacancies-text';
import styles from './Current-vacancies.module.scss';

export const CurrentVacancies = () => {
  return (
    <section className={styles.current_vacancies} id='current_vacancies'>
      <div className={styles.current_title}>
        <h2>АКТУАЛЬНІ <span className="orange">ВАКАНСІЇ</span>:</h2>
      </div>
      <div className={styles.vacancy_container}>
        { currentVacanciesTextData.map((item, index)=>(<OpenVacancy data={item} key={index} />)) }
      </div>
    </section>
  );
};