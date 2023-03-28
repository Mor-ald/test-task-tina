import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';

export const ListLinks = ({ data, parentField = "" }) => {

    const values = data.links ? data.links.map((item, i) => {
        return {key: i, data: {linkName: item.linkName, link: item.link}};
    }):[];

    const itemTemplate = (item) => {
        return (
            <a className="underline text-orange-400 font-bold hover:opacity-75" href={item.data.link}>{item.data.linkName}</a>         
        );
    };

    return (
      <Section color={data.color} data-tinafield={`${parentField}.body`}>
            <div className="flex flex-col items-center md:my-12 md:mx-24">
                {!data.header || 
                    <TreeTable value={values} stripedRows showGridlines>
                        <Column field="linkName" header={data.header} body={itemTemplate} filter filterPlaceholder="Поиск..." ></Column>
                    </TreeTable>
                }
            </div>
      </Section>
    );
};

export const listlinksBlockSchema: TinaTemplate = {
    name: "listlinks",
    label: "List of Links",
    ui: {
      previewSrc: "",
      defaultItem: {
        body: "List of Links",
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
            label: "Links",
            name: "links",
            list: true,
            ui: {
                itemProps: (item) => {
                  return { label: item?.linkName };
                },
            },
            fields: [
                {
                    type: "string",
                    label: "Наименование",
                    name: "linkName", 
                },
                {
                    type: "string",
                    label: "Ссылка",
                    name: "link", 
                },
            ]
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