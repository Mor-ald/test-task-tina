import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { Button } from "primereact/button";

export const Contacts = ({ data, parentField = "" }) => {
    return (
      <Section color={data.color} data-tinafield={`${parentField}.body`}>
        {!data ||
            <div className="my-12 md:mx-24">
                {!data.header ||
                    <div className="flex justify-center mb-6">
                        <p className='my-4 font-bold text-2xl text-center md:text-3xl'>{data.header}</p>
                    </div> 
                }
                <div className="flex flex-wrap justify-center">
                    <div className="mx-2 flex flex-wrap justify-center items-center md:mx-6">
                        {data ? data.contact.map((item) => {
                            return (
                                <div className="m-2 my-4 p-4 flex flex-col justify-center items-center bg-white shadow-md md:m-4 md:p-8">
                                    <i className="pi pi-map-marker text-orange-500" style={{ fontSize: '2rem', margin: "0.25rem" }}></i>
                                    <p className="my-2 font-bold text-xl text-center md:text-2xl">{item.header}</p>     
                                    <p className="text-gray-300 text-center">{item.time}</p>
                                    {!item.address || <a className="my-2 text-orange-500 font-bold underline text-center" href={item.addressLink}>{item.address}</a>}
                                    <div className="my-2 flex flex-col items-center">
                                        {!item.phones || <p className="font-bold text-center">Телефоны:</p>}
                                        {item.phones ? item.phones.map((p) => {
                                            return (
                                                <a className="text-orange-500 text-bold underline font-bold text-center" href={p.phone}>{p.phone}</a>
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

                    <div className="mt-8 w-full">
                        <p className='my-4 font-bold text-xl text-center'>Наши адреса на карте</p>
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A51e2d3726f76306261113bfa2f8320f8aa612f468135cd1c8457ae3dd41b0d74&amp;source=constructor" width="100%" height="600" frameBorder="0"></iframe>
                    </div>
                    

                    <div>
                        <div className="mt-8">
                            <p className='my-4 font-bold text-xl text-center'>Мы в социальных сетях</p>
                            <div className="flex flex-col items-center">
                                <div className="my-2">
                                    <a href="#" className="flex items-center font-bold text-blue-600 transition hover:opacity-60">
                                        <img src="/arm_vk.svg" alt="" />
                                        <span className="ml-2">Вконтакте</span>
                                    </a>

                                </div>
                                <div className="my-2">
                                    <a href="#" className="flex items-center font-bold text-pink-600 transition hover:opacity-60">
                                        <img src="/arm_instagram.svg" alt="" />
                                        <span className="ml-2">Instagram</span>
                                    </a>
                                </div>
                                <div className="my-2">
                                    <a href="#" className="flex items-center font-bold text-green-600 transition hover:opacity-60">
                                        <img src="/arm_whatsapp.svg" alt="" />
                                        <span className="ml-2">WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="my-4 flex flex-col items-center">
                            <p className='my-4 font-bold text-xl text-center'>Цены на наши услуги</p>
                            <a className="hover:opacity-80 transition" href="/prices">
                                <Button label="Прайс-листы" style={{background: "#ea6c45", border: 0, width: "200px", fontWeight: "bold"}}></Button>
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