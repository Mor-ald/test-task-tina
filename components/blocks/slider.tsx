import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";

import React from "react";

export const Slider = ({ data, parentField = "" }) => {

    const itemTemplate = (content) => {
        return (
            <div className='p-2'> 
                <div className='bg-white px-12 py-6 pb-12 border-l-4 border-orange-600'>
                    <h3 className='my-4 font-bold text-3xl'>{content.header}</h3>
                    <TinaMarkdown content={content.text} />
                </div>
                <Button label="Консультация" icon="pi pi-calculator" style={{width: "200px", background: "#dc4419", marginTop: "24px", border: 0, borderRadius: 0, display: "flex", justifyContent: "center", outline: "none"}}/>
            </div>

        )
    }

    const content = data.slide.map((slide) => {
        return {header: slide.slideHeader, text: slide.slideText}
    })

    return (
      <Section color={data.color}>
        <div className="sm:w-4/4 md:w-3/4 flex justify-start flex-col mx-auto p-12 my-6 mb-24 bg-[url('/slider.webp')]">
            <Carousel className='sm:w-3/3 md:w-2/3' value={content} numVisible={1} numScroll={1} itemTemplate={itemTemplate} autoplayInterval={5000} showIndicators={false} showNavigators={false}></Carousel>
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
