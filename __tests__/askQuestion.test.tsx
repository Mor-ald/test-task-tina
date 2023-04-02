import { AskQuestion } from "../components/blocks/askQuestion";

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("AskQuestion component", () => {
	it("renders AskQuestion component without crashing", () => {
		render(<AskQuestion data={{phone: "123-456-7890"}} />);
	});
      
	it("check the phone number href", () => {
		const data = { phone: "123-456-7890" };
		render(<AskQuestion data={data} />);
		const phoneLink = screen.getByText(data.phone) as HTMLAnchorElement;
		expect(phoneLink.href).toEqual(`tel:${data.phone}`);
	});
      
	it("clicking button opens the form", () => {
		const data = { phone: "123-456-7890" };
		render(<AskQuestion data={data} />);
		const formButton = screen.getByText("Заполнить форму");
		fireEvent.click(formButton);
		const form = screen.getByText("Заполните форму");
		expect(form).toBeInTheDocument();      
	});
      
	it("displays the correct heading", () => {
		const data = { phone: "123-456-7890" };
		render(<AskQuestion data={data} />);
		const heading = screen.getByText("Задайте");
		expect(heading).toBeInTheDocument();
	});
  
	it("displays the correct subheading", () => {
		const data = { phone: "123-456-7890" };
		render(<AskQuestion data={data} />);
		const subheading = screen.getByText("ваш вопрос");
		expect(subheading).toBeInTheDocument();
	});
      
	it("displays the correct phone number", () => {
		const data = { phone: "123-456-7890" };
		render(<AskQuestion data={data} />);
		const phoneLink = screen.getByText(data.phone);
		expect(phoneLink).toBeInTheDocument();
	});

	it("displays the correct form", () => {
		const data = { phone: "123-456-7890" };
		render(<AskQuestion data={data} />);
		const formButton = screen.getByText("Заполнить форму");
		fireEvent.click(formButton);
		const form = screen.getByText("Заполните форму");
		expect(form).toBeInTheDocument();
	});
      
});