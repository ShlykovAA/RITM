import { useMatchMedia } from '../../hooks';
import { Advantages, CurrentVacancies, Employees, EmployeesMobile, Questions, Welcome } from '../../sections/vacancies';
import { AdvantagesImg } from '../../sections/vacancies/Advantages-img';

export const Vacancies = () => {
  const { isMobile }:any = useMatchMedia();
  return (
    <main className='main'>
      <div className='bg_orange_01'></div>
      <Welcome />
      <Advantages />
      <AdvantagesImg />
      <CurrentVacancies />
      { isMobile ? ( <EmployeesMobile /> ) : ( <Employees /> )}
      <Questions />
    </main>
  );
};  