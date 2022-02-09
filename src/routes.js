import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import ProductInfo from './pages/ProductInfo';

export default () => (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/produto/:id" element={<ProductInfo/>} />
        </Routes>
);