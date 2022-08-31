import { createContext } from "react";
import { Product } from "../models/interface";

export const Appcontext = createContext<Product[] | []>([]);
