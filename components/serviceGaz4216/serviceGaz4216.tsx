
import ServForm from "../servForm/ServForm";
import { Section } from "../util/section";

export const ServiceGaz4216 = (data) => {
    return (
      <Section color={"tint"}>
                    <div className="my-12 mx-24 flex flex-col">
                        {!data.serviceGaz4216.header || <p className='my-4 font-bold text-3xl'>{data.serviceGaz4216.header}</p>}
                        {!data.serviceGaz4216.time && !data.serviceGaz4216.coef && !data.serviceGaz4216.model || <p className="my-4">Цена услуги: <span className="font-bold text-orange-500">{((Number(data.serviceGaz4216.time.split(",").join(".")) * Number(data.serviceGaz4216.coef))*0.85).toFixed(0)} руб</span> (для Физ. лиц) Модель: <span className="font-bold text-orange-500">{data.serviceGaz4216.model}</span></p>}
                        <p className="my-4">
                            Специалисты сети автомастерских 
                            «АРМ» готовы выполнить любые работы 
                            по ремонту вашей ГАЗели и Лада, 
                            а также замене любых комплектующих 
                            и узлов по качеству не уступающему 
                            ремонту у дилера, при сохранении гораздо 
                            более привлекательной цены на работу.
                        </p>
                        {!data.serviceGaz4216.header && !data.serviceGaz4216.model || 
                            <p>
                                Мы приглашаем вас записаться на 
                                бесплатный осмотр вашей ГАЗели и 
                                Лада по <span className="font-bold text-orange-500">41 параметру</span> в одной из 
                                наших СТО, наиболее подходящей вам территориально. 
                                Для записи на <span className="font-bold text-orange-500">{data.serviceGaz4216.header}</span> 
                                <span className="font-bold text-orange-500"> для {data.serviceGaz4216.model} </span> 
                                звоните нам на удобную для вас <span className="font-bold text-orange-500">СТО</span>!
                            </p>
                        }
                        <ServForm visibleModel={false} serv={data.serviceGaz4216.header ? data.serviceGaz4216.header:""} model={"Газель 4216"}></ServForm>
                    </div>
      </Section>
    );
};