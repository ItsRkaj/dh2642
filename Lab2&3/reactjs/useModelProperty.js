function useModelProperty(model, propertyName){
    const [value, setValue] = React.useState(model[propertyName]);
    React.useEffect(function(){
        model.addObserver(()=>setValue(model[propertyName]))
        return function () {
            model.removeObserver(setValue(model[propertyName]))
        }
    }, [model]);
    return value
}