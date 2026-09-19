const BeefRagu = () =>{
    return(
        <>
            <div id="beef-ragu" className="flex flex-col gap-10 p-4">
                <div id="page-title" className="flex justify-center items-center text-2xl">
                    <h1 className= "p-4 h-full">Beef Ragu</h1>
                </ div>

                <div id="ingredients" className="flex flex-col">
                    <h2 className="">Ingredients</h2>
                        <ul className="list-disc pl-4">
                            <li>1 Tablespoon Rapssed Oil</li>
                            <li>2 Sliced Onions</li>
                            <li>3 Grated Garlic Cloves </li>
                            <li>3 Finely Chopped Carrots</li>
                            <li>200g of Mixed Forzen Vegetables</li>            
                            <li>500g steak mince</li>
                            <li>1 Tablespoon Thyme</li>
                            <li>1/2 teaspoon of ground pepper</li>
                            <li>Vegetable Stock Cube</li>
                            <li>500g passata</li>
                        </ul>
                </div>

                <div className="steps">
                    <h2>Steps</h2>
                        <ol className="list-decimal list-inside">
                            <li>Heat the oil in a large non-stick pan on a medium-low heat. Fry the onions for 10 minutes until golden.</li>
                            <li>Add the garlic and mince and cook until mince is browned. Ensure to break up mince and stir as it cooks.</li>
                            <li>Add stock cube, passata, carrots, pepper and thyme. Cover and cook on low heat for 25-30 minutes, stirring occasionally until veg is tender and meat is cooked.</li>
                            <li>Add and stir through mixed vegetables for approximately 5 minutes until cooked.</li>
                            <li>Serve with rice and Enjoy!</li>
                        </ol>
                </div>
            </div>
        </>
    )
}

export default BeefRagu;