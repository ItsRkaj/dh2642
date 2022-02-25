function SearchFormView(props) {
    return (
        <div>
            <input onInput={(event) => props.onText(event.target.value)} placeholder={'pizza'}/>
            <select onChange={(event) => props.onDishType(event.target.value)}>
                <option>Choose:</option>
                {props.options.map((opt) => (
                    <option> {opt} </option>
                ))}
            </select>
            <button onClick={props.onSearch}>Search!</button>
            <button class="navButton"
                    onClick={e => window.location.hash = "#summary"}> Show Summary
            </button>
        </div>
    );
}

function SearchResultsView(props) {
    return (<div class="searchResultsParent">
            {props.searchResults.map((searchResult) => (
                <div class="searchResults" key={searchResult.id}
                      onClick={() => {
                          props.dishChosen(searchResult.id)
                          window.location.hash = "#details";
                      }}>
                    <img src={'https://spoonacular.com/recipeImages/' + searchResult.image}/>
                    <p class="searchResultsText">{searchResult.title}</p>
                </div>
            ))}
        </div>
    );
}


