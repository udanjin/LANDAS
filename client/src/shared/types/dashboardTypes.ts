export type CarouselImage = {
  id: number;
  src: string;
  alt: string;
};

export type NavLinkProps = {
  href?: string;
  children: React.ReactNode;
};

export type NavIconProps = {
  href?: string;
  children: React.ReactNode;
};

export type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  tags: string[];
};

export type ProductListItemProps = {
  image: string;
  name: string;
  brand: string;
  code: string;
  price: string;
  colors: string[]; // Array of color hex codes, e.g., ['#FFD700', '#000000', '#FFFFFF']
};
