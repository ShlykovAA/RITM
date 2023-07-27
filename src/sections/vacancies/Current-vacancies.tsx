import { OpenVacancy } from '../../components/Open-vacancy';
import { currentVacanciesTextData } from '../../consts/current-vacancies-text';
import styles from './Current-vacancies.module.scss';

export const CurrentVacancies = () => {
  return (
    <section className={styles.current_vacancies}>
      <div className={styles.current_title}>
        <h1 id='current_vacancies'>АКТУАЛЬНІ <span className={styles.orange}>ВАКАНСІЇ</span>:</h1>
      </div>
      <div className={styles.vacancy_container}>
        { currentVacanciesTextData.map((item)=>(<OpenVacancy data={item} />)) }
      </div>
    </section>
  );
};