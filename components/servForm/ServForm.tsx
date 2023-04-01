import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Checkbox } from "primereact/checkbox"; 
import React, { useCallback, useRef, useState } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import axios from "axios";

const ServForm = (form: {visibleModel: boolean, serv?: string, model?: string}) => {
	const [check, setCheck] = useState(false);
	const [nameUser, setNameUser] = useState("");
	const [phone, setPhone] = useState("");
	const [car, setCar] = useState(form.model? form.model:"");
	const toast = useRef<Toast>(null);

	const showInfo = useCallback((toast: React.RefObject<Toast>, summary: string, detail: string) => {
		toast.current?.show({severity: "info", summary: summary, detail: detail});
	}, []);

	const showError = useCallback((toast: React.RefObject<Toast>, summary: string, detail: string) => {
		toast.current?.show({severity: "error", summary: summary, detail: detail});
	}, []);
    
	const sendData = useCallback((event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
        
		const TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN;
		const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;
		const URL = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
		const itemData = {
			nameUser: nameUser,
			phone: phone,
			car: car,
			agreement: check ? "Да":"Нет"
		};

		const message = `<b>Заполнение формы на сайте СТО АРМ</b>
${form.serv ? `<b>Услуга</b>: ${form.serv}.`:""}
<b>Клиент</b>: ${itemData.nameUser}.
<b>Телефон</b>: ${itemData.phone}.
<b>Модель авто</b>: ${itemData.car}.
<b>Согласие на обработку данных</b>: ${itemData.agreement}.
        `;

		axios.post(URL, {
			chat_id: CHAT_ID,
			parse_mode: "html",
			text: message
		}).then(
			() => {
				setCheck(!check);
				setNameUser("");
				setPhone("");
				setCar("");
				return showInfo(toast, "Заполнение формы", "Ваши данные были отправлены, в скором времени мы свяжемся с вами!");
			}
		).catch(
			() => {
				return showError(toast, "Данные не были отправлены", "Ошибка отправки формы. Пожалуйста, свяжитесь с нами по телефону!");
			}
		);
    

	}, [nameUser, phone, car, check, form.serv, showInfo, showError]);

	return (
		<div>
			<Toast ref={toast}></Toast>
			<form data-testid="servForm" className="my-6 flex flex-col" onSubmit={sendData}>
				<div className="my-2 flex flex-col">
					<span className="mb-2"><span className="text-orange-500 font-bold">*</span>Имя</span>
					<span className="p-input-icon-left">
						<i className="pi pi-user" />
						<InputText data-testid="nameUser" name="nameUser" required placeholder="Имя" value={nameUser} onChange={(e) => setNameUser(e.target.value)}/>
					</span>
				</div>
				<div className="my-2 flex flex-col">
					<span className="mb-2"><span className="text-orange-500 font-bold">*</span>Телефон</span>
					<span className="p-input-icon-left">
						<i className="pi pi-phone" />
						<InputMask data-testid="phone" name="phone" type={"phone"} required mask="+7(999) 999-99-99" placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)}/>
					</span>
				</div>
				{!form.visibleModel ||
                <div className="my-2 flex flex-col">
                	<span className="mb-2">Модель авто</span>
                	<span className="p-input-icon-left">
                		<i className="pi pi-car" />
                		<InputText data-testid="car" required name="car" placeholder="Модель вашего авто" value={car} onChange={(e) => setCar(e.target.value)}/>
                	</span>
                </div>
				}
				<div className="my-2 flex items-center">
					<Checkbox data-testid="agreement" required inputId="agreement" name="agreement" value={check} onChange={() => {setCheck(!check);}} checked={check} />
					<label htmlFor="agreement" className="ml-2">
						<span className="text-orange-500 font-bold">*</span>Я согласен на обработку моих <a className="text-orange-500 font-bold underline" href="/agreement">персональных данных</a>, политикой конфеденциальности и договором оферты.
					</label>
				</div>
				<div> 
					<Button label="Отправить" icon="pi pi-check" type="submit" style={{background: "#ea6c45", border: 0, marginTop: "24px", padding:"12px 24px", fontWeight: "bold"}}></Button>
				</div>
			</form>
		</div>
	);
};

export default ServForm;