import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { TreeTable } from 'primereact/treeTable';
import { Column } from 'primereact/column';
import { useEffect, useState } from "react";
import axios from "axios";

export const fetchPrice = async (price: string) => {
	return await axios
		.get(`${price}.json`);
};

export const PriceTable = ({ data, parentField = "" }) => {

    const [values, setValues] = useState([]);

    useEffect(( ) => {
        let dataFetch = []
        const nodes = [];
		const load = async () => {
            if(data.typePrice) await fetchPrice(data.typePrice).then(res => dataFetch = res.data); 
            dataFetch.map((item, i) => {
                let itemData ={}
                if(data.typePrice === "price_paiting"){
                    itemData = {
                        key: i,
                        data: {
                            name: item.name,
                            url: item.url,
                            price: item.price,
                        }
                    }
                }
                else{
                    itemData = {
                        key: i,
                        data: {
                            name: item.name,
                            time: item.time,
                            url: item.url,
                            coef: data.coef,
                            price: Number(item.time.split(",").join("."))*Number(data.coef),
                            discount: Number(item.time.split(",").join("."))*Number(data.coef) * 0.85,
                        }
                    }
                }
                
                nodes.push(itemData);
            })

            setValues(nodes);
		};
		load().then();
    }, [])

    const nameTemplate = (item) => {
        return (
            <a className="underline text-orange-400 font-bold hover:opacity-75" href={item.data.url}>{item.data.name}</a>         
        );
    };

    const timeTemplate = (item) => {
        return (
            <div className="flex justify-center">{item.data.time}</div>         
        );
    };

    const coefTemplate = (item) => {
        return (
            <div className="flex justify-center">{item.data.coef}</div>         
        );
    };

    const priceTemplate = (item) => {
        return (
            <div className="flex justify-center">{Number(item.data.price).toFixed(0)}</div>         
        );
    };

    const discountTemplate = (item) => {
        return (
            <div className="flex justify-center">{Number(item.data.discount).toFixed(0)}</div>         
        );
    };

    return (
      <Section color={data.color} data-tinafield={`${parentField}.body`}>
            <div className="my-12 mx-24 flex flex-col items-center">
                {!data.header || 
                    <div>
                        <p className='my-4 font-bold text-3xl'>{data.header}</p>
                        {data.typePrice === "price_paiting" &&
                            <div>
                                <p className="my-2 font-bold text-center">*Цены указаны без учёта материалов.</p>
                                <p className="my-2 font-bold text-center">**Стоимость ремонтных работ оговаривается индивидуально</p>
                                <TreeTable value={values} stripedRows showGridlines>
                                    <Column field="name" header={"Наименование"} body={nameTemplate} filter={true} filterPlaceholder="Поиск..." filterMatchMode="contains"></Column>
                                    <Column field="price" header={"Стоимость работ"} body={priceTemplate}></Column>
                                </TreeTable>
                            </div>        
                        }
                        {data.typePrice !== "price_paiting" &&
                            <TreeTable value={values} stripedRows showGridlines>
                                <Column field="name" header={"Наименование"} body={nameTemplate} filter={true} filterPlaceholder="Поиск..." filterMatchMode="contains"></Column>
                                <Column field="time" header={"Время выполнения работы"} body={timeTemplate}></Column>
                                <Column field="coef" header={"Стоимость н/ч"} body={coefTemplate}></Column>
                                <Column field="price" header={"Стоимость работ"} body={priceTemplate}></Column>
                                <Column field="discount" header={"Цена по скидочной карте"} body={discountTemplate}></Column>
                            </TreeTable>
                        }

                    </div>
                }
            </div>
      </Section>
    );
};

export const priceTableBlockSchema: TinaTemplate = {
    name: "priceTable",
    label: "Price Table",
    ui: {
      previewSrc: "",
      defaultItem: {
        body: "Price Table",
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
            label: "Прайс:",
            name: "typePrice",
            options: [
              { label: "Прайс-лист ремонта ГАЗель-Бизнес с двигателем 4216", value: "price4216" },
              { label: "Прайс-лист ремонта Соболь Бизнес", value: "price_sobol" },
              { label: "Прайс-лист ремонта ГАЗон Некст", value: "price_next" },
              { label: "Прайс-лист ремонта Газель-Некст с двигателем cummins 2,8", value: "price_next28" },
              { label: "Прайс-лист ремонта Газель-Некст evotech 2,7", value: "price_next27" },
              { label: "Прайс-лист ремонта Лада", value: "price_lada" },
              { label: "Прайс-лист на малярные работы", value: "price_paiting" },
            ],
        },
        {
            type: "string",
            label: "Коэффициент",
            name: "coef",
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