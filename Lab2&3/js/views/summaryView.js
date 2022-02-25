function SummaryView(props){
    
    return (  // a lonely return on a line returns undefined. Parentheses needed
        <div>
            <div>
            Dinner for <span title="nr. guests">{props.persons}</span> guests:
            </div>

            <div>
                <table>
                    <tr>
                    <th>Ingredients</th>
                    <th>Aisle</th>
                    <th>Quantity</th>
                    </tr>

                    {
                        props.dishIngredients.sort(compareIngredients).map(thisFood => (
                            <tr>
                                <td>{thisFood.name}</td>
                                <td>{thisFood.aisle}</td>
                                <td>{(thisFood.amount * props.persons).toFixed(2)} {thisFood.measures.metric.unitShort}</td>
                            </tr>
                        ))}
                </table>
            <div>
                <button
                onClick={e=> window.location.hash="#search" }>
                    back to search

                </button>
            </div>

            </div>
            
       </div>

       
    );
}

function compareIngredients(a,b){
    if(a.aisle < b.aisle)
       return -1;
       
       if (a.aisle > b.aisle) return 1; 
    // TODO return 1 if a.aisle > b.aisle. Note: not >= !!!

    // At this point, we know that a.aisle===b.aisle


    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;

    // TODO compare a.name with b.name, return 1 or -1 based on that

    if(a.name ===b.name) throw  new Error ("Same ingredient");
    /* if a.name===b.name throw an error because 
       ingredient names are not unique as specified, so 
       there’s a bug */
}



 
