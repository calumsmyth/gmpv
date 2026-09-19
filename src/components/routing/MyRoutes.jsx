import {Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home';
import BeefRagu from '../../pages/BeefRagu';
import CheesyTacoRice from '../../pages/CheesyTacoRice';
import ChickenChorizoJambalaya from '../../pages/ChickenChorizoJambalaya';
import HighProteinOmletteWrap from '../../pages/HighProteinOmletteWrap';
import PeriChickenHalloumi from '../../pages/PeriChickenHalloumi';
import SausageCanneliniRagu from '../../pages/SausageCanneliniRagu';
import GrilledCheesePizzaBurrito from '../../pages/GrilledCheesePizzaBurrito'; 

const MyRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BeefRagu" element={<BeefRagu />} />
            <Route path="/CheesyTacoRice" element={<CheesyTacoRice />} />
            <Route path="/ChickenChorizoJambalaya" element={<ChickenChorizoJambalaya />} />
            <Route path="/HighProteinOmletteWrap" element={<HighProteinOmletteWrap />} />
            <Route path="/PeriChickenHalloumi" element={<PeriChickenHalloumi />} />
            <Route path="/SausageCanneliniRagu" element={<SausageCanneliniRagu />} />
            <Route path="/GrilledCheesePizzaBurrito" element={<GrilledCheesePizzaBurrito />} />
        </Routes>
    )
}

export default MyRoutes;