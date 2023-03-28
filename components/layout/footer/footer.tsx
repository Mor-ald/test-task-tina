import { Button } from "primereact/button";
import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const Footer = ({ data }) => {
  return (
    <footer>
        <div className="relative flex flex-wrap justify-center px-4 py-12 bg-[url('/fonsvet.jpg')] md:px-12">
          <div className="absolute top-0 left-0 bg-black opacity-60" style={{minWidth: "100%", minHeight: "100%"}}></div>

        {!data.footerAbout ||
          <div className="my-6 flex flex-col grow-1 flex-wrap w-96 z-10 md:m-12">
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
                  <Button label="Подробнее" style={{background: "#ea6c45", border: 0, marginTop: "24px", fontWeight: "bold"}}></Button>
                </a>
              </div>
          </div> 
          }

          {!data.footerContacts ||
          <div className="my-6 flex flex-col grow-1 w-96 z-10 md:m-12">
            <div className="text-left mb-4">
              <p className="text-white font-bold text-2xl">{data.footerContacts.contHeader}</p>
              <span className="block my-4 w-16 h-1 bg-orange-600"></span>
            </div>
            <div className="flex my-4 items-center">
              <i className="pi pi-phone" style={{ fontSize: '1.3rem', color: "#e2400f", marginTop: "0.25rem" }}></i>
              <span className="ml-4"><a className="text-white underline font-bold text-lg hover:opacity-60" href={`tel:${data.footerContacts.contPhone}`}>{data.footerContacts.contPhone}</a></span> 
            </div>
            <div>
              <div className="flex my-4 items-center">
                <i className="pi pi-map-marker" style={{ fontSize: '1.3rem', color: "#e2400f", marginTop: "0.15rem" }}></i>
                <p className="ml-4 font-bold" style={{color: "#9b9998"}}>Наши адреса:</p>
              </div>
              <div className="text-white font-bold">
                {data.footerContacts.contAddress && data.footerContacts.contAddress.map((adr) => {
                  return (
                    <address className="my-2">
                        <p><a className="hover:opacity-60" href={`${adr.href}`}>{adr.label}</a></p>
                    </address>
                  );
                })}
              </div>

              <div className="mt-6 flex justify-center md:mr-0 md:justify-start">
                <a href="https://vk.com/armstospb" className="transition duration-150 ease-out mr-2 hover:opacity-60" target="_blank">
                  <img src="/arm_vk.svg" alt="" />
                </a>
                <a href="https://instagram.com/armsto.spb" className="transition duration-150 ease-out mx-2 hover:opacity-60" target="_blank">
                  <img src="/arm_instagram.svg" alt="" />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=79313996757&text&app_absent=0" className="transition duration-150 ease-out mx-2 hover:opacity-60" target="_blank">
                  <img src="/arm_whatsapp.svg" alt="" />
                </a>
              </div>

            </div>
          </div>
          }
        </div>
        <div className="px-4 py-4 text-xs md:px-24" style={{background: "#090909", color: "#9b9998" }}>
          <TinaMarkdown content={data.footerCopy ? data.footerCopy.copyText: ""} />
          <p className="my-2 text-white font-bold">Copyright © 2020 - {new Date().getFullYear()}</p>  
        </div>
    </footer>
  );
};
