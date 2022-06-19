import { Props as ProductCardPropos } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductButtonsProps} from "../components/ProductButtons";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProdcutContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  maxCount?: number;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardPropos) :JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
}

export interface onChangeArgs {
  count: number;
  product: Product;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardhandlers {
  count: number;
  isMaxCountReached: boolean; 
  maxCount?: number;
  product: Product;

  increaseBy: ( value:number ) => void;
  reset: () => void;
}