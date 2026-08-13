import {Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home';
import BeefRagu from '../../pages/BeefRagu';
import CheesyTaco from '../../pages/CheesyTaco';
import ChickenChorizoJambalaya from '../../pages/ChickenChorizoJambalaya';
import HighProtienOmletteWrap from '../../pages/HighProtienOmletteWrap';
import PeriChickenHalloumi from '../../pages/PeriChickenHalloumi';
import SausageCanneliniRagu from '../../pages/SausageCanneliniRagu';
import GrilledCheesePizzaBurrito from '../../pages/GrilledCheesePizzaBurrito'; 

const MyRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BeefRagu" element={<BeefRagu />} />
            <Route path="/CheesyTaco" element={<CheesyTaco />} />
            <Route path="/ChickenChorizoJambalaya" element={<ChickenChorizoJambalaya />} />
            <Route path="/HighProtienOmletteWrap" element={<HighProtienOmletteWrap />} />
            <Route path="/PeriChickenHalloumi" element={<PeriChickenHalloumi />} />
            <Route path="/SausageCanneliniRagu" element={<SausageCanneliniRagu />} />
            <Route path="/GrilledCheesePizzaBurrito" element={<GrilledCheesePizzaBurrito />} />
        </Routes>
    )
}

export default MyRoutes;