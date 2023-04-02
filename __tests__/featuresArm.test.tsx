import { FeaturesArm } from "../components/blocks/featuresArm";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("FeaturesArm component", () => {
	const data = {
		header: "Test Header",
		headerText: "Test Header Text",
		featArm: [
			{
				featImg: "test-image.jpg",
				featHeader: "Test Feature Header",
				featText: "Test Feature Text"
			},
			{
				featImg: "test-image-2.jpg",
				featHeader: "Test Feature Header 2",
				featText: "Test Feature Text 2"
			}
		]
	};
  
	it("renders the component with correct data", () => {
		const { getByText, getAllByAltText } = render(<FeaturesArm data={data} />);
		expect(getByText("Test Header")).toBeInTheDocument();
		expect(getByText("Test Header Text")).toBeInTheDocument();
		expect(getAllByAltText("")).toHaveLength(2);
		expect(getByText("Test Feature Header")).toBeInTheDocument();
		expect(getByText("Test Feature Text")).toBeInTheDocument();
		expect(getByText("Test Feature Header 2")).toBeInTheDocument();
		expect(getByText("Test Feature Text 2")).toBeInTheDocument();
	});
  
	it("renders the component without crashing", () => {
		render(<FeaturesArm data={data} />);
	});
});