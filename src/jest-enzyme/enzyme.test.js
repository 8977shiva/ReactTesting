import { shallow, mount } from "enzyme";
import List from "../List";
// import renderer from "react-test-renderer";
import Todo from "../todo";

function shallowRender(component) {
  const wrapper = shallow(component);
  return wrapper;
}

it("Enzyme check", () => {
  const wrapper = shallow(<Todo />);
  expect(wrapper.find("h3").text()).toBe("TODO");
});

it("render check for list component", () => {
  const items = ["cake", "pens", "Book"];
  const wrapper = shallowRender(<List item={items} />);
  expect(wrapper.find(".list-wrapper")).toBeDefined();
  expect(wrapper.find(".item")).toHaveLength(items.length)

});
// redux + mount testing

