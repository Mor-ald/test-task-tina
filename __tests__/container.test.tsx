/* eslint-disable react/react-in-jsx-scope */

import { Container } from "../components/util/container";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Container component", () => {
	it("renders children", () => {
		const { getByText } = render(<Container>Test</Container>);
		expect(getByText("Test")).toBeInTheDocument();
	});
  
	it("applies default padding and width classes if no props are passed", () => {
		const { getByTestId } = render(<Container data-testid="container">Test</Container>);
		expect(getByTestId("container")).toHaveClass("max-w-7xl py-12");
	});
  
	it("applies custom padding class if size prop is 'custom'", () => {
		const { getByTestId } = render(
			<Container data-testid="container" size="custom">Test</Container>
		);
		expect(getByTestId("container")).toHaveClass("max-w-7xl mx-auto px-6 sm:px-8");
	});
  
	it("applies custom width class if width prop is 'custom'", () => {
		const { getByTestId } = render(
			<Container data-testid="container" width="custom">Test</Container>
		);
		expect(getByTestId("container")).toHaveClass("mx-auto px-6 sm:px-8 py-12");
	});
  
	it("applies correct padding and width classes based on props", () => {
		const { getByTestId } = render(
			<Container data-testid="container" size="large" width="small">Test</Container>
		);
		expect(getByTestId("container")).toHaveClass("max-w-4xl py-24");
	});
  
	it("applies additional className prop", () => {
		const { getByTestId } = render(
			<Container data-testid="container" className="test-class">Test</Container>
		);
		expect(getByTestId("container")).toHaveClass("test-class");
	});
});