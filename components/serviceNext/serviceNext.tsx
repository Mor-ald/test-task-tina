
import ServForm from "../servForm/ServForm";
import { Section } from "../util/section";

import React from "react";

export const ServiceNext = (data) => {
	return (
		<Section color={"tint"}>
			<div className="my-12 mx-24 flex flex-col">
				{!data.serviceNext.header || <p data-testid="header" className='my-4 font-bold text-3xl'>{data.serviceNext.header}</p>}
				{!data.serviceNext.time && !data.serviceNext.coef && !data.serviceNext.model || <p className="my-4">Цена услуги: <span data-testid="price" className="font-bold text-orange-500">{((Number(data.serviceNext.time.split(",").join(".")) * Number(data.serviceNext.coef))*0.85).toFixed(0)} руб</span> (для Физ. лиц) Модель: <span data-testid="model" className="font-bold text-orange-500">{data.serviceNext.model}</span></p>}
				<p data-testid="spec" className="my-4">
                            Специалисты сети автомастерских 
                            «АРМ» готовы выполнить любые работы 
                            по ремонту вашей ГАЗели и Лада, 
                            а также замене любых комплектующих 
                            и узлов по качеству не уступающему 
                            ремонту у дилера, при сохранении гораздо 
                            более привлекательной цены на работу.
				</p>
				{!data.serviceNext.header && !data.serviceNext.model || 
                            <p data-testid="welcome">
                                Мы приглашаем вас записаться на 
                                бесплатный осмотр вашей ГАЗели и 
                                Лада по <span className="font-bold text-orange-500">41 параметру</span> в одной из 
                                наших СТО, наиболее подходящей вам территориально. 
                                Для записи на <span className="font-bold text-orange-500">{data.serviceNext.header}</span> 
                            	<span className="font-bold text-orange-500"> для {data.serviceNext.model} </span> 
                                звоните нам на удобную для вас <span className="font-bold text-orange-500">СТО</span>!
                            </p>
				}
				<ServForm visibleModel={false} serv={data.serviceNext.header ? data.serviceNext.header:""} model={"Газель 4216"}></ServForm>
			</div>
		</Section>
	);
};