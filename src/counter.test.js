import {  mount } from "enzyme";
import {createStore} from "redux";
import counterReducer from "./redux/counterReducer";
import {Provider} from "react-redux";
import Counter from "./redux/Counter";



const store=createStore(counterReducer)
const wrapper=mount(<Provider store={store}><Counter/></Provider>)

it(" check flow  redux",()=>{
     expect(wrapper.find("#display-count").text()).toBe("0")
})
