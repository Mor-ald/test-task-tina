/* eslint-disable react/prop-types */ 

import { Section } from "../util/section";
import ServForm from "../servForm/ServForm";

import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useState } from "react";
import { Dialog } from "primereact/dialog";

import type { RichTextType, TinaTemplate } from "tinacms";



export const Slider = ({ data }) => {
	const [displayForm, setDisplayForm] = useState(false);

	const itemTemplate = (content: {header: string, text: RichTextType}) => {
		return (
			<div className='p-2'> 
				<div className='bg-white p-2 py-4 border-l-4 rounded-md shadow-lg border-orange-600 md:px-12 md:py-6 md:pb-12 md:w-2/4 md:m-auto'>
					<h3 className='my-4 mb-8 font-bold text-3xl text-center'>{content.header}</h3>
					<TinaMarkdown content={content.text} />
				</div>
				<Button label="Консультация" icon="pi pi-calculator" style={{width: "200px", fontWeight: "bold", padding:"0.8rem", background: "#dc4419", margin: "24px auto 0 auto", border: 0, borderRadius: 0, display: "flex", justifyContent: "center", outline: "none"}} onClick={() => setDisplayForm(true)}/>
			</div>

		);
	};

	const content = data.slide.map((slide) => {
		return {header: slide.slideHeader, text: slide.slideText};
	});

	return (
		<Section color={data.color}>
			<Dialog visible={displayForm} onHide={() => setDisplayForm(false)}>
				<p className='font-bold text-2xl text-center'>Консультация</p>
				<div className='w-64 sm:px-0 md:w-80 md:px-4 lg:w-96' >
					<ServForm visibleModel={true} ></ServForm>
				</div>
			</Dialog>
			<div className="relative flex py-4 justify-start flex-col bg-[url('/slider.webp')] xl:py-12">
				<div className="absolute top-0 left-0 bg-black opacity-60" style={{minWidth: "100%", minHeight: "100%"}}></div>
				<Carousel className='' value={content} numVisible={1} numScroll={1} itemTemplate={itemTemplate} autoplayInterval={7000} showIndicators={false} showNavigators={false}></Carousel>
			</div>
		</Section>
	);
};

export const sliderBlockSchema: TinaTemplate = {
	name: "slider",
	label: "Slider",
	ui: {
		previewSrc: "/blocks/content.png",
		defaultItem: {
			body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
		},
	},
	fields: [
		{
			type: "object",
			label: "Slide text",
			name: "slide",
			list: true,
			fields: [
				{
					type: "string",
					label: "Header",
					name: "slideHeader",
				},
				{
					type: "rich-text",
					label: "Content",
					name: "slideText",
				},
			],
		},

		{
			type: "string",
			label: "Color",
			name: "color",
			options: [
				{ label: "Default", value: "default" },
				{ label: "Tint", value: "tint" },
				{ label: "Primary", value: "primary" },
			],
		},
	],
};
