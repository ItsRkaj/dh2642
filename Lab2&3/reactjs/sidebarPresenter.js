function SidebarPresenter(props){
    const numberOfGuests = useModelProperty(props.model, "numberOfGuests")
    const  dishes = useModelProperty(props.model, "dishes")
    return <SidebarView
        guests={numberOfGuests}
        dishes={[...dishes]}
        removeDish={(id)=>{
            props.model.removeFromMenu(id);
        }}
        dishChoice={(id)=>{
            props.model.setCurrentDish(id);
        }}
        setGuests={(x)=>{
            props.model.setNumberOfGuests(x);
        }}/>
}
