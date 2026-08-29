import HamburgerMenu from './HamburgerMenu';

const Header = () => {
    return (
        <header className = "header relative text-white px-8 py-4 flex flex-col lg:flex-row justify-between items-center gap-4 border-b-2 border-gray-300">
            <h1 className= "page-name text-emerald-900 text-left text-3xl">Gym Meal Prep</h1>
            <div className ="search-category flex items-center gap-4 lg:absolute lg:left-1/2 lg:-translate-x-1/2 sm:flex-col sm:gap-4">
                <section className = "categories text-emerald-900 text-xl flex gap-6">
                    <button>Chicken</button>
                    <button>Beef</button>
                    <button>Pork</button>
                    <button>Vegetarian</button>
                </section>
            </div>
            <HamburgerMenu />
        </header>
    )
};


export default Header;