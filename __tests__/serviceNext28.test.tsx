/* eslint-disable react/react-in-jsx-scope */

import { ServiceNext28 } from "../components/serviceNext28/serviceNext28";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ServiceNext28 component", () => {
	const data = {
		serviceNext28: {
			header: "Test Header",
			time: "1,5",
			coef: "1000",
			model: "Test Model",
		},
	};
    
	it("renders without crashing", () => {
		const component = render(<ServiceNext28 {...data} />); 
		expect(component).toMatchSnapshot();
	});

	it("renders header, price and model if it exists", () => {
		render(<ServiceNext28 {...data} />);
		
		const header = screen.getByTestId("header");
		const price = screen.getByTestId("price");
		const model = screen.getByTestId("model");

		expect(header).toBeInTheDocument();
		expect(price).toBeInTheDocument();
		expect(model).toBeInTheDocument();
	});
  
	it("renders spec to equal text", () => {
		render(<ServiceNext28 {...data} />);
		
		const spec = screen.getByTestId("spec");

		const textEqual = spec.innerHTML === "Специалисты сети автомастерских «АРМ» готовы выполнить любые работы по ремонту вашей ГАЗели и Лада, а также замене любых комплектующих и узлов по качеству не уступающему ремонту у дилера, при сохранении гораздо более привлекательной цены на работу.";
		
		expect(textEqual).toEqual(true);
	});


	it("renders welcome with model and header", () => {
		render(<ServiceNext28 {...data} />);
		
		const welcome = screen.getByTestId("welcome");

		const header = welcome.innerHTML.includes(data.serviceNext28.header);
		const model = welcome.innerHTML.includes(data.serviceNext28.model);

		expect(header).toEqual(true);
		expect(model).toEqual(true);
	});
});