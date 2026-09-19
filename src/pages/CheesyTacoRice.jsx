const CheesyTacoRice = () => {
    return (
        <>
            <div id="cheesy-taco-rice" className="flex flex-col gap-10 p-4">
                <div id="page-title" className="flex justify-center items-center text-2xl">
                    <h1 className= "p-4 h-full">Cheesy Taco Rice</h1>
                </ div>

                <div id="ingredients" className="flex flex-col">
                    <h2 className="">Ingredients</h2>
                        <ul className="list-disc pl-4">
                            <li>Fry Light or 1 Tablespoon of Olive Oil</li>
                            <li>500g beef mince</li>
                            <li>1 Diced Onion</li>            
                            <li>Taco seasoning</li>
                            <li>2 beef stock cube - use enough water for 2 cubes as per instructions</li>
                            <li>300g rice (dry weight)</li>            
                            <li>30g Tomate Puree</li>
                            <li>60g Grated Cheese</li>
                        </ul>
                </div>

                <div className="steps">
                    <h2>Steps</h2>
                        <ol className="list-decimal list-inside">
                            <li>Add fry light/ Olive oil and diced onion to a large frying pan. Fry on medium heat until onions start to turn golden.</li>
                            <li>As the onions begin to golden, add in beef mince and taco seasoning. Ensure to break up beef in pan with a wooden spoon and cook until meat is browned.</li>
                            <li>Once beef is browned, add dry rice, beef stock and tomatoe puree. Cover with a lid and leave to simmer for about 10-12 minutes, until rice has become fluffy and cooked.</li>
                            <li>(This step is optional, if you are aiming to cut down on fats, you may want to consider skipping this step) - Cover with grated cheese. Replace lid and leave to cook for a few more minutes until cheese is melted.</li>
                            <li>Serve and Enjoy! You can eat it on its own, or for that full taco experience, can be eaten with tortila chips, in a tortilla or in a wrap</li>
                        </ol>
                </div>
            </div>
        </>
    )
}

export default CheesyTacoRice;