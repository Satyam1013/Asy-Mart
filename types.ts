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
  title: string;
  image: string;
  discount_price?: number;
  quantity?: number;
  userID: string;
}

interface CartDocument extends Cart, Document {}

interface FavList {
  title: string;
  image: string;
  discount_price?: number;
  quantity?: number;
  userID: string;
}

interface FavListDocument extends FavList, Document {}

interface Home {
  title: string;
  image: string;
  discount_price?: number;
  original_price?: number;
  discount?: string;
  rating?: number;
  features?: string;
  total_ratings?: string;
  reviews?: string;
  cod?: string;
  description?: string;
  availability?: string;
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
  UserRequestBody
};
