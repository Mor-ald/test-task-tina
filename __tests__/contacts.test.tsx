/* eslint-disable react/react-in-jsx-scope */
import { Contacts } from "../components/blocks/contacts";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contacts component", () => {
	const data = {
		color: "red",
		header: "Contacts",
		contact: [
			{
				header: "Address 1",
				time: "8:00 - 20:00",
				address: "улица Тестовая",
				addressLink: "https://google.com/maps",
				phones: [{ phone: "123-456-7890" }, { phone: "987-654-3210" }],
				emails: [{ email: "email1@example.com" }, { email: "email2@example.com" }],
			},
			{
				header: "Address 2",
				time: "10:00 - 22:00",
				address: "Jest street",
				addressLink: "https://google.com/maps",
				phones: [{ phone: "111-222-3333" }, { phone: "444-555-6666" }],
				emails: [{ email: "email3@example.com" }, { email: "email4@example.com" }],
			},
		],
	};

    
	it("renders header if data.header exists", () => {
		const { getByText } = render(<Contacts data={data} />);
		expect(getByText("Contacts")).toBeInTheDocument();
	});
    
	it("renders contact information if data.contact exists", () => {
		const { getByText } = render(<Contacts data={data} />);
		expect(getByText("Address 1")).toBeInTheDocument();
		expect(getByText("123-456-7890")).toBeInTheDocument();
		expect(getByText("email1@example.com")).toBeInTheDocument();
	});
    
	it("renders social media links", () => {
		const { getByText } = render(<Contacts data={data} />);
		expect(getByText("Вконтакте")).toBeInTheDocument();
	});
    
	it("renders social media links", () => {
		const { getByText } = render(<Contacts data={data} />);
		expect(getByText("Вконтакте")).toBeInTheDocument();
		expect(getByText("Instagram")).toBeInTheDocument();
		expect(getByText("WhatsApp")).toBeInTheDocument();
	});
    
	it("renders prices button", () => {
		const { getByText } = render(<Contacts data={data} />);
		expect(getByText("Прайс-листы")).toBeInTheDocument();
	});
    
});