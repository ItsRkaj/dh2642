function SummaryPresenter(props){
    const numberOfGuests = useModelProperty(props.model, "numberOfGuests")
    const  dishes = useModelProperty(props.model, "dishes")
    return <SummaryView
        persons={props.model.numberOfGuests}
        dishIngredients={getIngredients([...props.model.dishes])}/>
}
