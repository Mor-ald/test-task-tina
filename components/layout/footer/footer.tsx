import { Button } from "primereact/button";
import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { InputText } from "primereact/inputtext"

export const Footer = ({ data, icon, rawData }) => {


  return (
    <footer >
        <div className="relative flex flex-wrap justify-center px-12 py-12 bg-[url('/fonsvet.jpg')]">
          <div className="absolute top-0 left-0 bg-black opacity-60" style={{minWidth: "100%", minHeight: "100%"}}></div>

        {!data.footerAbout ||
          <div className="m-12 flex flex-col grow-1 flex-wrap w-96 z-10">
              <div className="text-left mb-4">
                <p className="text-white font-bold text-2xl">{data.footerAbout.aboutHeader}</p>
                <span className="block my-4 w-16 h-1 bg-orange-600"></span>
              </div>
              <div className="">
                <p className="my-4 text-white font-bold">
                  Добро пожаловать на наш сайт!
                </p>
                <p className="my-4 font-bold" style={{color: "#9b9998"}}>
                  Наша почта: <a className="text-orange-300 underline" href={`${data.footerAbout.aboutEmail}`}>{data.footerAbout.aboutEmail}</a>
                </p>
                <p className="my-4 font-bold" style={{color: "#9b9998"}}>
                  <TinaMarkdown content={data.footerAbout.abotText} />
                </p>
                <a href="/about">
                  <Button label="Подробнее" style={{background: "#ea6c45", border: 0, marginTop: "24px"}}></Button>
                </a>
              </div>
          </div> 
          }

          {!data.footerContacts ||
          <div className="m-12 flex flex-col grow-1 w-96 z-10">
            <div className="text-left mb-4">
              <p className="text-white font-bold text-2xl">{data.footerContacts.contHeader}</p>
              <span className="block my-4 w-16 h-1 bg-orange-600"></span>
            </div>
            <div className="flex my-4 items-center">
              <i className="pi pi-phone" style={{ fontSize: '1.3rem', color: "#e2400f", marginTop: "0.45rem" }}></i>
              <span className="ml-4"><a className="text-white underline font-bold text-xl" href={`tel:${data.footerContacts.contPhone}`}>{data.footerContacts.contPhone}</a></span> 
            </div>
            <div>
              <div className="flex my-4 items-center">
                <i className="pi pi-map-marker" style={{ fontSize: '1.3rem', color: "#e2400f", marginTop: "0.15rem" }}></i>
                <p className="ml-4 font-bold" style={{color: "#9b9998"}}>Наши адреса:</p>
              </div>
              <div className="text-white font-bold">
                {data.footerContacts.contAddress && data.footerContacts.contAddress.map((adr) => {
                  return (
                    <address>
                        <p><a href={`${adr.href}`}>{adr.label}</a></p>
                    </address>
                  );
                })}
              </div>

              <div className="mt-6 flex justify-center mr-8 md:mr-0 md:justify-start">
                <a href="#" className="mr-2">
                  <img src="/arm_vk.svg" alt="" />
                </a>
                <a href="#" className="mx-2">
                  <img src="/arm_instagram.svg" alt="" />
                </a>
                <a href="#" className="mx-2">
                  <img src="/arm_whatsapp.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          }

          
        </div>
        <div className="px-24 py-4 text-xs" style={{background: "#090909", color: "#9b9998" }}>
          <TinaMarkdown content={data.footerCopy ? data.footerCopy.copyText: ""} />
          <p className="my-2 text-white font-bold">Copyright © 2020 - {new Date().getFullYear()}</p>  
        </div>   
    </footer>
  );
};
