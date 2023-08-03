import React from 'react';
import styles from './Question-spoiler.module.scss';
import cn from 'classnames';

interface IQuestionsSpoiler {
  questionData: string[];
}

export const QuestionsSpoiler: React.FC<IQuestionsSpoiler> = ({ questionData }) => {
  const [ active, setActive ] = React.useState(false);
  const onClick = () => {
    setActive(!active);
  }
  return (
    <div className={styles.questions_container}>
      <div className={styles.question_div} onClick={onClick}>
        <h3>{questionData[0]}</h3>
        <div className={cn(styles.arrow_box, {[styles["active"]]: active})}>
          <div className={styles.arrow}></div>
        </div>
      </div>
      <div className={cn(styles.answer_div, {[styles["answer_active"]]: active})}>
        <p>{questionData[1]}</p>
      </div>
    </div>
  );
};