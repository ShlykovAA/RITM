import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className='main'>
      <h1>Sorry, page not found. At the moment only one page is ready <Link to="/vacancies">Вакансії</Link></h1>
    </main>
  );
};