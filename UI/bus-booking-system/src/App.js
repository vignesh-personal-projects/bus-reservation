import './App.css';
import './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/components/home/Home';
import TicketBooking from './components/ticketBooking/TicketBooking';
import Confirmation from './components/confirmation/Confirmation';
import ErrorPage from './components/errorPage/ErrorPage';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="ticketBooking" element={<TicketBooking />} />
          <Route path="confirmation/:id" element={<Confirmation />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
