const App= (props)=>
<div class="flexParent">
  <div class="sidebar debug"><SidebarPresenter model={props.model}/></div>
  <div class="mainContent debug">
    <ShowPresenter hash="#search">
      <SearchPresenter model={props.model}></SearchPresenter>
    </ShowPresenter>

    <ShowPresenter hash="#summary">
      <SummaryPresenter model={props.model}></SummaryPresenter>
    </ShowPresenter>

    <ShowPresenter hash="#details">
      <DetailsPresenter model={props.model}></DetailsPresenter>
    </ShowPresenter>
  </div>
</div>

function defaultRoute(){
  const knownRoutes = ["#search", "#summary", "#details"]
  if(!knownRoutes.includes(window.location.hash)){
    window.location.hash="#search";
  } 
}
defaultRoute()

window.addEventListener("hashchange", defaultRoute);