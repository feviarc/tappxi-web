import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/Home/HomePage';


export const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={ <MainLayout/> }>
               <Route index element={ <HomePage/>  }/>
            </Route>
         </Routes>
      </BrowserRouter>
   );
};
