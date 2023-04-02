import { Actions } from "../components/util/actions";

import { render } from "@testing-library/react";

describe("Actions component", () => {
	const actions = [
		{
			type: "button",
			label: "Button 1",
			link: "/button1",
			icon: true,
		},
		{
			type: "link",
			label: "Link 1",
			link: "/link1",
			icon: false,
		},
	];
  
	it("renders correctly with default props", () => {
		const { container } = render(<Actions actions={actions} />);
		const buttonText = container.querySelector("button").textContent;
		const linkText = container.querySelector("a").textContent;

		expect(buttonText).toEqual("Button 1");
		expect(linkText).toEqual("Link 1");
	});
  
	it("renders correctly with custom props", () => {
		const { container } = render(
			<Actions
				parentColor="primary"
				parentField="testField"
				className="testClass"
				actions={actions}
			/>
		);

		const buttonText = container.querySelector("button").textContent;
		const linkText = container.querySelector("a").textContent;

		expect(buttonText).toEqual("Button 1");
		expect(linkText).toEqual("Link 1");
	});
});