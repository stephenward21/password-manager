export default function(state = [], action){
    if(action.type === 'REGISTER') {
        console.log(action.payload);
        return action.payload;
        // different action for group to not wipe out user info
    }else{
        return state;
    }
}
