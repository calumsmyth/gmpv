import HamburgerMenu from './HamburgerMenu';

const Header = () => {
    return (
        <header className = "header bg-slate-500 text-white px-8 py-10 flex lg:flex-row justify-between items-center sm:flex-col sm:gap-4">
            <h1 className=" page-name text-white text-left text-4xl">Gym Meal Prep</h1>
            <div className ="search-category flex lg:flex-row justify-between items-center gap-4 sm:flex-col sm:gap-4">
                <section className = "categories flex mr-6 gap-6">
                    <button>Chicken</button>
                    <button>Beef</button>
                    <button>Pork</button>
                    <button>Vegetarian</button>
                </section>
                <search className = "bg-slate-100 text-black border-2 border-black rounded-full px-32 py-1" >Search</search>
            </div>
            <HamburgerMenu />
        </header>
    )
};


export default Header;