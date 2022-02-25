function SearchPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState("");
    const [searchType, setSearchType] = React.useState("");

    React.useEffect(() => {
        setPromise(DishSource.searchDishes({}));
    }, []);
    const [data, error] = usePromise(promise);
    return (
        <>
            <SearchFormView
                options={["starter", "main course", "dessert"]}
                onText={(text) => {
                    setSearchQuery(text)
                }}
                onDishType={dishType => {
                    setSearchType(dishType)
                }}
                onSearch={() => {
                    console.log("test", {type: searchType, query: searchQuery})
                    setPromise(DishSource.searchDishes({type: searchType, query: searchQuery}))
                }}
            />
            {promiseNoData(promise, data, error) ||
            <SearchResultsView searchResults={data} dishChosen={(id) => props.model.setCurrentDish(id)}/>}
        </>)
}