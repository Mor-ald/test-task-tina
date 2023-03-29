import { Section } from "../util/section";
import ServForm from "../servForm/ServForm";

export const ServiceSobol = (data) => {
    return (
      <Section color={"tint"}>
                    <div className="my-12 mx-24 flex flex-col">
                        {!data.serviceSobol.header || <p className='my-4 font-bold text-3xl'>{data.serviceSobol.header}</p>}
                        {!data.serviceSobol.time && !data.serviceSobol.coef && !data.serviceSobol.model || <p className="my-4">Цена услуги: <span className="font-bold text-orange-500">{((Number(data.serviceSobol.time.split(",").join(".")) * Number(data.serviceSobol.coef))*0.85).toFixed(0)} руб</span> (для Физ. лиц) Модель: <span className="font-bold text-orange-500">{data.serviceSobol.model}</span></p>}
                        <p className="my-4">
                            Специалисты сети автомастерских 
                            «АРМ» готовы выполнить любые работы 
                            по ремонту вашей ГАЗели и Лада, 
                            а также замене любых комплектующих 
                            и узлов по качеству не уступающему 
                            ремонту у дилера, при сохранении гораздо 
                            более привлекательной цены на работу.
                        </p>
                        {!data.serviceSobol.header && !data.serviceSobol.model || 
                            <p>
                                Мы приглашаем вас записаться на 
                                бесплатный осмотр вашей ГАЗели и 
                                Лада по <span className="font-bold text-orange-500">41 параметру</span> в одной из 
                                наших СТО, наиболее подходящей вам территориально. 
                                Для записи на <span className="font-bold text-orange-500">{data.serviceSobol.header}</span> 
                                <span className="font-bold text-orange-500"> для {data.serviceSobol.model} </span> 
                                звоните нам на удобную для вас <span className="font-bold text-orange-500">СТО</span>!
                            </p>
                        }
                        <ServForm visibleModel={false} serv={data.serviceSobol.header ? data.serviceSobol.header:""} model={data.serviceSobol.model}></ServForm>
                    </div>
      </Section>
    );
};