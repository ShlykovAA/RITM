import { useMatchMedia } from '../../hooks';
import { Advantages, CurrentVacancies, Employees, EmployeesMobile, Questions, Welcome } from '../../sections/vacancies';

export const Vacancies = () => {
  const { isMobile }:any = useMatchMedia();
  return (
    <main className='main'>
      <h1 style={{display: 'none'}}>Відкриті вакансії, контакти рекрутерів та відповіді на запитання.</h1>
      <div className='bg_orange_01'></div>
      <Welcome />
      <Advantages />
      <CurrentVacancies />
      { isMobile ? ( <EmployeesMobile /> ) : ( <Employees /> )}
      <Questions />
    </main>
  );
};  