import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Button } from "primereact/button";
import { Container } from "../util/container";

export const About = ({ data, parentField = "" }) => {

    return (
      <Section color={data.color} data-tinafield={`${parentField}.body`}>
            <Container
            className={`prose prose-lg ${
            data.color === "primary" ? `prose-primary` : `dark:prose-dark`
            }`}
            data-tinafield={`${parentField}.body`}
            size="large"
            width="large"
        >
            {!data.aboutItemFirst || 
            <div className="my-12 flex justify-center items-center">
                <div className="mx-6">
                    <TinaMarkdown content={data.aboutItemFirst.text} />
                </div>
                <img className="w-1/3 h-1/2 mx-12 rounded-md shadow-xl" src={data.aboutItemFirst.image ? data.aboutItemFirst.image.src: ""} aria-hidden="true"/>
            </div>
            }
            {!data.aboutItemSecond || 
            <div className="my-12 flex justify-center items-center">
                <img className="w-1/3 h-1/2 mx-12 rounded-md shadow-xl" src={data.aboutItemSecond.image ? data.aboutItemSecond.image.src:""} aria-hidden="true"/>
                <div className="mx-6">
                    <TinaMarkdown content={data.aboutItemSecond.text} />
                </div>
            </div>
            }
            {!data.aboutSert || 
            <div className="my-6 flex flex-col justify-center items-center">
                <p className='my-4 font-bold text-3xl'>{data.aboutSert.header}</p>
                <img src={data.aboutSert.image ? data.aboutSert.image.src: ""} aria-hidden="true"/>
            </div>
            }   
            {!data.link || 
            <div className="mt-24 flex justify-center">
                <a className="no-underline" href={data.link} target="_blank">
                    <Button label="Договор на оказание услуг" style={{background: "#ea6c45", border: 0}}/>
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