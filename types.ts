import { Document } from "mongoose";

interface DecodedToken {
  id: string;
}

interface User {
  username: string;
  email: string;
  password: string;
  phoneNo: string;
  landlineNo: string;
  address: string;
}

interface UserDocument extends User, Document {}

interface Cart {
  name: string;
  image: string;
  discount_price?: number;
  quantity?: number;
  userID: string;
}

interface CartDocument extends Cart, Document {}

interface FavList {
  name: string;
  image: string;
  discount_price?: number;
  quantity?: number;
  userID: string;
}

interface FavListDocument extends FavList, Document {}

interface Home {
  name: string;
  image: string;
  price?: number;
  discount_price?: number;
  discount?: string;
  stock?: string;
  rating?: number;
  description?: string;
  brand?: string;
  isVisible?: boolean;
  quantity?: number;
  isAvailable?: boolean;
}

interface HomeDocument extends Home, Document {}

interface UserRequestBody {
  username: string;
  email: string;
  password: string;
  phoneNo: string;
  landlineNo: string;
  address: string;
}

interface Toiletries {
 name: string;
  image: string;
  price?: number;
  discount_price?: number;
  discount?: string;
  stock?: string;
  rating?: number;
  description?: string;
  brand?: string;
  isVisible?: boolean;
  quantity?: number;
  isAvailable?: boolean;
}

interface ToiletriesDocument extends Toiletries, Document {}

interface Grocery {
  name: string;
  image: string;
  price?: number;
  discount_price?: number;
  discount?: string;
  stock?: string;
  rating?: number;
  description?: string;
  brand?: string;
  isVisible?: boolean;
  quantity?: number;
  isAvailable?: boolean;
}

interface GroceryDocument extends Grocery, Document {}

interface Fruits {
  name: string;
  image: string;
  price?: number;
  discount_price?: number;
  discount?: string;
  stock?: number;
  rating?: number;
  description?: string;
  isAvailable?: boolean;
  isVisible?: boolean;
  quantity?: number;
}

interface FruitsDocument extends Fruits, Document {}

interface Vegetables {
  name: string;
  image: string;
  price?: number;
  discount_price?: number;
  discount?: string;
  stock?: number;
  rating?: number;
  description?: string;
  isAvailable?: boolean;
  isVisible?: boolean;
  quantity?: number;
}

interface VegetablesDocument extends Vegetables, Document {}

export {
  User,
  UserDocument,
  Cart,
  CartDocument,
  FavList,
  FavListDocument,
  Home,
  HomeDocument,
  DecodedToken,
  UserRequestBody,
  ToiletriesDocument,
  FruitsDocument,
  VegetablesDocument,
  GroceryDocument
};
