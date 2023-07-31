import { Advantages, CurrentVacancies, Employees, Welcome } from '../../sections/vacancies';

export const Vacancies = () => {
  return (
    <main className='main'>
      <div className='bg_orange_01'></div>
      <Welcome />
      <Advantages />
      <CurrentVacancies />
      <Employees />
    </main>
  );
};  