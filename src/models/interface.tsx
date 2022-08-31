export interface Product {
  idProduct: string;
  typeProduct: string;
  nameProduct: string;
  weight: number;
  price: number;
  img: string;
  description: string;
  countryOrigin: string;
  preparing: string;
  recomended: boolean;
  favorite: false;
}

export interface ShoppingCardProduct extends Product {
  piece: number;
}
