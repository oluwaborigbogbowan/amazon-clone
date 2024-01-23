export const initialState = {
    basket: [
        {
        id:'1234',
          title:'ADIDAS Daily Ii Backpack Unisex',
          price: 510500,
          rating:5,
          image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/0314491/1.jpg?2716'
    },
        {
        id:'1234',
          title:'ADIDAS Daily Ii Backpack Unisex',
          price: 510500,
          rating:5,
          image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/0314491/1.jpg?2716'
    },
],
    user:null
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount,0)

function reducer(state, action){
    console.log(action)
    switch (action.type){
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return{
                ...state,
                basket:[...state.basket, action.item],
            }
        
        case 'REMOVE_FROM_BASKET':
            //logic for removing item from basket
            let newBasket = [...state.basket]

            const index = state.basket.findIndex(
                (basketItem)=> basketItem.id === action.id
            )

            if(index >= 0) {
                newBasket.splice(index,1)
            } else {
                console.warn(
                    `cant remove product (id: ${action.id}) as its not available`
                )
            }
            return{
                ...state,
                basket: newBasket,
            }
        
        default:
            return state;
    }
}

export default reducer;