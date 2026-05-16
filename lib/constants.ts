export const CONTACT_INFO = {
  phone: "7299972020",
  displayPhone: "+91 72999 72020",
  whatsappPhone: "917299972020",
  email: "olive.orchardpartyhalls@gmail.com",
  address: "148, 1, Arcot Rd, opp. to Arcot Shopping Mall, Near Ambika Theatre, Ganga Nagar, Kodambakkam, Chennai, Tamil Nadu 600024",
  googleMapsUrl: "https://maps.app.goo.gl/3A52672d38b7a807",
};

export const getWhatsappUrl = (text: string) => {
  return `https://wa.me/${CONTACT_INFO.whatsappPhone}?text=${encodeURIComponent(text)}`;
};
