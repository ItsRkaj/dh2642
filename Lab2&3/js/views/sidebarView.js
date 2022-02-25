function SidebarView(props){
const types=["starter", "main course", "dessert"];

function dishType(dish){
    if(dish.dishTypes){
    	const tp= dish.dishTypes.filter(value => types.includes(value));
    	if(tp.length)
	    return tp[0];
    }
    return "";
}

function compareDishes(a,b){
    let ai= types.indexOf(dishType(a));
    let bi= types.indexOf(dishType(b)); 
    return ai <bi ? -1 : ai > bi ? 1 : 0
}

    return (  // a lonely return on a line returns undefined. Parentheses needed
        <div>
            <button disabled={props.guests <= 1} onClick={()=>{props.setGuests(props.guests - 1);}}>-</button>
            <span class="sidebarButtonText" title="nr. guests">{props.guests}</span>
            <button onClick={() => {props.setGuests(props.guests + 1);}}>+</button>
        
        <table>

            <tbody>
            {props.dishes.sort (compareDishes).map(
                (dish) => (
                    <tr key = {dish.id}>
                        <td>
                            <button
                                button onClick = {() => props.removeDish(dish)}>x</button>
                        </td>
                        
                        <td>
                            <a href="" onClick = {event => {event.preventDefault();
                                props.dishChoice(dish.id);
                                window.location.hash = "#details";
                                }}
                            >
                                {dish.title}
                            </a>
                        </td>

                        <td class="firstCap">{dishType(dish)}</td>
                        <td>{(dish.pricePerServing * props.guests).toFixed(2)}</td>

                    </tr>
                )
            )}
                    <td></td>
                    <td>Total:</td>
                    <td></td>
                    <td>
                        {props.dishes.reduce((prev, curr) => prev + (curr.pricePerServing*props.guests), 0).toFixed(2)}
                    </td>  
            </tbody>
        </table>
        </div>
)}
