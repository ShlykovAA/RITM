import { QuestionsSpoiler } from '../../components/Question-spoiler';
import { vacanciesQuestionsData } from '../../consts/vacancies-questions';
import styles from './Questions.module.scss';

export const Questions = () => {
  return (
    <section className={styles.questions}>
      <div className={styles.questions_title}>
        <h1>НАЙЧАСТІШІ ЗАПИТАННЯ І <span className="orange">ВІДПОВІДІ</span> НА НИХ </h1>
      </div>
      <div>
        { vacanciesQuestionsData.map((item, index) => {
          return (
            <QuestionsSpoiler questionData={item} key={index}/>
          );
        }) }
      </div>
    </section>
  );
};