import { Section } from "../util/section";
import {  TinaTemplate } from "tinacms";
import { Button } from "primereact/button";

export const AskQuestion = ({ data, parentField }) => {


    return (
      <Section>
        <div className="relative p-12 flex flex-col justify-center items-center bg-[url('/ask.webp')]">
            <div className="absolute w-2/2 h-2/2 bg-black left-0 top-0 opacity-90 z-0" style={{minWidth: "100%", minHeight: "100%"}}></div>
            <div className="w-2/3 text-center py-2 z-10 text-orange-300">
                <h3 className='font-bold text-3xl'>Задайте</h3>
                <p className="font-bold mb-2">ваш вопрос</p>
            </div>
            <div className="z-10 font-bold text-white flex w-2/3 my-10">
              <div className="border-r-2 border-gray-400 pr-12 py-2 w-1/2 flex flex-col items-end" >
                <p className='font-bold text-lg mb-4'>Звоните по номеру:</p>
                <a href={`tel:${data.phone}`} className="underline text-orange-300">{data.phone}</a>
              </div>
              <div className="pl-12 py-2 w-1/2 flex flex-col items-start">
                <p className='font-bold text-lg mb-4'>Или заполните форму:</p>
                  <Button label="Заполнить форму" style={{background: "#ea6c45", border: 0}}></Button>
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