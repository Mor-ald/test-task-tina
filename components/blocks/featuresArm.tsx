import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";

export const FeaturesArm = ({data}) => {

    const featTemplate = (content) => {
        return (
            <div className="flex justify-center my-6 mx-12 md:justify-start" style={{minWidth: "360px"}}>
                <div className="border-r-2 border-gray-400 pr-3 flex justify-center items-center md:pr-6">
                    <img src={`${content.featImg}`} alt="" />
                </div>
                <div className="pl-3 md:pr-3">
                    <h3 className="font-bold text-white text-xl md:text-2xl">{content.featHeader}</h3>
                    <p className="text-gray-300">{content.featText}</p>
                </div>
            </div>
        );
    }

    return (
      <Section>
        <div className="relative py-12 px-2 flex flex-col justify-center items-center bg-[url('/featureArm.jpg')] md:px-12">
            <div className="absolute w-2/2 h-2/2 bg-black left-0 top-0 opacity-90 z-0" style={{minWidth: "100%", minHeight: "100%"}}></div>
            <div className="bg-white text-center p-4 z-10">
                <h3 className='mb-2 font-bold text-3xl'>{data.header}</h3>
                <p className="font-bold mb-2">{data.headerText}</p>
            </div>

            <div className="w-2/3 flex justify-center items-center m-12 p-6 flex-wrap z-10">
                {data.featArm && data.featArm.map(item => {return featTemplate(item)} )}   
            </div>
        </div>
      </Section>
    );
};

export const featuresArmBlockSchema: TinaTemplate = {
    name: "featuresArm",
    label: "FeaturesArm",
    ui: {
      previewSrc: "",
      defaultItem: {
        body: "FeaturesArm",
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
            label: "Feature",
            name: "featArm",
            list: true,
            ui: {
                itemProps: (item) => {
                  return { label: item?.featHeader };
                },
              },
            fields: [
                {
                    type: "string",
                    label: "Name of Image",
                    name: "featImg",
                },
                {
                    type: "string",
                    label: "Header",
                    name: "featHeader",
                },
                {
                    type: "string",
                    label: "Content",
                    name: "featText",
                },
            ],
        },
    ],
};