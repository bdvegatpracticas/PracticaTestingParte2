import React from "react";
import Enzyme, {mount} from "enzyme";
 import loadingIndicator from "./LoadingIndicator";
 import Adapter from "enzyme-adapter-reat-16";

Enzyme.configure({ adapter: new Adapter()});

describe("LoadingIndicator", () =>{
    describe("Cuando isLoading es falso",() => {
        it("Deberia renderizar los hijos",() => {
            const wrapper = mount(
                <loadingIndicator isLoading={false}>
                    <div>Hola</div>
                </loadingIndicator>
            );
            expect(wrapper.html()).toEqual("<div> Hola</div>");
        });
    });
});