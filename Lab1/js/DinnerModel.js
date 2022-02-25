class DinnerModel{
      constructor(guests =2){
        this.setNumberOfGuests(guests);
      }
      setNumberOfGuests(x){
        if(x <= 0 || !Number.isInteger(x)){
          throw Error;
        }
        this.numberOfGuests=x;
      }
}
