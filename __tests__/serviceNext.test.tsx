import { ServiceNext } from "../components/serviceNext/serviceNext";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ServiceNext component", () => {
	const data = {
		serviceNext: {
			header: "Test Header",
			time: "1,5",
			coef: "1000",
			model: "Test Model",
		},
	};
    
	it("renders without crashing", () => {
		const component = render(<ServiceNext {...data} />); 
		expect(component).toMatchSnapshot();
	});

	it("renders header, price and model if it exists", () => {
		render(<ServiceNext {...data} />);
		
		const header = screen.getByTestId("header");
		const price = screen.getByTestId("price");
		const model = screen.getByTestId("model");

		expect(header).toBeInTheDocument();
		expect(price).toBeInTheDocument();
		expect(model).toBeInTheDocument();
	});
  
	it("renders spec to equal text", () => {
		render(<ServiceNext {...data} />);
		
		const spec = screen.getByTestId("spec");

		const textEqual = spec.innerHTML === "Специалисты сети автомастерских «АРМ» готовы выполнить любые работы по ремонту вашей ГАЗели и Лада, а также замене любых комплектующих и узлов по качеству не уступающему ремонту у дилера, при сохранении гораздо более привлекательной цены на работу.";
		
		expect(textEqual).toEqual(true);
	});


	it("renders welcome with model and header", () => {
		render(<ServiceNext {...data} />);
		
		const welcome = screen.getByTestId("welcome");

		const header = welcome.innerHTML.includes(data.serviceNext.header);
		const model = welcome.innerHTML.includes(data.serviceNext.model);

		expect(header).toEqual(true);
		expect(model).toEqual(true);
	});
});