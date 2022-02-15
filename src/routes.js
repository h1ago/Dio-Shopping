import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Contact from "./pages/Contact";
import InfoProduct from './pages/InfoProduct';

export default () => (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/contato" element={<Contact/>} />
            <Route exact path="/produto/:id" element={<InfoProduct/>} />
        </Routes>
);