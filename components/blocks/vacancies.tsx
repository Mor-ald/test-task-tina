import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export const Vacancies = ({ data, parentField = "" }) => {

    const vac = data.vacancies ? data.vacancies.map((item) => {
        return {spec: item.spec, salary: item.salary, schedule: item.schedule};
    }):[];

    return (
      <Section color={data.color} data-tinafield={`${parentField}.body`}>
            <div className="mt-12 mx-auto w-full md:w-2/3">
                <DataTable value={vac} showGridlines responsiveLayout="scroll" stripedRows >
                        <Column field="spec" header="Специальность"></Column>
                        <Column field="salary" header="З/П" style={{textAlign: "center"}}></Column>
                        <Column field="schedule" header="График работы" style={{textAlign: "center"}}></Column>
                </DataTable>
            </div>
      </Section>
    );
};

export const vacanciesArmBlockSchema: TinaTemplate = {
    name: "vacancies",
    label: "Vacancies",
    ui: {
      previewSrc: "",
      defaultItem: {
        body: "Vacancies",
      },
    },
    fields: [
        {
            type: "object",
            label: "Vacancie",
            name: "vacancies",
            list: true,
            ui: {
                itemProps: (item) => {
                  return { label: item?.spec };
                },
            },
            fields: [
                {
                    type: "string",
                    label: "Специальность",
                    name: "spec",
                },
                {
                    type: "string",
                    label: "Зарплата",
                    name: "salary",
                },
                {
                    type: "string",
                    label: "График работы",
                    name: "schedule",
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