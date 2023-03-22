import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";

export const ServTemplate = ({ data, parentField = "" }) => {

    return (
      <Section color={"tint"} data-tinafield={`${parentField}.body`}>
                    <div className="my-12 mx-24 flex flex-col">
                        {!data.header || <p className='my-4 font-bold text-3xl'>{data.header}</p>}
                        {!data.time && !data.coef && !data.model || <p className="my-4">Цена услуги: <span className="font-bold text-orange-500">{((Number(data.time.split(",").join(".")) * Number(data.coef))*0.85).toFixed(0)} руб</span> (для Физ. лиц) Модель: <span className="font-bold text-orange-500">{data.model}</span></p>}
                        <p className="my-4">
                            Специалисты сети автомастерских 
                            «АРМ» готовы выполнить любые работы 
                            по ремонту вашей ГАЗели и Лада, 
                            а также замене любых комплектующих 
                            и узлов по качеству не уступающему 
                            ремонту у дилера, при сохранении гораздо 
                            более привлекательной цены на работу.
                        </p>
                        {!data.header && !data.model || 
                            <p>
                                Мы приглашаем вас записаться на 
                                бесплатный осмотр вашей ГАЗели и 
                                Лада по <span className="font-bold text-orange-500">41 параметру</span> в одной из 
                                наших СТО, наиболее подходящей вам территориально. 
                                Для записи на <span className="font-bold text-orange-500">{data.header}</span> 
                                <span className="font-bold text-orange-500"> для {data.model} </span> 
                                звоните нам на удобную для вас <span className="font-bold text-orange-500">СТО</span>!
                            </p>
                        }
                    </div>
      </Section>
    );
};

export const servTemplateBlockSchema: TinaTemplate = {
    name: "servTemplate",
    label: "ServTemplate",
    ui: {
      previewSrc: "",
      defaultItem: {
        body: "ServTemplate",
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
            label: "Время выполенения работы",
            name: "time",
        },
        {
            type: "string",
            label: "Коэффициент",
            name: "coef",
        },
        {
            type: "string",
            label: "Модель",
            name: "model",
        },
    ],
};