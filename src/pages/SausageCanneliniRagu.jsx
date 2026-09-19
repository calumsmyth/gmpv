const SausageCanneliniRagu = () => {
    return(
        <>
            <div id="sausage-cannelini-ragu" className="flex flex-col gap-10 p-4">
                <div id="page-title" className="flex justify-center items-center text-2xl">
                    <h1 className= "p-4 h-full">Sausage Cannelini Ragu</h1>
                </ div>

                <div id="ingredients" className="flex flex-col">
                    <h2 className="">Ingredients</h2>
                        <ul className="list-disc pl-4">
                            <li>1 Tablespoon Olive or Vegetable Oil</li>
                            <li>1 Tablespoon of Oregano</li>      
                            <li>Pinch of Black Pepper</li>
                            <li>Pinch of Salt</li>
                            <li>Pinch of Sugar</li>
                            <li>6 Pork Sausages with the meat squeezed out from the skins</li>
                            <li>2 Chopped Onions</li>
                            <li>2 Chopped Garlic Cloves</li>
                            <li>400g Chopped Plum Tomatoes</li>
                            <li>400g Cannellini beans</li>
                            <li>150ml of Beef Stock</li>
                            <li>200g Spaghetti</li>
                        </ul>
                </div>

                <div className="steps">
                    <h2>Steps</h2>
                        <ol className="list-decimal list-inside">
                            <li>Heat oil in a frying pan on medium heat. Fry sausage meat until browned and fat has been released (approximately 6-7 mins). Ensuring to break up the meat with a spoon as you stir. Remove the meat and place on kitchen paper. Leave fat in the pan</li>
                            <li>Fry the onions in the fat until softened (approximately 5 mins). Then add garlic, oregano and black pepper. Cover and fry until completely softened (approximately 6 mins).</li>
                            <li>Return Sausage meat to the pan. Add tomatoes, salt and sugar. Then add beef stock. Simmer on low heat until the sauce has thickened slightly (approximately 15 mins).</li>
                            <li>Add the beans with their liquid and cook until sauce has thickened slightly once more (approximately 10-15 mins)</li>
                            <li>At the same time as the above step, cook spaghetti as per pack instructions. Combine the two once both cooked.</li>
                            <h3>Serve and Enjoy!</h3>
                        </ol>
                </div>
            </div>
        </>
    )
}

export default SausageCanneliniRagu;