/* eslint-disable react/react-in-jsx-scope */
import { Edem } from "../components/blocks/edem";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Edem component", () => {
	const data = {
		edemLink: "https://example.com",
	};
  
	it("renders the component with the correct text", () => {
		render(<Edem data={data} />);
		expect(screen.getByText("Наш партнёр")).toBeInTheDocument();
		expect(screen.getByText("Учебный центр «ЭДЕМ»")).toBeInTheDocument();
		expect(screen.getByText("Приглашает на курсы")).toBeInTheDocument();
		expect(screen.getByText("Профподготовки и повышения квалификации с последующим")).toBeInTheDocument();
		expect(screen.getByText("Автомаляр • Кузовщик-(сварщик) • Автослесарь • Автоэлектрик-диагност • Дизелист-диагност")).toBeInTheDocument();
		expect(screen.getByText("Занятия проводят специалисты-практики на действующих станциях партнеров")).toBeInTheDocument();
		expect(screen.getByText("Подробнее")).toBeInTheDocument();
	});
  
	it("renders the component with the correct link", () => {
		render(<Edem data={data} />);
		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("href", data.edemLink);
	});
});
