import { Section } from "../util/section";
import ServForm from "../servForm/ServForm";

export const ServiceNext27 = (data) => {
    return (
      <Section color={"tint"}>
                    <div className="my-12 mx-24 flex flex-col">
                        {!data.serviceNext27.header || <p className='my-4 font-bold text-3xl'>{data.serviceNext27.header}</p>}
                        {!data.serviceNext27.time && !data.serviceNext27.coef && !data.serviceNext27.model || <p className="my-4">Цена услуги: <span className="font-bold text-orange-500">{((Number(data.serviceNext27.time.split(",").join(".")) * Number(data.serviceNext27.coef))*0.85).toFixed(0)} руб</span> (для Физ. лиц) Модель: <span className="font-bold text-orange-500">{data.serviceNext27.model}</span></p>}
                        <p className="my-4">
                            Специалисты сети автомастерских 
                            «АРМ» готовы выполнить любые работы 
                            по ремонту вашей ГАЗели и Лада, 
                            а также замене любых комплектующих 
                            и узлов по качеству не уступающему 
                            ремонту у дилера, при сохранении гораздо 
                            более привлекательной цены на работу.
                        </p>
                        {!data.serviceNext27.header && !data.serviceNext27.model || 
                            <p>
                                Мы приглашаем вас записаться на 
                                бесплатный осмотр вашей ГАЗели и 
                                Лада по <span className="font-bold text-orange-500">41 параметру</span> в одной из 
                                наших СТО, наиболее подходящей вам территориально. 
                                Для записи на <span className="font-bold text-orange-500">{data.serviceNext27.header}</span> 
                                <span className="font-bold text-orange-500"> для {data.serviceNext27.model} </span> 
                                звоните нам на удобную для вас <span className="font-bold text-orange-500">СТО</span>!
                            </p>
                        }
                        <ServForm visibleModel={false} serv={data.serviceNext27.header ? data.serviceNext27.header:""} model={data.serviceNext27.model}></ServForm>
                    </div>
      </Section>
    );
};