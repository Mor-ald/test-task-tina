/* eslint-disable react/react-in-jsx-scope */

import ServForm from "../components/servForm/ServForm";

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Service Form", () => {
	const mockForm = {
		visibleModel: true,
		serv: "Oil change",
		model: "Toyota Camry"
	  };
	  
	  it("renders without crashing", () => {
		const { getByText } = render(<ServForm {...mockForm} />);
		expect(getByText("Имя")).toBeInTheDocument();
	  });
	  
	  it("submits form data", async () => {
		const moskSubmitForm = {
			visibleModel: false,
			serv: "Измерение давления масла",
			model: "ЛАДА",
		};

		const { getByText } = render(<ServForm {...moskSubmitForm} />);
		const nameInput = screen.getByTestId("nameUser");
		const phoneInput = screen.getByTestId("nameUser");
		const agreementCheckbox = screen.getByTestId("agreement"); 
		const submitButton = getByText("Отправить");
		const form = screen.getByTestId("servForm") as HTMLFormElement;
		
		fireEvent.change(nameInput, { target: { value: "Alex" } });
		fireEvent.change(phoneInput, { target: { value: "+7(999) 123-45-67" } });
		fireEvent.click(agreementCheckbox);
		fireEvent.click(submitButton);
		fireEvent.submit(form);
	  });
	  	
});