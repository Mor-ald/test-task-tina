import { Content } from "./blocks/content";
import { Features } from "./blocks/features";
import { FeaturesArm } from "./blocks/featuresArm";
import { Hero } from "./blocks/hero";
import { Services } from "./blocks/services";
import { Slider } from "./blocks/slider";
import { Testimonial } from "./blocks/testimonial";
import { AskQuestion } from "./blocks/askQuestion";
import { Partners } from "./blocks/parthners";
import { Edem } from "./blocks/edem";
import { YandexRev } from "./blocks/yandexRev";
import { About } from "./blocks/about";
import { Vacancies } from "./blocks/vacancies";
import { Contacts } from "./blocks/contacts";
import { ListLinks } from "./blocks/listLinks";
import { PriceTable } from "./blocks/priceTable";
import { PhotosGallery } from "./blocks/photosGallery";
import { ServTemplate } from "./blocks/servTemplate";

import React from "react";

import type { Page } from "../.tina/__generated__/types";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
	return (
		<>
			{props.blocks
				? props.blocks.map(function (block, i) {
					switch (block.__typename) {
					case "PageBlocksContent":
						return (
							<div
								data-tinafield={`blocks.${i}`}
								key={i + block.__typename}
							>
								<Content data={block} parentField={`blocks.${i}`} />
							</div>
						);
					case "PageBlocksHero":
						return (
							<div
								data-tinafield={`blocks.${i}`}
								key={i + block.__typename}
							>
								<Hero data={block} parentField={`blocks.${i}`} />
							</div>
						);
					case "PageBlocksFeatures":
						return (
							<div
								data-tinafield={`blocks.${i}`}
								key={i + block.__typename}
							>
								<Features data={block} parentField={`blocks.${i}`} />
							</div>
						);
					case "PageBlocksTestimonial":
						return (
							<div
								data-tinafield={`blocks.${i}`}
								key={i + block.__typename}
							>
								<Testimonial data={block} parentField={`blocks.${i}`} />
							</div>
						);
					case "PageBlocksSlider":
						return (
							<div
								data-tinafield={`blocks.${i}`}
								key={i + block.__typename}
							>
								<Slider data={block} />
							</div>
						);  
					case "PageBlocksServices":
						return (
							<div
								data-tinafield={`blocks.${i}`}
								key={i + block.__typename}
							>
								<Services data={block} />
							</div>
						); 
					case "PageBlocksFeaturesArm":
						return (
							<div
								data-tinafield={`blocks.${i}`}
								key={i + block.__typename}
							>
								<FeaturesArm data={block}/>
							</div>
						); 
					case "PageBlocksAskQuestion":
						return (
							<div
								data-tinafield={`blocks.${i}`}
								key={i + block.__typename}
							>
								<AskQuestion data={block}/>
							</div>
						); 
					case "PageBlocksPartners":
						return (
							<div
								data-tinafield={`blocks.${i}`}
								key={i + block.__typename}
							>
								<Partners data={block}/>
							</div>
						);
					case "PageBlocksEdem":
						return (
							<div
								data-tinafield={`blocks.${i}`}
								key={i + block.__typename}
							>
								<Edem data={block} />
							</div>
						);
					case "PageBlocksYandexRev":
						return (
							<div
								data-tinafield={`blocks.${i}`}
								key={i + block.__typename}
							>
								<YandexRev data={block} />
							</div>
						);       
					case "PageBlocksAbout":
						return (
							<div
								data-tinafield={`blocks.${i}`}
								key={i + block.__typename}
							>
								<About data={block} parentField={`blocks.${i}`} />
							</div>
						);   
					case "PageBlocksVacancies":
						return (
							<div
								data-tinafield={`blocks.${i}`}
								key={i + block.__typename}
							>
								<Vacancies data={block} parentField={`blocks.${i}`} />
							</div>
						); 
					case "PageBlocksContacts":
						return (
							<div
								data-tinafield={`blocks.${i}`}
								key={i + block.__typename}
							>
								<Contacts data={block} parentField={`blocks.${i}`} />
							</div>
						);
					case "PageBlocksListlinks":
						return (
							<div
								data-tinafield={`blocks.${i}`}
								key={i + block.__typename}
							>
								<ListLinks data={block} parentField={`blocks.${i}`} />
							</div>
						);
					case "PageBlocksPriceTable":
						return (
							<div
								data-tinafield={`blocks.${i}`}
								key={i + block.__typename}
							>
								<PriceTable data={block} parentField={`blocks.${i}`} />
							</div>
						);   
					case "PageBlocksPhotosGallery":
						return (
							<div
								data-tinafield={`blocks.${i}`}
								key={i + block.__typename}
							>
								<PhotosGallery data={block}/>
							</div>
						); 
					case "PageBlocksServTemplate":
						return (
							<div
								data-tinafield={`blocks.${i}`}
								key={i + block.__typename}
							>
								<ServTemplate data={block} parentField={`blocks.${i}`} />
							</div>
						);         
					default:
						return null;
					}
				})
				: null}
		</>
	);
};
