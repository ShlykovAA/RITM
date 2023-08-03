import { Advantages, CurrentVacancies, Employees, Welcome } from '../../sections/vacancies';
import { Questions } from '../../sections/vacancies/Questions';

export const Vacancies = () => {
  return (
    <main className='main'>
      <div className='bg_orange_01'></div>
      <Welcome />
      <Advantages />
      <CurrentVacancies />
      <Employees />
      <Questions />
    </main>
  );
};  