import { Button } from 'primereact/button';
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Container } from "../util/container";
import type { TinaTemplate } from "tinacms";
import Link from "next/link";
import React from "react";

export const Services = ({ data, parentField = "" }) => {

    const serviceItemTemplate = (content) => {
        return (
            <div className='p-6'> 
                <div className='' style={{width: "300px"}}>
                    <img className='rounded-t-lg' src={`${content.serviceImg}`} style={{maxHeight: "125px", minWidth: "300px"}}></img>
                    <div className='rounded-b-lg p-4 shadow-2xl flex flex-col justify-between' style={{minHeight: "350px"}}>
                        <div className='px-4 pt-4'>
                            <h3 className='mb-4 font-bold text-1xl'>{content.serviceHeader}</h3>
                            <div className='text-xs'>
                                <TinaMarkdown content={content.serviceText} />
                            </div>
                        </div>
                        <Button label="Консультация" icon="pi pi-calculator" style={{width: "180px", background: "#dc4419", margin: "1.5rem auto", border: 0, borderRadius: 0, display: "flex", justifyContent: "center", outline: "none"}}/>
                    </div>
                </div>
            </div>
        )
    }

    return (
      <Section className='mb-16' color={data.color}>
        <div className="w-2/3 my-12 mx-auto flex justify-center items-center flex-wrap">
            {data.service && data.service.map((service) => { return serviceItemTemplate(service) })}
        </div>
        
            <Link href={`/posts`} passHref>
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