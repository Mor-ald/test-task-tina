/* eslint-disable react/prop-types */ 

import { Section } from "../util/section";

import { Button } from "primereact/button";
import { Galleria } from "primereact/galleria";
import { classNames } from "primereact/utils";
import { useEffect, useRef, useState } from "react";

import type { TinaTemplate } from "tinacms";

export const PhotosGallery = ({ data }) => {

	const [images, setImages] = useState(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [showThumbnails, setShowThumbnails] = useState(false);
	const [isAutoPlayActive, setAutoPlayActive] = useState(true);
	const galleria = useRef(null);

	useEffect(() => {
		const images = data.images ? data.images.map(img => {
			return {src: img.imgSrc};
		}):[];
		setImages(images);
	},[data.images]);

	const responsiveOptions = [
		{
			breakpoint: "1024px",
			numVisible: 7
		},
		{
			breakpoint: "960px",
			numVisible: 5
		},
		{
			breakpoint: "768px",
			numVisible: 2
		},
		{
			breakpoint: "560px",
			numVisible: 1
		}
	];

	useEffect(() => {
		setAutoPlayActive(galleria.current.isAutoPlayActive());
	},[isAutoPlayActive]);

	const onItemChange = (event) => {
		setActiveIndex(event.index);
	};


	const itemTemplate = (item) => {
		return <img src={item.src} className="h-64 block md:h-128" alt=""/>;
	};

	const thumbnailTemplate = (item) => {
		return (
			<div className="grid grid-nogutter justify-content-center">
				<img src={item.src} className="mx-4 h-28 w-28" alt=""/>
			</div>
		);
	};

	const renderFooter = () => {
		const autoPlayClassName = classNames("pi", {
			"pi-play": !isAutoPlayActive,
			"pi-pause": isAutoPlayActive
		});

		return (
			<div className="px-4 flex items-center justify-between" style={{backgroundColor: "rgba(0, 0, 0, .9)", color: "#fff"}}>
				<div className='flex items-center'>
					<div className='hidden lg:block'>
						<Button icon="pi pi-list" onClick={() => setShowThumbnails(prevState => !prevState)} style={{marginLeft: "4px", backgroundColor: "transparent", color: "#fff", border: "0 none", borderRadius: 0, margin: "0.2rem 0", outline: "none"}}/>
					</div>
					<Button icon={autoPlayClassName} style={{marginLeft: "4px", backgroundColor: "transparent", color: "#fff", border: "0 none", borderRadius: 0, margin: "0.2rem 0"}} onClick={() => {
						if (!isAutoPlayActive) {
							galleria.current.startSlideShow();
							setAutoPlayActive(true);
						}
						else {
							galleria.current.stopSlideShow();
							setAutoPlayActive(false);
						}
					}} />
					{
						images && (
							<span className="ml-4">
								<span className='font-bold text-xs'>{activeIndex + 1}/{images.length}</span>
							</span>
						)
					}
				</div>
        
			</div>
		);
	};

	const footer = renderFooter();

	return (
		<Section color={data.color}>
			<div className='w-11/12 my-12 mb-24 mx-auto flex flex-col justify-center items-center md:w-2/3'>
				<p className='my-8 font-bold text-3xl'>Фотографии</p>
				<Galleria ref={galleria} value={images} activeIndex={activeIndex} onItemChange={onItemChange}
					showThumbnails={showThumbnails} showItemNavigatorsOnHover
					numVisible={5} circular autoPlay transitionInterval={2000} responsiveOptions={responsiveOptions}
					item={itemTemplate} thumbnail={thumbnailTemplate} footer={footer}/>
			</div>
		</Section>
	);
};



export const photosGalleryBlockSchema: TinaTemplate = {
	name: "photosGallery",
	label: "Photos Gallery",
	ui: {
		defaultItem: {
			body: "Photos Gallery",
		},
	},
	fields: [
		{
			type: "object",
			label: "Images",
			name: "images",
			ui: {
				itemProps: (item) => {
					return { label: item?.imgSrc };
				},
			},
			list: true,
			fields: [
				{
					type: "string",
					label: "Image src",
					name: "imgSrc",
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
