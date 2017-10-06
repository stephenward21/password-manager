export default function(state = [], action){
    if(action.type === 'REGISTER') {
        console.log(action.payload);
        return action.payload;
    }else{
        return state;
    }
}
