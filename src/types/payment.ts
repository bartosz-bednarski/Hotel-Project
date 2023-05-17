export type uniqueDates = {
  _id: string;
  rooms: [
    {
      id: string;
      number: string;
      type: string;
      price: number;
      firstName: string;
      secondName: string;
      email: string;
      phoneNumber: string;
    }
  ];
};
export type duplicates = uniqueDates;
export type paymentData = {
  uniquedates: uniqueDates;
  duplicates: duplicates;
};
export type IFormInput = {
  firstName: string;
  secondName: string;
  email: string;
  phoneNumber: string;
};
