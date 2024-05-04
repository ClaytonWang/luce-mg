
export interface User {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  location: {
    country: string;
    city: string;
    state: string;
  };
  registered: {
    date: string;
  };
}

export interface CountryUsers {
  [key: string]: User[];
}
