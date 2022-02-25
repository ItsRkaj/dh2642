function SidebarView(props){
    return (  // a lonely return on a line returns undefined. Parentheses needed
        <div>
          <button disabled={props.guests <= 1} onClick={()=>{props.setGuests(props.guests - 1);}}>-</button>
          <span title="nr. guests">{props.guests}</span>
          <button onClick={() => {props.setGuests(props.guests + 1);}}>+</button>
       </div>
    );
}
