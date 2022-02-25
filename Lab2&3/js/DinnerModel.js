class DinnerModel{

    setDishes(dishes){ this.dishes= [...dishes]; this.notifyObservers() ;}

      constructor(guests=2, dishes=[], currentDish=null){
          this.observers = [];
          this.setNumberOfGuests(guests);
          this.dishes = [...dishes];
          this.currentDish = currentDish;
      }
      addObserver(callback){
          this.observers = [...this.observers, callback];
      }
      removeObserver(callback){
          this.observers = this.observers.filter(arg =>
              arg !== callback);
      }
      notifyObservers(){
          this.observers.forEach(args=>args())
      }
      setNumberOfGuests(x){
        if(Number.isInteger(x) && x > 0){
          const old = this.numberOfGuests;
          this.numberOfGuests = x;
          if(old !== x) {
              this.notifyObservers();
          }
        } else {
          throw Error;
        }
      }
      setCurrentDish(id){

        if (this.currentDish === id){
            return
        }
          /*const old = this.currentDish;*/
          this.currentDishDetails = null;
          this.currentDishError = null;
          this.currentDish = id;

          this.notifyObservers();

          if(this.currentDish){
              DishSource.getDishDetails (this.currentDish).then((results) => {
                  if (this.currentDish === id){
                      this.currentDishDetails = results
                      this.notifyObservers()
                  }
              })
              .catch(err=> {
                  if (this.currentDish === id){
                      this.currentDishError = err
                      this.notifyObservers()
                  }
              })
          }
      }

      addToMenu(dish){
          const found = this.dishes.find(e=>e===dish);
          if(found !== dish){
              this.dishes = [...this.dishes, dish];
              this.notifyObservers();
          }
      }
      removeFromMenu(dishData){
          const found = this.dishes.find(e=>e===dishData)
          if(found === dishData){
              this.dishes = [...this.dishes].filter((dish)=>dish.id !== dishData.id);
              this.notifyObservers();
          }
      }
}

function getIngredients(dishArr){
  const result={}; // object used as mapping
  dishArr.forEach(d=> d.extendedIngredients.forEach(ingredient=>{
       if(!result[ingredient.id]){
           // ingredient not taken into account yet
           // associate the ingredient with the ID
           // {...i } is a *copy* of the ingredient (spread syntax)
           // we copy just in case, as we’ll change the object below
           result[ingredient.id]={...ingredient};
       }
       else {
           result [ingredient.id].amount += ingredient.amount;
       }
  }))
 return Object.values(result);
}




