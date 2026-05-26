export type Article = {
  id: string;
  category: "FIBER" | "IMPACT" | "GUIDE";
  title: string;
  summary: string;
  readTime: string;
  featured: boolean;
  image: string;
  url: string;
};

export const articles: Article[] = [
  {
    id: "1",
    category: "IMPACT",
    title: "Fast fashion's detrimental effect on the environment",
    summary: "The industry is responsible for 10% of global carbon emissions — more than all international flights and shipping combined.",
    readTime: "6 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800",
    url: "https://earth.org/fast-fashions-detrimental-effect-on-the-environment/",
  },
  {
    id: "2",
    category: "IMPACT",
    title: "The hidden water footprint of fashion",
    summary: "A single cotton t-shirt requires 2,700 litres of water — enough for one person to drink for 2.5 years.",
    readTime: "3 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?w=800",
    url: "https://geographical.co.uk/news/the-hidden-water-footprint-of-fashion",
  },
  {
    id: "3",
    category: "GUIDE",
    title: "How to read clothing tags",
    summary: "Your clothing labels hold more info about quality and sustainability than you think. Here's how to decode them.",
    readTime: "10 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800",
    url: "https://www.sustainablejungle.com/how-to-read-clothing-tags/",
  },
  {
    id: "4",
    category: "GUIDE",
    title: "Fixing your clothes: how to repair & mend almost anything",
    summary: "The most sustainable clothes are the ones you already own. Here's how to make them last.",
    readTime: "5 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800",
    url: "https://moralfibres.co.uk/fixing-your-clothes-how-to-repair-mend-almost-anything/",
  },
  {
    id: "5",
    category: "FIBER",
    title: "Sustainable fashion trends taking over 2026",
    summary: "From eco-friendly fabrics to circular fashion — the new rules every conscious consumer should know.",
    readTime: "4 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800",
    url: "https://www.projectcece.com/blog/774/sustainable-fashion-trends-and-predictions/",
  },

  {
    id: "6",
    category: "GUIDE",
    title: "Sustainable clothing certifications explained",
    summary: "GOTS, OEKO-TEX, Fair Trade — what these labels actually mean and which ones to trust in 2026.",
    readTime: "7 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800",
    url: "https://elexyfy.com/blog/sustainable-clothing-certifications-guide-2025/",
  },
  {
    id: "7",
    category: "IMPACT",
    title: "Greenwashing in fashion: 10 red flags to spot",
    summary: "Brands are getting smarter with fake eco claims. Here's how to tell real sustainability from marketing spin.",
    readTime: "5 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    url: "https://nomorenobody.com/blogs/news/greenwashing-in-fashion-10-red-flags-to-watch-out-for-in-2026",
  },
  {
    id: "8",
    category: "IMPACT",
    title: "Fast fashion environmental impact: 2026 verified stats",
    summary: "The industry consumes enough water annually to supply 28 million people. The numbers are staggering.",
    readTime: "8 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=800",
    url: "https://worldmetrics.org/fast-fashion-environmental-impact-statistics/",
  },
];
