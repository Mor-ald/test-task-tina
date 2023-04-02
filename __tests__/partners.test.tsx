/* eslint-disable react/react-in-jsx-scope */
import { Partners } from "../components/blocks/parthners";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ListLinks component", () => {
	const data = {
		parthner: [
			{ partImg: "image1" },
			{ partImg: "image2" },
			{ partImg: "image3" },
		],
		textPart: "Our partners",
	};
    
	it("renders partners section", () => {
		const { container } = render(<Partners data={data} />);
		const partnersSection = container.querySelector("section");
		expect(partnersSection).toBeInTheDocument();
	});
    
	it("renders partner images", () => {
		render(<Partners data={data} />);
		const partnerImages = screen.getAllByAltText("part");
		expect(partnerImages);
	});
    
	it("renders partner text", () => {
		render(<Partners data={data} />);
		const partnerText = screen.getByText("Our partners");
		expect(partnerText).toBeInTheDocument();
	});
    
});