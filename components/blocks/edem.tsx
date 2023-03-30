/* eslint-disable react/prop-types */ 
import { Section } from "../util/section";

import { Button } from "primereact/button";
import React from "react";

import type { TinaTemplate } from "tinacms";

export const Edem = ({ data }) => {

	return (
		<Section>
			<div className="relative py-24 flex flex-col justify-center items-center text-center text-white opacity-85" style={{background: "#121212"}}>
				<p className="my-4 font-bold text-xl md:text-2xl">Наш партнёр</p>
				<p className="font-bold text-2xl md:text-4xl">Учебный центр &quot;ЭДЕМ&quot;</p>
				<p className="my-4 font-bold text-xl">Приглашает на курсы</p>
				<p className="my-2 underline">Профподготовки и повышения квалификации
с последующим <b>трудоустройством</b></p>
				<p className="my-2 font-bold text-orange-200">Автомаляр • Кузовщик-(сварщик) • Автослесарь • Автоэлектрик-диагност • Дизелист-диагност</p>
				<p className="my-2 text-xs text-gray-300">Занятия проводят специалисты-практики на действующих станциях партнеров</p>
				<a className="mt-6" href={data.edemLink}>
					<Button label="Подробнее" style={{background: "#ea6c45", border: 0, fontWeight: "bold"}} />
				</a>
			</div>
		</Section>
	);
};

export const edemArmBlockSchema: TinaTemplate = {
	name: "edem",
	label: "Edem",
	ui: {
		previewSrc: "",
		defaultItem: {
			body: "Edem",
		},
	},
	fields: [
		{
			type: "string",
			label: "Edem Link",
			name: "edemLink",
		},
	],
};