import { ListLinks } from "../components/blocks/listLinks";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ListLinks component", () => {
	const data = {
		links: [
			{ linkName: "Link 1", link: "https://example.com/link1" },
			{ linkName: "Link 2", link: "https://example.com/link2" },
		],
		color: "blue",
		header: "Links",
	};
    
	it("renders without crashing", () => {
		render(<ListLinks data={data} />);
	});
    
	it("renders links correctly", () => {
		const { getByText } = render(<ListLinks data={data} />);
		expect(getByText("Link 1")).toHaveAttribute("href", "https://example.com/link1");
		expect(getByText("Link 2")).toHaveAttribute("href", "https://example.com/link2");
	});
    
	it("renders header correctly", () => {
		const { getByText } = render(<ListLinks data={data} />);
		expect(getByText("Links")).toBeInTheDocument();
	});
    
	it("renders filter correctly", () => {
		const { getByPlaceholderText } = render(<ListLinks data={data} />);
		expect(getByPlaceholderText("Поиск...")).toBeInTheDocument();
	});
    
});
