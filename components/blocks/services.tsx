/* eslint-disable react/prop-types */ 

import { Section } from "../util/section";
import ServForm from "../servForm/ServForm";

import { Button } from "primereact/button";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Link from "next/link";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";

import type { TinaTemplate } from "tinacms";


export const Services = ({ data }) => {
	const [displayForm, setDisplayForm] = useState(false);

	const serviceItemTemplate = (content) => {
		return (
			<div className='p-6'> 
				<div className='' style={{width: "300px"}}>
					<img className='rounded-t-lg' src={`${content.serviceImg}`} style={{maxHeight: "125px", minWidth: "300px"}} alt="servicePhoto"></img>
					<div className='rounded-b-lg p-4 shadow-2xl flex flex-col justify-between' style={{minHeight: "350px"}}>
						<div className='px-4 pt-4'>
							<h3 className='mb-4 font-bold text-1xl'>{content.serviceHeader}</h3>
							<div className='text-xs'>
								<TinaMarkdown content={content.serviceText} />
							</div>
						</div>
						<Button label="Консультация" icon="pi pi-calculator" style={{width: "180px", background: "#dc4419", margin: "1.5rem auto", border: 0, borderRadius: 0, display: "flex", justifyContent: "center", outline: "none"}} onClick={() => setDisplayForm(true)}/>
					</div>
				</div>
			</div>
		);
	};

	return (
		<Section className='mb-16' color={data.color}>
			<Dialog visible={displayForm} onHide={() => setDisplayForm(false)}>
				<p className='font-bold text-2xl text-center'>Консультация</p>
				<div className='w-64 sm:px-0 md:w-80 md:px-4 lg:w-96' >
					<ServForm visibleModel={true} ></ServForm>
				</div>
			</Dialog>
			<div className="w-2/3 my-12 mx-auto flex justify-center items-center flex-wrap">
				{data.service && data.service.map((service) => { return serviceItemTemplate(service); })}
			</div>
        
			<Link href={"/service"} passHref>
				<div className='p-4 w-40 transition delay-250 flex justify-center mx-auto cursor-pointer bg-white border-gray-900 border font-bold text-gray-900 hover:bg-gray-900 hover:text-white'>
                    Все услуги
				</div>
			</Link>

		</Section>
	);
};

export const servicesBlockSchema: TinaTemplate = {
	name: "services",
	label: "Services",
	ui: {
		previewSrc: "",
		defaultItem: {
			body: "Services",
		},
	},
	fields: [
		{
			type: "object",
			label: "Service",
			name: "service",
			list: true,
			ui: {
				itemProps: (item) => {
					return { label: item?.serviceHeader };
				},
			},
			fields: [
				{
					type: "string",
					label: "Header",
					name: "serviceHeader",
				},
				{
					type: "string",
					label: "Name of Image",
					name: "serviceImg",
				},
				{
					type: "rich-text",
					label: "Content",
					name: "serviceText",
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