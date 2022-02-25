function ShowPresenter(props){
	const [hashState, setHashState] = React.useState(window.location.hash);
	const listener = (() => {
		setHashState(window.location.hash)
	})
	React.useEffect (() => {
		window.addEventListener("hashchange", listener);
		return (() => window.removeEventListener("hashchange", listener));
	}, []);
	return(
		<div class={(hashState !== props.hash) ? "hidden" : ""} >
			{props.children}
		</div>
	)
}