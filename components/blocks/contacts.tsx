import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { Button } from "primereact/button";

export const Contacts = ({ data, parentField = "" }) => {
    return (
      <Section color={data.color} data-tinafield={`${parentField}.body`}>
        {!data ||
            <div className="my-24 mx-24">
                {!data.header ||
                    <div className="flex justify-center mb-6">
                        <p className='my-4 font-bold text-3xl'>{data.header}</p>
                    </div> 
                }
                <div className="flex flex-wrap justify-center">
                    <div className="mx-6 flex flex-wrap justify-center items-center">
                        {data ? data.contact.map((item) => {
                            return (
                                <div className="m-4 p-8 flex flex-col justify-center items-center bg-white shadow-md">
                                    <i className="pi pi-map-marker text-orange-500" style={{ fontSize: '2rem', margin: "0.25rem" }}></i>
                                    <p className="my-2 font-bold text-2xl">{item.header}</p>     
                                    <p className="text-gray-300">{item.time}</p>
                                    {!item.address || <a className="my-2 text-orange-500 font-bold underline" href={item.addressLink}>{item.address}</a>}
                                    <div className="my-2 flex flex-col items-center">
                                        {!item.phones || <p className="font-bold">Телефоны:</p>}
                                        {item.phones ? item.phones.map((p) => {
                                            return (
                                                <a className="text-orange-500 text-bold underline font-bold" href={p.phone}>{p.phone}</a>
                                            );
                                        }):[]}
                                    </div>
                                    <div className="my-2 flex flex-col items-center">
                                        {!item.emails || <p className="font-bold">Почта:</p>}
                                        {item.emails ? item.emails.map((e) => {
                                            return (
                                                <a className="text-orange-500 text-bold underline font-bold" href={e.email}>{e.email}</a>
                                            );
                                        }):[]}
                                    </div>
                                </div>
                            );
                        }):[]}
                    </div>
                    <div>
                        <div className="mt-8">
                            <p className='my-4 font-bold text-xl'>Мы в социальных сетях</p>
                            <div className="">
                                <div className="my-4">
                                    <a href="#" className="flex items-center font-bold text-blue-600">
                                        <img src="/arm_vk.svg" alt="" />
                                        <span className="ml-2">Вконтакте</span>
                                    </a>

                                </div>
                                <div className="my-4">
                                    <a href="#" className="flex items-center font-bold text-pink-600">
                                        <img src="/arm_instagram.svg" alt="" />
                                        <span className="ml-2">Instagram</span>
                                    </a>
                                </div>
                                <div className="my-4">
                                    <a href="#" className="flex items-center font-bold text-green-600">
                                        <img src="/arm_whatsapp.svg" alt="" />
                                        <span className="ml-2">WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="my-4">
                            <p className='my-4 font-bold text-xl'>Цены на наши услуги</p>
                            <a href="/prices">
                                <Button label="Прайс-листы" style={{background: "#ea6c45", border: 0, width: "300px"}}></Button>
                            </a>
                        </div>   
                    </div>
                </div>
                
            </div>
        }  
      </Section>
    );
};

export const contactsArmBlockSchema: TinaTemplate = {
    name: "contacts",
    label: "Contacts",
    ui: {
      previewSrc: "",
      defaultItem: {
        body: "Contacts",
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
            label: "Contact",
            name: "contact",
            list: true,
            ui: {
                itemProps: (item) => {
                  return { label: item?.header };
                },
            },
            fields: [
                {
                    type: "string",
                    label: "СТО",
                    name: "header", 
                },
                {
                    type: "string",
                    label: "Рабочее время",
                    name: "time", 
                },
                {
                    type: "string",
                    label: "Адрес",
                    name: "address",
                },
                {
                    type: "string",
                    label: "Ссылка на адрес в картах",
                    name: "addressLink",
                },
                {
                    type: "object",
                    label: "Phones",
                    name: "phones",
                    list: true,
                    ui: {
                        itemProps: (item) => {
                          return { label: item?.phone };
                        },
                    },
                    fields: [
                        {
                            type: "string",
                            label: "Телефон",
                            name: "phone", 
                        },
                    ]
                },
                {
                    type: "object",
                    label: "Emails",
                    name: "emails",
                    list: true,
                    ui: {
                        itemProps: (item) => {
                          return { label: item?.email };
                        },
                    },
                    fields: [
                        {
                            type: "string",
                            label: "Email",
                            name: "email", 
                        },
                    ]
                }
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