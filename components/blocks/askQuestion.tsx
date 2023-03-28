import { Section } from "../util/section";
import {  TinaTemplate } from "tinacms";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import ServForm from "../servForm/ServForm";
import { useState } from "react";

export const AskQuestion = ({ data }) => {
    const [displayForm, setDisplayForm] = useState(false);

    return (
      <Section>
        <Dialog visible={displayForm} onHide={() => setDisplayForm(false)}>
          <p className='font-bold text-2xl text-center'>Заполните <br></br> форму</p>
          <div className='w-64 sm:px-0 md:w-80 md:px-4 lg:w-96' >
            <ServForm visibleModel={true} ></ServForm>
          </div>
        </Dialog>
        <div className="relative p-12 flex flex-col justify-center items-center bg-[url('/ask.webp')]">
            <div className="absolute w-2/2 h-2/2 bg-black left-0 top-0 opacity-90 z-0" style={{minWidth: "100%", minHeight: "100%"}}></div>
            <div className="w-2/3 text-center py-2 z-10 text-orange-300">
                <h3 className='font-bold text-3xl'>Задайте</h3>
                <p className="font-bold mb-2">ваш вопрос</p>
            </div>
            <div className="z-10 font-bold text-white flex flex-col items-center w-2/3 my-10 md:flex-row">
              <div className="border-b-2 border-gray-400 py-12 flex flex-col items-center md:border-r-2 md:border-b-0 md:pr-12 md:py-2 md:items-end md:w-1/2" >
                <div className="flex flex-col">
                  <p className='font-bold text-lg mb-4 text-center'>Звоните по <br></br> номеру:</p>
                  <a href={`tel:${data.phone}`} className="underline text-orange-300">{data.phone}</a>
                </div>
              </div>
              <div className=" py-12 flex flex-col items-center md:pl-12 md:py-2 md:items-start md:w-1/2">
                <p className='font-bold text-lg mb-4 text-center'>Или заполните <br></br> форму:</p>
                  <Button label="Заполнить форму" style={{background: "#ea6c45", border: 0, fontWeight: "bold"}} onClick={() => setDisplayForm(true)}></Button>
              </div>
            </div>
        </div>
      </Section>
    );
};

export const AskQuestionBlockSchema: TinaTemplate = {
    name: "askQuestion",
    label: "Ask Question",
    ui: {
      previewSrc: "",
      defaultItem: {
        body: "Ask Question",
      },
    },
    fields: [
        {
            type: "string",
            label: "Phone",
            name: "phone",
        },
    ],
};


