/* eslint-disable react/prop-types */ 

import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Icon , iconSchema } from "../util/icon";

import React from "react";

export const Feature = ({ featuresColor, data, tinaField }) => {
	return (
		<div
			data-tinafield={tinaField}
			className="flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl p-12 bg-white m-12 shadow-xl"
			style={{ flexBasis: "16rem", minWidth: "320px", minHeight: "500px" }}
		>
			{data.icon && (
				<Icon
					tinaField={`${tinaField}.icon`}
					parentColor={featuresColor}
					data={{ size: "large", ...data.icon }}
				/>
			)}
			{data.title && (
				<h3
					data-tinafield={`${tinaField}.title`}
					className="text-2xl font-semibold title-font"
				>
					{data.title}
				</h3>
			)}
			{data.text && (
				<p
					data-tinafield={`${tinaField}.text`}
					className="text-base opacity-80 leading-relaxed"
				>
					{data.text}
				</p>
			)}
			{data.actions && <Actions actions={data.actions} />}
		</div>
	);
};

export const Features = ({ data, parentField }) => {
	return (
		<Section color={data.color} className="py-24">
			<div className="text-center">
				<h3 className='mb-2 font-bold text-3xl'>{data.header}</h3>
				<p className="font-bold mb-2">{data.headerText}</p>
			</div>
			<div className="w-2/3 mx-auto flex flex-wrap justify-center items-center">
				{data.items &&
            data.items.map(function (block, i) {
            	return (
            		<Feature
            			tinaField={`${parentField}.items.${i}`}
            			featuresColor={data.color}
            			key={i}
            			data={block}
            		/>
            	);
            })}
			</div>

		</Section>
	);
};

const defaultFeature = {
	title: "Here's Another Feature",
	text: "This is where you might talk about the feature, if this wasn't just filler text.",
	icon: {
		color: "",
		style: "float",
		name: "",
	},
};

export const featureBlockSchema = {
	name: "features",
	label: "Features",
	ui: {
		previewSrc: "/blocks/features.png",
		defaultItem: {
			items: [defaultFeature, defaultFeature, defaultFeature],
		},
	},
	fields: [
		{
			type: "string",
			label: "Header",
			name: "header",
		},
		{
			type: "string",
			label: "Text",
			name: "headerText",
		},
		{
			type: "object",
			label: "Feature Items",
			name: "items",
			list: true,
			ui: {
				itemProps: (item) => {
					return {
						label: item?.title,
					};
				},
				defaultItem: {
					...defaultFeature,
				},
			},
			fields: [
				iconSchema,
				{
					type: "string",
					label: "Title",
					name: "title",
				},
				{
					type: "string",
					label: "Text",
					name: "text",
					ui: {
						component: "textarea",
					},
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
