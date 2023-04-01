/* eslint-disable react/react-in-jsx-scope */

import { ServiceGaz4216 } from "../components/serviceGaz4216/serviceGaz4216";

import { render, screen } from "@testing-library/react";
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
    
	it("renders without crashing", () => {
		const component = render(<ServiceGaz4216 {...data} />); 
		expect(component).toMatchSnapshot();
	});

	it("renders header, price and model if it exists", () => {
		render(<ServiceGaz4216 {...data} />);
		
		const header = screen.getByTestId("header");
		const price = screen.getByTestId("price");
		const model = screen.getByTestId("model");

		expect(header).toBeInTheDocument();
		expect(price).toBeInTheDocument();
		expect(model).toBeInTheDocument();
	});
  
	it("renders spec to equal text", () => {
		render(<ServiceGaz4216 {...data} />);
		
		const spec = screen.getByTestId("spec");

		const textEqual = spec.innerHTML === "Специалисты сети автомастерских «АРМ» готовы выполнить любые работы по ремонту вашей ГАЗели и Лада, а также замене любых комплектующих и узлов по качеству не уступающему ремонту у дилера, при сохранении гораздо более привлекательной цены на работу.";
		
		expect(textEqual).toEqual(true);
	});


	it("renders welcome with model and header", () => {
		render(<ServiceGaz4216 {...data} />);
		
		const welcome = screen.getByTestId("welcome");

		const header = welcome.innerHTML.includes(data.serviceGaz4216.header);
		const model = welcome.innerHTML.includes(data.serviceGaz4216.model);

		expect(header).toEqual(true);
		expect(model).toEqual(true);
	});
});