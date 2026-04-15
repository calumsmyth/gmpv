import { useState } from 'react';
import {Divide as Hamburger} from 'hamburger-react';
import { NavLink } from 'react-router-dom';

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/BeefRagu", label: "Beef Ragu" },
        { to: "/CheesyTaco", label: "Cheesy Taco" },
        { to: "/ChickenChorizoJambalaya", label: "Chicken Chorizo Jambalaya" },
        { to: "/HighProtienOmletteWrap", label: "High Protein Omlette Wrap" },
        { to: "/PeriChickenHalloumi", label: "Peri Chicken Halloumi" },
        { to: "/SausageCanneliniRagu", label: "Sausage Cannelini Ragu" }
    ]

    const handleToggle = () =>{
        setOpen(false);
    }

    return (
        <div className="hamburger-wrapper">
            <div className="hamburger-icon-container">
                <Hamburger
                    size={30}
                    toggled={open}
                    toggle={setOpen}
                    color="#00ff87"
                />
            </div>

            {open && (
                <div className="mobile-nav-menu">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.to}
                            className="mobile-nav-link"
                            activeClassName="active-link"
                            onClick={handleToggle}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    )
}

export default HamburgerMenu;