/**
 * content/testimonials.ts
 * 17 de-duplicated client reviews (the original site had Krystal Mumford and
 * Breeze Giacoletto as identical text — kept once here as "Krystal Mumford").
 *
 * Display note: do NOT add self-serving Review/AggregateRating schema to the site.
 * Let star ratings live on Google/Facebook. `featured` flags the 3 shown on the homepage.
 */

export interface Testimonial {
  name: string;
  rating: 5;
  quote: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: "Jeremy Standifird",
    rating: 5,
    featured: true,
    quote:
      "Witt Law provided a great deal of help and support throughout a difficult experience. I felt like I could contact them anytime I had questions. My situation was dealt with in a timely, and ultimately painless, manner. Fast, fair, and friendly — they're as good as they come.",
  },
  {
    name: "Krystal Miller",
    rating: 5,
    featured: true,
    quote:
      "Marshall Witt and his office are amazing! I went to him for my divorce when I didn't know what to do, and he was the only attorney in town who didn't want to talk money first. He took an hour to listen to me. Thank you, Witt Law! I've already referred two people!",
  },
  {
    name: "Danny Thomas",
    rating: 5,
    featured: true,
    quote:
      "Words cannot express how impressed we were with Marshall Witt and his team. He took the time to get to know us and explained things in a simple, clear way. We've dealt with a few lawyers in the past and none came near his level of knowledge and professionalism. I'd highly recommend Witt Law as the best law office in the St. George area.",
  },
  {
    name: "Rich Parker",
    rating: 5,
    quote:
      "Even the little things are taken care of. Makes me feel safe knowing everything is handled!",
  },
  {
    name: "Josh Werner",
    rating: 5,
    quote:
      "Marshall treated us like family and yet was also professional. His staff is excellent and the office is beautiful. They'll take good care of you.",
  },
  {
    name: "Ricardo Cetz",
    rating: 5,
    quote:
      "I had an excellent experience with this firm. Not only did they provide excellent service, but they're people-driven.",
  },
  {
    name: "Mike's Garage",
    rating: 5,
    quote:
      "I did my divorce with Witt Law and it truly was as good as it could be. As stressful as divorce is, they calmed my nerves and answered all my questions. Even though my case was small, I felt like it got the same attention as any other. I'd recommend Witt Law without a doubt.",
  },
  {
    name: "Greg Nettles",
    rating: 5,
    quote:
      "I contacted Marshall Witt to represent my college-age son who got into legal trouble. Marshall and the staff were great and provided real comfort and reassurance — and he took extra steps to help my son understand the process and follow through. I highly recommend Witt Law Offices.",
  },
  {
    name: "Louis Barlow",
    rating: 5,
    quote:
      "Marshall and his office were easy to talk to and understanding of my situation. He reached an agreement far better than I could have expected in a situation that could have been life-altering. I highly recommend the Witt Law office to anyone seeking legal help.",
  },
  {
    name: "AnnaMarie Martin",
    rating: 5,
    quote:
      "They sure do care about their clients. If I ever need these services again, I know where I'll be turning.",
  },
  {
    name: "Brian Blair",
    rating: 5,
    quote:
      "The best law firm in town! Marshall knows his stuff and really cares about his clients. You won't be disappointed having him on your side.",
  },
  {
    name: "Taylor Reddish",
    rating: 5,
    quote:
      "An amazing lawyer who helped with my very complicated and long custody battle. Highly recommend him for his patience and support.",
  },
  {
    name: "Krystal Mumford",
    rating: 5,
    quote:
      "I met with Marshall and he spent over an hour hearing what I needed, and actually listened. He wasn't worried about money right off the bat like other lawyers in town. I know where I'll be going for all my legal needs. These folks are amazing!",
  },
  {
    name: "Hailey Twede",
    rating: 5,
    quote:
      "Witt Law was extremely professional and worked fast on a frustrating issue. My car was towed and damaged while I was on vacation, and the tow company wouldn't own up to it. With Witt Law's help I recovered the money I was owed — all in under a week. Forever grateful. 10/10 would recommend.",
  },
  {
    name: "Michael Wall",
    rating: 5,
    quote:
      "Marshall is wonderful! He helped my family tremendously and took all the weight off. He carried us through and we didn't have to worry about a thing.",
  },
  {
    name: "Derek Vowles",
    rating: 5,
    quote:
      "Marshall and the staff at Witt Law did an amazing job. They made me feel comfortable, like they were getting me the best possible result.",
  },
  {
    name: "Will Adams",
    rating: 5,
    quote:
      "Incredibly attentive and professional. He's worked miracles for me. I'd recommend Marshall to anyone who needs legal help.",
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);
