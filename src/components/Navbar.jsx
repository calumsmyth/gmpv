import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BeefRagu from '../pages/BeefRagu';
import CheesyTaco from '../pages/CheesyTaco';
import ChickenChorizoJambalaya from '../pages/ChickenChorizoJambalaya';
import HighProtienOmletteWrap from '../pages/HighProtienOmletteWrap';
import PeriChickenHalloumi from '../pages/PeriChickenHalloumi';
import SausageCanneliniRagu from '../pages/SausageCanneliniRagu';

function Navbar() {
    return(
        <Router>
            <nav className= "bg-purple-500 text-white p-">
                <a href="/">Home</a>
                <a href="BeefRagu">Beef Ragu</a>
                <a href="CheesyTaco">Cheesy Taco</a>
                <a href="ChickenChorizoJambalaya">Chicken and Chorizo Jambalaya</a>
                <a href="HighProtienOmletteWrap">High Protien Omlette Wrap</a>
                <a href="PeriChickenHalloumi">Peri-Peri Chicken and Halloumi Rice</a>
                <a href="SausageCanneliniRagu">Sausage & Cannelini Bean Ragu</a>
            </nav>
            <Routes>
                <Route path="BeefRagu" element={<BeefRagu />} />
                <Route path ="CheesyTaco" element={<CheesyTaco />} />
                <Route path ="ChickenChorizoJambalaya" element = {<ChickenChorizoJambalaya />} />
                <Route path ="HighProtienOmletteWrap" element={<HighProtienOmletteWrap />} />
                <Route path="PeriChickenHalloumi" element={<PeriChickenHalloumi />} />
                <Route path="SausageCanneliniRagu" element={<SausageCanneliniRagu />} />
            </Routes>
        </Router>
    );
}

export default Navbar;