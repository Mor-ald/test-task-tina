/* eslint-disable react/prop-types */

import { Section } from "../util/section";
import { Container } from "../util/container";

import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Button } from "primereact/button";


import type { TinaTemplate } from "tinacms";



export const About = ({ data, parentField = "" }) => {

	return (
		<Section color={data.color} data-tinafield={`${parentField}.body`}>
			<Container
				className={`prose prose-lg ${
					data.color === "primary" ? "prose-primary" : "dark:prose-dark"
				}`}
				data-tinafield={`${parentField}.body`}
				data-testid="containerAbout"
				size="large"
				width="large"
			>
				{!data.aboutItemFirst || 
					<div className="my-12 flex flex-col items-center md:justify-center md:flex-row">
						<div data-testid="firstItemDiv" className="mx-6">
							<TinaMarkdown content={data.aboutItemFirst.text} />
						</div>
						<img data-testid="firstItemImg" className="h-1/2 rounded-md shadow-xl md:mx-12 md:w-1/3 " src={data.aboutItemFirst.image ? data.aboutItemFirst.image.src: ""} aria-hidden="true" alt="firstItem"/>
					</div>
				}
				{!data.aboutItemSecond || 
					<div className="my-12 flex flex-col-reverse items-center md:justify-center md:flex-row">
						<img data-testid="secondItemImg" className="h-1/2 rounded-md shadow-xl md:mx-12 md:w-1/3" src={data.aboutItemSecond.image ? data.aboutItemSecond.image.src:""} aria-hidden="true" alt="secondItem"/>
						<div data-testid="secondItemDiv" className="mx-6">
							<TinaMarkdown content={data.aboutItemSecond.text} />
						</div>
					</div>
				}
				{!data.aboutSert || 
					<div className="my-6 flex flex-col justify-center items-center">
						<p data-testid="aboutSertText" className='my-4 font-bold text-3xl text-center'>{data.aboutSert.header}</p>
						<img data-testid="aboutSertImg" src={data.aboutSert.image ? data.aboutSert.image.src: ""} aria-hidden="true" alt="certificate"/>
					</div>
				}   
				{!data.link || 
					<div className="mt-4 flex justify-center md:mt-24">
						<a className="no-underline" href={data.link} target="_blank" rel="noreferrer">
							<Button label="Договор на оказание услуг" style={{background: "#ea6c45", border: 0, fontWeight: "bold"}}/>
						</a>
					</div>
				} 
			</Container> 
		</Section>
	);
};

export const aboutArmBlockSchema: TinaTemplate = {
	name: "about",
	label: "About",
	ui: {
		previewSrc: "",
		defaultItem: {
			body: "About",
		},
	},
	fields: [
		{
			type: "object",
			label: "First Item",
			name: "aboutItemFirst",
			ui: {
				itemProps: (item) => {
					return { label: item?.serviceHeader };
				},
			},
			fields: [
				{
					type: "rich-text",
					label: "Content",
					name: "text",
				},
				{
					type: "object",
					label: "Image",
					name: "image",
					fields: [
						{
							name: "src",
							label: "Image Source",
							type: "image",
						},
						{
							name: "alt",
							label: "Alt Text",
							type: "string",
						},
					],
				},
			], 
		},

		{
			type: "object",
			label: "Second Item",
			name: "aboutItemSecond",
			ui: {
				itemProps: (item) => {
					return { label: item?.serviceHeader };
				},
			},
			fields: [
				{
					type: "rich-text",
					label: "Content",
					name: "text",
				},
				{
					type: "object",
					label: "Image",
					name: "image",
					fields: [
						{
							name: "src",
							label: "Image Source",
							type: "image",
						},
						{
							name: "alt",
							label: "Alt Text",
							type: "string",
						},
					],
				},
			], 
		},

		{
			type: "object",
			label: "Serteficate Item",
			name: "aboutSert",
			ui: {
				itemProps: (item) => {
					return { label: item?.serviceHeader };
				},
			},
			fields: [
				{
					type: "string",
					label: "Header",
					name: "header",
				},
				{
					type: "object",
					label: "Image",
					name: "image",
					fields: [
						{
							name: "src",
							label: "Image Source",
							type: "image",
						},
						{
							name: "alt",
							label: "Alt Text",
							type: "string",
						},
					],
				},
			], 
		},

		{
			type: "string",
			label: "Link for Document",
			name: "link",
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