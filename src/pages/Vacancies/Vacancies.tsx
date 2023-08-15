import { useMatchMedia } from '../../hooks';
import { Advantages, CurrentVacancies, Employees, EmployeesMobile, Questions, Welcome } from '../../sections/vacancies';

export const Vacancies = () => {
  const { isMobile }:any = useMatchMedia();
  return (
    <main className='main'>
      <div className='bg_orange_01'></div>
      <Welcome />
      <Advantages />
      <CurrentVacancies />
      { isMobile ? ( <EmployeesMobile /> ) : ( <Employees /> )}
      <Questions />
    </main>
  );
};  