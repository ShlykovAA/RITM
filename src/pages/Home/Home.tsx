import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main className='main'>
      <h1>Home page</h1>
      <h1>At the moment only one page is ready <Link to="/vacancies">Вакансії</Link></h1>
    </main>
  );
};