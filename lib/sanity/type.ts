
export interface Category {
  slug: {
    current: string;
  },
  title: string;
}

export interface Product {
  title: string;
  slug: string;
  description: string;
  price: number;
  producer: {
    name: string;
    slug: {
      current: string;
    };
    logo: any;
  },
  category: Category;
  imageSrc: string;
}