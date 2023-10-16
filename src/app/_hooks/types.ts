export type MenuGroup = {
  id: string;
  title: string;
  image: string;
};

export type Menus = {
  id: string;
  title: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
  group: string;
};

export type Drink = {
  id: string;
  title: string;
  image: string;
};

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
