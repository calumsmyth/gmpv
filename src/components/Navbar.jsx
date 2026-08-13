import { NavLink} from "react-router-dom";


function Navbar() {
    return(
        <nav className= "bg-purple-500 text-white p-4 flex lg:flex-row sm:flex-col gap-5 justify-center ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="BeefRagu">Beef Ragu</NavLink>
                <NavLink to="CheesyTaco">Cheesy Taco</NavLink>
                <NavLink to="ChickenChorizoJambalaya">Chicken and Chorizo Jambalaya</NavLink>
                <NavLink to="HighProtienOmletteWrap">High Protien Omlette Wrap</NavLink>
                <NavLink to="PeriChickenHalloumi">Peri-Peri Chicken and Halloumi Rice</NavLink>
                <NavLink to="SausageCanneliniRagu">Sausage & Cannelini Bean Ragu</ NavLink>
                <NavLink to="GrilledCheesePizzaBurrito">Grilled Cheese Pizza Burrito</ NavLink>
        </nav>
    );
}

export default Navbar;