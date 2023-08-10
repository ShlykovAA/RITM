import { useMatchMedia } from '../../hooks';
import { Advantages, AdvantagesDesktop, CurrentVacancies, Employees, EmployeesMobile, Questions, Welcome } from '../../sections/vacancies';

export const Vacancies = () => {
  const { isMobile, isDesktop }:any = useMatchMedia();
  return (
    <main className='main'>
      <div className='bg_orange_01'></div>
      <Welcome />
      {isDesktop ? ( <AdvantagesDesktop /> ) : ( <Advantages /> )}
      <CurrentVacancies />
      { isMobile ? ( <EmployeesMobile /> ) : ( <Employees /> )}
      <Questions />
    </main>
  );
};  