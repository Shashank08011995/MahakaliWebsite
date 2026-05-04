export type Testimonial = {
  name: string;
  location: string;
  title: string;
  quote: string;
  full?: string;
};

// Real testimonials adapted from the original site's "Stories" section.
// Names and locations are as published. Quotes are summarised; the original
// long-form stories are at https://mahakalivedichealingshelter.com/.
export const testimonials: Testimonial[] = [
  {
    name: "Rupa Anand",
    location: "Jharkhand, India",
    title: "Mental illness — my brother",
    quote:
      "What medical science cannot treat is possible through spiritual healing. After seven years, my brother recovered without lifelong psychiatric medication. Maa Kali's grace through Shweta Didi gave us our brother back.",
  },
  {
    name: "Sonal",
    location: "Noida, India",
    title: "A marriage saved",
    quote:
      "A cross mark appeared on my shoulder and spread. My marriage was breaking. Through Didi we discovered black magic done by a relative to sabotage us. After the cure, Maa Kali helped us overcome the pain. Six months later our marriage is whole again.",
  },
  {
    name: "Shruti",
    location: "Mumbai · Riyadh · Dubai",
    title: "Years of abuse, finally lifted",
    quote:
      "After years of abuse, kidney problems no doctor could explain, and my son's grades collapsing — I came to Shweta Didi in 2013. She identified six family members responsible for curses against me. What followed was nothing less than a miracle.",
  },
  {
    name: "Rahul",
    location: "New Delhi, India",
    title: "From stuck to soaring",
    quote:
      "Other practitioners had only made things worse. After Didi diagnosed and performed a Very Special Prosperity Puja, my concentration returned, my work flowed, job offers came, and a loan was approved. What seemed unrealistic now feels attainable.",
  },
  {
    name: "Ira",
    location: "India",
    title: "Memory restored",
    quote:
      "I had severe memory loss. Doctors found nothing. Shweta madam diagnosed black magic affecting my mental abilities. A Saraswati Puja during Navratri gave me back my mind. The grace of Maa Saraswati flowed through her.",
  },
  {
    name: "A devoted family",
    location: "Toronto, Canada",
    title: "Peace returned to our home",
    quote:
      "Our home felt heavy for years. After the cleansing rituals you guided us through, we sleep peacefully again. Our children laugh louder. Thank you for not turning us away.",
  },
];

export const featuredTestimonials = testimonials.slice(0, 3);
