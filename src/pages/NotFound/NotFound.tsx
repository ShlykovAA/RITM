import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className='main'>
      <h1>Sorry, page not found. You should come back to <Link to="/">Home</Link></h1>
    </main>
  );
};