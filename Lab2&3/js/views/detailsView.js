function DetailsView(props){
return(
	<div class="uber-parent">
		<div><h2>{props.dish.title}</h2></div>
			<div>
				<img src = {props.dish.image} alt={"Dish_Image"}/>
			</div>
		<div>
			<h3>
				Price: {props.dish.pricePerServing} for {props.people} guests: {(props.dish.pricePerServing * props.people ).toFixed(2)}
			</h3>
		</div>
		<div>
			<h3>
				<p>Ingrediens</p>
			</h3>
			<ul>
				{props.dish.extendedIngredients.map(ingredient =>
					<li
						key= {ingredient.id}>
						{`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}
					</li>)}
			</ul>
			<div>
				<h3>
					<p>Instructions</p>
				</h3>
				<p class="instructionText">{props.dish.instructions}</p>
			</div>
			<div>
				{<a href="" >For more information!</a>}
			</div>
		</div>
		<button onClick={ (event)=> {props.dishAdded(props.dish); window.location.hash = "#search"}} disabled = {props.isDishInMenu} >Add to menu!</button>
		<button onClick = {() => {window.location.hash = "#search"}}>Cancel</button>
	</div>
)}