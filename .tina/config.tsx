import { defineConfig } from "tinacms";
import { contentBlockSchema } from "../components/blocks/content";
import { featureBlockSchema } from "../components/blocks/features";
import { heroBlockSchema } from "../components/blocks/hero";
import { sliderBlockSchema } from "../components/blocks/slider";
import { testimonialBlockSchema } from "../components/blocks/testimonial";
import { ColorPickerInput } from "../components/fields/color";
import { iconSchema } from "../components/util/icon";
import { servicesBlockSchema } from "../components/blocks/services";
import { featuresArmBlockSchema } from "../components/blocks/featuresArm";
import { AskQuestionBlockSchema } from "../components/blocks/askQuestion";
import { PartnersBlockSchema } from "../components/blocks/parthners";
import { edemArmBlockSchema } from "../components/blocks/edem";
import { yandexRevBlockSchema } from "../components/blocks/yandexRev";
import { aboutArmBlockSchema } from "../components/blocks/about";
import { vacanciesArmBlockSchema } from "../components/blocks/vacancies";
import { contactsArmBlockSchema } from "../components/blocks/contacts";
import { listlinksBlockSchema } from "../components/blocks/listLinks";
import { priceTableBlockSchema } from "../components/blocks/priceTable";
import { photosGalleryBlockSchema } from "../components/blocks/photosGallery";
import { servTemplateBlockSchema } from "../components/blocks/servTemplate";


const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH! || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    process.env.HEAD!, // Netlify branch env
  token: process.env.TINA_TOKEN!,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
    collections: [
      {
        label: "Blog Posts",
        name: "post",
        path: "content/posts",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            return `/posts/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "heroImg",
            label: "Hero Image",
          },
          {
            type: "rich-text",
            label: "Excerpt",
            name: "excerpt",
          },
          {
            type: "reference",
            label: "Author",
            name: "author",
            collections: ["author"],
          },
          {
            type: "datetime",
            label: "Posted Date",
            name: "date",
            ui: {
              dateFormat: "MMMM DD YYYY",
              timeFormat: "hh:mm A",
            },
          },
          {
            type: "rich-text",
            label: "Body",
            name: "_body",
            templates: [
              {
                name: "DateTime",
                label: "Date & Time",
                inline: true,
                fields: [
                  {
                    name: "format",
                    label: "Format",
                    type: "string",
                    options: ["utc", "iso", "local"],
                  },
                ],
              },
              {
                name: "BlockQuote",
                label: "Block Quote",
                fields: [
                  {
                    name: "children",
                    label: "Quote",
                    type: "rich-text",
                  },
                  {
                    name: "authorName",
                    label: "Author",
                    type: "string",
                  },
                ],
              },
              {
                name: "NewsletterSignup",
                label: "Newsletter Sign Up",
                fields: [
                  {
                    name: "children",
                    label: "CTA",
                    type: "rich-text",
                  },
                  {
                    name: "placeholder",
                    label: "Placeholder",
                    type: "string",
                  },
                  {
                    name: "buttonText",
                    label: "Button Text",
                    type: "string",
                  },
                  {
                    name: "disclaimer",
                    label: "Disclaimer",
                    type: "rich-text",
                  },
                ],
                ui: {
                  defaultItem: {
                    placeholder: "Enter your email",
                    buttonText: "Notify Me",
                  },
                },
              },
            ],
            isBody: true,
          },
        ],
      },

      {
        label: "Global",
        name: "global",
        path: "content/global",
        format: "json",
        ui: {
          global: true,
        },
        fields: [
          {
            type: "object",
            label: "Header",
            name: "header",
            fields: [
              {
                type: "string",
                label: "Logo",
                name: "logo",
              },
              {
                type: "string",
                label: "Time to start work",
                name: "startTime",
              },
              {
                type: "string",
                label: "Time to end work",
                name: "endTime",
              },
              {
                type: "object",
                label: "Address",
                name: "address",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.label };
                  },
                },
                fields: [
                  {
                    type: "string",
                    label: "Ссылка на адрес",
                    name: "href",
                  },
                  {
                    type: "string",
                    label: "Имя адреса",
                    name: "label",
                  },
                ],
              },
              {
                type: "object",
                label: "Phones",
                name: "phones",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.phone };
                  },
                },
                fields: [
                  {
                    type: "string",
                    label: "Телефон",
                    name: "phone",
                  },
                  {
                    type: "string",
                    label: "Адрес",
                    name: "address",
                  },
                ],
              },
              {
                type: "string",
                label: "email",
                name: "email",
              },
              iconSchema as any,
              {
                type: "string",
                label: "Name",
                name: "name",
              },
              {
                type: "string",
                label: "Color",
                name: "color",
                options: [
                  { label: "Default", value: "default" },
                  { label: "Primary", value: "primary" },
                ],
              },
              {
                type: "object",
                label: "Элементы навигации",
                name: "nav",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.label };
                  },
                  defaultItem: {
                    href: "home",
                    label: "Home",
                  },
                },
                fields: [
                  {
                    type: "string",
                    label: "Ссылка",
                    name: "href",
                  },
                  {
                    type: "string",
                    label: "Наименование",
                    name: "label",
                  },
                  {
                    type: "string",
                    label: "Наименование иконки",
                    name: "icon"
                  }
                ],
              },
            ],
          },
          {
            type: "object",
            label: "Footer",
            name: "footer",
            fields: [
              {
                type: "object",
                label: "About",
                name: "footerAbout",
                ui: {
                  itemProps: (item) => {
                    return { label: item?.phone };
                  },
                },
                fields: [
                  {
                    type: "string",
                    label: "Header",
                    name: "aboutHeader",
                  },
                  {
                    type: "string",
                    label: "Email",
                    name: "aboutEmail",
                  },
                  {
                    type: "rich-text",
                    label: "Text",
                    name: "abotText",
                  },
                ],
              },
              
              {
                type: "object",
                label: "Contacts",
                name: "footerContacts",
                ui: {
                  itemProps: (item) => {
                    return { label: item?.phone };
                  },
                },
                fields: [
                  {
                    type: "string",
                    label: "Header",
                    name: "contHeader",
                  },
                  {
                    type: "string",
                    label: "Phone",
                    name: "contPhone",
                  },
                  {
                    type: "object",
                    label: "Address",
                    name: "contAddress",
                    list: true,
                    ui: {
                      itemProps: (item) => {
                        return { label: item?.label };
                      },
                    },
                    fields: [
                      {
                        type: "string",
                        label: "Address Link",
                        name: "href",
                      },
                      {
                        type: "string",
                        label: "Address Name",
                        name: "label",
                      },
                    ],
                  },
                ],
              },
              
              

              {
                type: "object",
                label: "Copyright",
                name: "footerCopy",
                ui: {
                  itemProps: (item) => {
                    return { label: item?.phone };
                  },
                },
                fields: [
                  {
                    type: "rich-text",
                    label: "Text",
                    name: "copyText",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            label: "Theme",
            name: "theme",
            // @ts-ignore
            fields: [
              {
                type: "string",
                label: "Primary Color",
                name: "color",
                ui: {
                  component: ColorPickerInput,
                },
              },
              {
                type: "string",
                name: "font",
                label: "Font Family",
                options: [
                  {
                    label: "System Sans",
                    value: "sans",
                  },
                  {
                    label: "Nunito",
                    value: "nunito",
                  },
                  {
                    label: "Lato",
                    value: "lato",
                  },
                ],
              },
              {
                type: "string",
                name: "darkMode",
                label: "Dark Mode",
                options: [
                  {
                    label: "System",
                    value: "system",
                  },
                  {
                    label: "Light",
                    value: "light",
                  },
                  {
                    label: "Dark",
                    value: "dark",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "Authors",
        name: "author",
        path: "content/authors",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Name",
            name: "name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            label: "Avatar",
            name: "avatar",
          },
        ],
      },
      {
        label: "Pages",
        name: "page",
        path: "content/pages",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`;
            }
            if (document._sys.filename === "about") {
              return `/about`;
            }
            return undefined;
          },
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            description:
              "The title of the page. This is used to display the title in the CMS",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            ui: {
              visualSelector: true,
            },
            templates: [
              heroBlockSchema,
              sliderBlockSchema,
              // @ts-ignore
              featureBlockSchema,
              contentBlockSchema,
              testimonialBlockSchema,
              servicesBlockSchema,
              featuresArmBlockSchema,
              AskQuestionBlockSchema,
              PartnersBlockSchema,
              edemArmBlockSchema,
              yandexRevBlockSchema,
              aboutArmBlockSchema,
              vacanciesArmBlockSchema,
              contactsArmBlockSchema,
              listlinksBlockSchema,
              priceTableBlockSchema,
              photosGalleryBlockSchema,
              servTemplateBlockSchema
            ],
          },
        ],
      },
      
      {
        label: "Услуги Газель 4216",
        name: "serviceGaz4216",
        path: "content/gaz4216",
        format: "md",
        ui: {
          router: ({ document }) => {
            return `/gaz4216/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            label: "Header",
            name: "header",
        },
        {
            type: "string",
            label: "Время выполенения работы",
            name: "time",
        },
        {
            type: "string",
            label: "Коэффициент",
            name: "coef",
        },
        {
            type: "string",
            label: "Модель",
            name: "model",
        },
        ],
      },

      {
        label: "Услуги Соболь",
        name: "serviceSobol",
        path: "content/sobol",
        format: "md",
        ui: {
          router: ({ document }) => {
            return `/sobol/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            label: "Header",
            name: "header",
        },
        {
            type: "string",
            label: "Время выполенения работы",
            name: "time",
        },
        {
            type: "string",
            label: "Коэффициент",
            name: "coef",
        },
        {
            type: "string",
            label: "Модель",
            name: "model",
        },
        ],
      },

      {
        label: "Услуги ГАЗон Некст",
        name: "serviceNext",
        path: "content/next",
        format: "md",
        ui: {
          router: ({ document }) => {
            return `/next/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            label: "Header",
            name: "header",
        },
        {
            type: "string",
            label: "Время выполенения работы",
            name: "time",
        },
        {
            type: "string",
            label: "Коэффициент",
            name: "coef",
        },
        {
            type: "string",
            label: "Модель",
            name: "model",
        },
        ],
      },

      {
        label: "Услуги Газель-Некст 2,8",
        name: "serviceNext28",
        path: "content/next28",
        format: "md",
        ui: {
          router: ({ document }) => {
            return `/next28/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            label: "Header",
            name: "header",
        },
        {
            type: "string",
            label: "Время выполенения работы",
            name: "time",
        },
        {
            type: "string",
            label: "Коэффициент",
            name: "coef",
        },
        {
            type: "string",
            label: "Модель",
            name: "model",
        },
        ],
      },

      {
        label: "Услуги Газель-Некст 2,7",
        name: "serviceNext27",
        path: "content/next27",
        format: "md",
        ui: {
          router: ({ document }) => {
            return `/next27/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            label: "Header",
            name: "header",
        },
        {
            type: "string",
            label: "Время выполенения работы",
            name: "time",
        },
        {
            type: "string",
            label: "Коэффициент",
            name: "coef",
        },
        {
            type: "string",
            label: "Модель",
            name: "model",
        },
        ],
      },

      {
        label: "Услуги Лада",
        name: "serviceLada",
        path: "content/lada",
        format: "md",
        ui: {
          router: ({ document }) => {
            return `/lada/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            label: "Header",
            name: "header",
        },
        {
            type: "string",
            label: "Время выполенения работы",
            name: "time",
        },
        {
            type: "string",
            label: "Коэффициент",
            name: "coef",
        },
        {
            type: "string",
            label: "Модель",
            name: "model",
        },
        ],
      },
    ],
  },
});

export default config;
