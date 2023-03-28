import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Sidebar } from 'primereact/sidebar';
import { useTheme } from ".";


export const Header = ({ data }) => {
  const router = useRouter();
  const theme = useTheme();
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  const headerColor = {
    default:
      "text-black dark:text-white from-gray-50 to-white dark:from-gray-800 dark:to-gray-900",
    primary: {
      blue: "text-white from-blue-300 to-blue-500",
      teal: "text-white from-teal-400 to-teal-500",
      green: "text-white from-green-400 to-green-500",
      red: "text-white from-red-400 to-red-500",
      pink: "text-white from-pink-400 to-pink-500",
      purple: "text-white from-purple-400 to-purple-500",
      orange: "text-white from-orange-400 to-orange-500",
      yellow: "text-white from-yellow-400 to-yellow-500",
    },
  };

  const headerColorCss =
    data.color === "primary"
      ? headerColor.primary[theme.color]
      : headerColor.default;

  const activeItemClasses = {
    blue: "border-b-3 border-blue-200 text-blue-700 dark:text-blue-300 font-medium dark:border-blue-700",
    teal: "border-b-3 border-teal-200 text-teal-700 dark:text-teal-300 font-medium dark:border-teal-700",
    green:
      "border-b-3 border-green-200 text-green-700 dark:text-green-300 font-medium dark:border-green-700",
    red: "border-b-3 border-red-300 text-red-700 dark:text-green-300 font-medium dark:border-red-700",
    pink: "border-b-3 border-pink-200 text-pink-700 dark:text-pink-300 font-medium dark:border-pink-700",
    purple:
      "border-b-3 border-purple-200 text-purple-700 dark:text-purple-300 font-medium dark:border-purple-700",
    orange:
      "border-b-3 border-orange-200 text-orange-700 dark:text-orange-300 font-medium dark:border-orange-700",
    yellow:
      "border-b-3 border-yellow-300 text-yellow-700 dark:text-yellow-300 font-medium dark:border-yellow-600",
  };

  const activeBackgroundClasses = {
    blue: "text-blue-500",
    teal: "text-teal-500",
    green: "text-green-500",
    red: "text-red-500",
    pink: "text-pink-500",
    purple: "text-purple-500",
    orange: "text-orange-500",
    yellow: "text-yellow-500",
  };

  // If we're on an admin path, other links should also link to their admin paths
  const [prefix, setPrefix] = React.useState("");

  React.useEffect(() => {
    if (window && window.location.pathname.startsWith("/admin")) {
      setPrefix("/admin");
    }
  }, []);

  return (
    <div id="header_container" className={`relative overflow-hidden bg-gradient-to-b ${headerColorCss}`}>
      <div className="relative px-2 py-8 bg-[url('/fonsvet.jpg')] text-white md:py-4">
        <div className="flex flex-col justify-between w-4/5 mx-auto lg:flex-row">
          
          {/* Work time */}
          <div className="flex items-start justify-center my-4">
            <i className="pi pi-clock" style={{ fontSize: '1.3rem', color: "#e2400f", marginTop: "0.15rem" }}></i>
            <span className="ml-3 font-bold text-sm">C <span className="text-orange-400">{data.startTime}</span> до <span className="text-orange-400">{data.endTime}</span></span>
          </div>
          {/* Work time */}
          
          {/* Address */}
          <div className="flex items-start justify-center my-4">
            <i className="pi pi-map-marker" style={{ fontSize: '1.3rem', color: "#e2400f", marginTop: "0.25rem" }}></i>
            <div className="ml-3">
              {data.address && data.address.map((item) => {
                return <p><a className="hover:opacity-60" href={`${item.href}`}>{item.label}</a></p>
              })}
            </div>
          </div>
          {/* Address */}

          {/* Phones */}
          <div className="flex items-start justify-center my-4">
            <i className="pi pi-phone" style={{ fontSize: '1.3rem', color: "#e2400f", marginTop: "0.45rem" }}></i>
            <div className="ml-5">
              {data.phones && data.phones.map((item) => {
                return <>
                  <address className="flex flex-col items-start justify-center border-l-3 pl-4 my-2 border-orange-600 font-bold text-sm">
                    <span><a className="transition duration-150 ease-out hover:text-orange-400" href={`tel:${item.phone}`}>{item.phone}</a></span>
                    <p className="leading-4">{item.address}</p>
                  </address>
                </>
              })}

              <div className="mt-6 flex justify-center mr-8 md:mr-0 md:justify-start">
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
          {/* Phones */}

          {/* Social */}
          <div className="flex justify-center my-4">
            <a href={`mailto:${data.email}`} className="flex items-center py-4 px-6 mt-2 h-14 bg-orange-600">
              <i className="pi pi-envelope" style={{ fontSize: '1.2rem', color: "#fff", marginTop: "0.25rem"}}></i>
              <span className="ml-3 font-bold text-sm text-white whitespace-nowrap">{data.email}</span>
            </a>
          </div>
          {/* Social */}

        </div>
      </div>

      {/* Sidebar */}
      <div className="fixed cursor-pointer p-3 top-0 right-0 z-10 bg-orange-600 hover:opacity-75 xl:hidden" onClick={() => setVisibleSidebar(true)}>
        <div>
          <div className="flex justify-center items-center">
            <i className="pi pi-bars" style={{ fontSize: '1.2rem', color: "#fff"}}/>
          </div>
        </div>
      </div>
      <Sidebar visible={visibleSidebar} onHide={() => setVisibleSidebar(false)} position={"right"}>
          <div className="my-4">
            <a href="/home">
              <img src={`/${data.logo}`} alt="logo"/>
            </a>
            <div className="mt-6">
              {data.nav &&
                data.nav.map((item) => {
                  return (
                    <div className="flex items-center ml-4 my-2 text-orange-600 font-bold text-lg transition duration-150 ease-out hover:opacity-60">
                      <i className={`pi pi-${item.icon}`} style={{fontSize: "1.2rem"}}></i>
                      <Link href={`${prefix}/${item.href}`} passHref>
                        <a className={"ml-2 font-bold"} onClick={() => setVisibleSidebar(false)}>
                          {item.label}
                        </a>
                      </Link>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </Sidebar>
      {/* Sidebar */}

      <div className="py-0 my-8 relative w-4/5 mx-auto xl:mt-8 xl:mb-0">
        <div className="items-center justify-center">
          <a className="my-8" href="/home">
            <img className="mx-auto" src={`/${data.logo}`} width={370} alt="logo"/>
          </a>
          <ul className="hidden justify-center gap-6 sm:gap-8 lg:gap-10 tracking-[.002em] -mx-4 ml-3 xl:flex">
            {data.nav &&
              data.nav.map((item, i) => {
                const activeItem =
                  item.href === ""
                    ? router.asPath === "/"
                    : router.asPath.includes(item.href);
                return (
                  <li
                    key={`${item.label}-${i}`}
                    className={`${
                      activeItem ? activeItemClasses[theme.color] : ""
                    }`}
                  >
                    <Link href={`${prefix}/${item.href}`} passHref>
                      <a
                        className={`inline-block relative select-none	text-base font-bold whitespace-nowrap tracking-wide transition duration-150 ease-out hover:opacity-70 py-8 ${
                          activeItem ? `` : `opacity-100`
                        }`}
                      >
                        {item.label}
                        {activeItem && (
                          <svg
                            className={`absolute bottom-0 left-1/2 w-[180%] h-full -translate-x-1/2 -z-1 opacity-10 dark:opacity-15 ${
                              activeBackgroundClasses[theme.color]
                            }`}
                            preserveAspectRatio="none"
                            viewBox="0 0 230 230"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="230"
                              y="230"
                              width="230"
                              height="230"
                              transform="rotate(-180 230 230)"
                              fill="url(#paint0_radial_1_33)"
                            />
                            <defs>
                              <radialGradient
                                id="paint0_radial_1_33"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(345 230) rotate(90) scale(230 115)"
                              >
                                <stop stopColor="currentColor" />
                                <stop
                                  offset="1"
                                  stopColor="currentColor"
                                  stopOpacity="0"
                                />
                              </radialGradient>
                            </defs>
                          </svg>
                        )}
                      </a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div
          className={`absolute h-1 bg-gradient-to-r from-transparent ${
            data.color === "primary" ? `via-white` : `via-black dark:via-white`
          } to-transparent bottom-0 left-4 right-4 -z-1 opacity-5`}
        />
      </div>

    </div>
  );
};
