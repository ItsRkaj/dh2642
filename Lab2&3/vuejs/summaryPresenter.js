function vueSummaryPresenter(props){
    return <SummaryView persons={props.model.numberOfGuests}
                        dishIngredients = {getIngredients([... props.model.dishes])} />
}