import { Section } from "../util/section";
import {  TinaTemplate } from "tinacms";
import { Carousel } from "primereact/carousel";

export const Partners = ({ data, parentField }) => {

    const itemTemplate = (content) => {
        return (
            <div className='m-2 py-2 px-6 bg-white flex justify-center'>
                <img src={content.imageSrc}/>
            </div>

        )
    }

    const content = data.parthner ?  data.parthner.map((part) => {return {imageSrc: part.partImg}}):[]

    return (
      <Section>
        <div className="relative p-12 flex flex-col justify-center items-center">
            <div className="absolute w-2/2 h-2/2 left-0 top-0 opacity-90 z-0" style={{minWidth: "100%", minHeight: "100%"}}></div>
            <div className="w-2/3 text-center py-2 z-10">
                <h3 className='font-bold text-3xl mb-2'>Партнеры</h3>
                <p className="font-bold mb-2">{data.textPart}</p>
            </div>
            <Carousel className="my-10" value={content} numVisible={3} numScroll={1} itemTemplate={itemTemplate} autoplayInterval={5000} showNavigators={true} showIndicators={false}></Carousel>
        </div>
      </Section>
    );
};

export const PartnersBlockSchema: TinaTemplate = {
    name: "partners",
    label: "Partners",
    ui: {
      previewSrc: "",
      defaultItem: {
        body: "Partners",
      },
    },
    fields: [
        {
            type: "string",
            label: "Partners Text",
            name: "textPart",
        },
        {
            type: "object",
            label: "Parhner",
            name: "parthner",
            list: true,
            ui: {
                itemProps: (item) => {
                  return { label: item?.name };
                },
              },
            fields: [
                {
                    type: "string",
                    label: "Name of Image",
                    name: "partImg",
                },
            ],
        },
    ],
};