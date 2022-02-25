function SearchFormView(props){
    return (  // a lonely return on a line returns undefined. Parentheses needed
        <div>
            <input onChange={ e=> props.onText(e.target.value) } />
            <select onChange={eventPrinter} >
            <option>Choose:</option>
            {props.options.map(
                function(opt){
                  return <option>{opt}</option>
                })}
          </select>
          <button onClick={event=> props.onSearch()}>Search!</button>
       </div>
    );
}

function eventPrinter(evt){ console.log(evt);}
