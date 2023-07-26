import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Vacancies } from './pages/Vacancies';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <main className='main'> */}
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="vacancies" element={<Vacancies />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      {/* </main> */}
    </>
  )
}

export default App
