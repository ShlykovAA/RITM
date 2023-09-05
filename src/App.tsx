import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { Vacancies } from './pages/Vacancies';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Layout } from './components/Layout/Layout';
import { Provider } from 'react-redux';
import { store } from './store/store';

interface ITitles {
  [key: string] : string;
}

const titles: ITitles = {
  '/':'RITM',
  '/vacancies':'RITM - відкриті вакансії',
}

function App() {
  const location = useLocation();
  useEffect(
    () => {document.title = titles[location.pathname] === undefined ? 'RITM' : titles[location.pathname]},
    [location],
  )
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="vacancies" element={<Vacancies />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Provider>
    </>
  )
}

export default App
