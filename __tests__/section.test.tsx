import { Section } from "../components/util/section";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Section", () => {
	it("renders without props", () => {
		const { container } = render(<Section>Test</Section>);
		const section = container.querySelector("section");

		expect(section).toBeInTheDocument();
		expect(section).toHaveClass("text-gray-800");
	});
  
	it("renders with custom color", () => {
		const { container } = render(
			<Section color="tint">Test</Section>
		);
		const section = container.querySelector("section");
		expect(section).toBeInTheDocument();
		expect(section).toHaveClass("text-gray-900");
	});
  
	it("renders with primary color", () => {
		const { container } = render(
			<Section color="primary">Test</Section>
		);
		let include = false;
		const colors = ["bg-blue-500", "bg-teal-500", "bg-green-600", "bg-red-500", "bg-pink-500", "bg-purple-500", "bg-orange-500", "bg-yellow-500"];
		const section = container.querySelector("section");
		section.classList.forEach((item) => {
			if(colors.includes(item)) include = true;
		});

		expect(section).toBeInTheDocument();
		expect(include).toEqual(true);
	});
  
	it("renders with custom class name", () => {
		const { container } = render(
			<Section className="custom-class">Test</Section>
		);
		const section = container.querySelector("section");
		expect(section).toBeInTheDocument();
		expect(section).toHaveClass("custom-class");
	});
});