export type SupportedLang = "en" | "hi" | "ru" | "de";

export interface Translation {
  logo: string;
  nav: {
    home: string;
    products: string;
    about: string;
    contact: string;
  };
  home: {
    heading: string;
    paragraph: string;
    button: string;
  };
  about: {
    heading: string;
    paragraph: string;
    list: string[];
  };
  products: {
    heading: string;
    items: {
      name: string;
      desc: string;
      image: string;
    }[];
  };
  contact: {
    heading: string;
    paragraph: string;
    form: {
      name: string;
      email: string;
      message: string;
      button: string;
    };
    info: {
      email: string;
      phone: string;
      address: string;
      emailLabel: string;
      phoneLabel: string;
      addressLabel: string;
    };
  };
}
