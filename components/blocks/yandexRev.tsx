/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/prop-types */ 

import { Section } from "../util/section";

import type { TinaTemplate } from "tinacms";

export const YandexRev = ({ data }) => {

	return (
		<Section>
			<div className="flex flex-col justify-center items-center py-24">
				<div>
					<p className='mb-8 font-bold text-3xl text-center'>{data.yandexRevHeader}</p>
				</div>
				<div className="w-11/12 md:w-2/3" style={{maxWidth: "560px", height: "800px", overflow: "hidden", position: "relative"}}>
					<iframe style={{width: "100%", height: "100%", border: "1px solid #e6e6e6", borderRadius:"8px", boxSizing: "border-box"}} src="https://yandex.ru/maps-reviews-widget/178429639262?comments"></iframe>
					<a href="https://yandex.ru/maps/org/arm/178429639262/" target="_blank" style={{boxSizing: "border-box", textDecoration: "none", color: "#b3b3b3", fontSize: "10px", fontFamily: "YS Text,sans-serif", padding: "0 16px", position: "absolute", bottom: "8px", width: "100%", textAlign: "center", left: "0", overflow:"hidden", textOverflow: "ellipsis", display: "block", maxHeight: "14px", whiteSpace: "nowrap"}} rel="noreferrer">Арм на карте Санкт‑Петербурга — Яндекс Карты</a>
				</div>
			</div>
		</Section>
	);
};

export const yandexRevBlockSchema: TinaTemplate = {
	name: "yandexRev",
	label: "YandexRev",
	ui: {
		previewSrc: "",
		defaultItem: {
			body: "YandexRev",
		},
	},
	fields: [
		{
			type: "string",
			label: "YandexRev Header",
			name: "yandexRevHeader",
		},
	],
};