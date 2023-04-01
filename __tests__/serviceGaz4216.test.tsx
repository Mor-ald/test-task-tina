/* eslint-disable react/react-in-jsx-scope */

import { ServiceGaz4216 } from "../components/serviceGaz4216/serviceGaz4216";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ServiceGaz4216 component", () => {
	const data = {
		serviceGaz4216: {
			header: "Test Header",
			time: "1,5",
			coef: "1000",
			model: "Test Model",
		},
	};

	const component = render(<ServiceGaz4216 {...data} />); 
    
	it("renders without crashing", () => {
		render(<ServiceGaz4216 {...data} />);
		expect(component).toMatchSnapshot();
	});
  

});