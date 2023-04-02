/* eslint-disable react/react-in-jsx-scope */
import { About } from "../components/blocks/about";

import { render, screen, fireEvent } from "@testing-library/react";

describe("About component", () => {
	const data = {
		color: "primary",
		aboutItemFirst: {
			text: "First item text",
			image: {
				src: "https://example.com/image1.jpg",
			},
		},
		aboutItemSecond: {
			text: "Second item text",
			image: {
				src: "https://example.com/image2.jpg",
			},
		},
		aboutSert: {
			header: "Certificate header",
			image: {
				src: "https://example.com/certificate.jpg",
			},
		},
		link: "https://example.com",
	};

	it("renders firstItem element when data is provided", () => {
		render(<About data={data} />);
		
		const firstDiv = screen.getByTestId("firstItemDiv");
		const firstImg = screen.getByTestId("firstItemImg") as HTMLImageElement;

		expect(firstDiv);
		expect(firstImg.src).toEqual(data.aboutItemFirst.image.src);
	});

	it("renders secondItem element when data is provided", () => {
		render(<About data={data} />);
		
		const secondDiv = screen.getByTestId("secondItemDiv");
		const secondImg = screen.getByTestId("secondItemImg") as HTMLImageElement;

		expect(secondDiv);
		expect(secondImg.src).toEqual(data.aboutItemSecond.image.src);
	});

	it("renders aboutSert element when data is provided", () => {
		render(<About data={data} />);
		
		const aboutSertText = screen.getByTestId("aboutSertText");
		const aboutSertImg = screen.getByTestId("aboutSertImg") as HTMLImageElement;

		expect(aboutSertText.textContent).toEqual(data.aboutSert.header);
		expect(aboutSertImg.src).toEqual(data.aboutSert.image.src);
	});

	it("renders button element when data is provided", () => {
		const { getByText } = render(<About data={data} />);
		
		const button = getByText("Договор на оказание услуг");

		fireEvent.click(button);
	});
    
	it("renders no elements when all data is missing", () => {
		render(<About data={{}} />);

		const containerAbout = screen.getByTestId("containerAbout");

		expect(containerAbout.innerHTML).toEqual("");
	});
    
});