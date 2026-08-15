export const BUSINESS = {
  name: "Brewed",
  currency: "INR",
  currencySymbol: "₹",

  delivery: {
    enabled: true,
    fee: 40,
    minimumOrder: 0,
  },

  tax: {
    enabled: true,
    rate: 5,
  },

  contact: {
    phone: "",
    email: "",
    address: "",
  },

  hours: {
    monday: { open: "09:00", close: "22:00" },
    tuesday: { open: "09:00", close: "22:00" },
    wednesday: { open: "09:00", close: "22:00" },
    thursday: { open: "09:00", close: "22:00" },
    friday: { open: "09:00", close: "22:00" },
    saturday: { open: "09:00", close: "22:00" },
    sunday: { open: "09:00", close: "22:00" },
  },
};
