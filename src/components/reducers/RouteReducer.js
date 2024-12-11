export default function RouteReducer(state="Home",action){
    switch(action.type){ //categort
        case "page":
            state = action.data;//which page 
            return state
        default:
            return state
    }
}
//export {fun1,fun3}
//action is a dictionary it will have flower braces
//action = {"type":"page","data":"Signin"}