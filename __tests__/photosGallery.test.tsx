/* eslint-disable react/react-in-jsx-scope */
import { PhotosGallery } from "../components/blocks/photosGallery";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("PhotosGallery component", () => {
	const data = {
		images: [
			{ imgSrc: "https://example.com/image1.jpg" },
			{ imgSrc: "https://example.com/image2.jpg" },
			{ imgSrc: "https://example.com/image3.jpg" },
		],
		color: "red",
	};
    
	it("renders correctly", () => {
		const { getByText, getByAltText } = render(<PhotosGallery data={data} />);
		expect(getByText("Фотографии")).toBeInTheDocument();
		expect(getByAltText("")).toBeInTheDocument();
	});
    
});