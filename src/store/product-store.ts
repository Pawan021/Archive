import products from "@/database/products";
import { create } from "zustand";

type State = {
  products: any;
};

type Action = {
  addNewRow: () => void;
  addNewCol: (index: number) => void;
  deleteRow: (index: number) => void;
  reOrder: (products: any) => void;
  addNewProduct: (index: any, image:any, idx:any)=>void
};

const useProductStore = create<State & Action>((set) => ({
  products: products,
  addNewCol: (index: number) =>
    set((state) => {

      let products = state.products;
      for(let i=0; i<products.length; i++){
        products[i].images.push({isGrid: true})
      }
      
      return {
        products: products,
      };
    }),
  addNewRow: () =>
    set((state) => {
      let newProductList = state.products;
      newProductList.push({
        ...newProductList[newProductList.length - 1],
        id: newProductList.length+1,
      });
      return {
        products: newProductList,
      };
    }),
  deleteRow: (index: number) =>
    set((state) => {
      console.log(state.products);
      let filterProducts = state.products.filter((_: any, idx: any) => {
        return idx != index;
      });
      console.log(filterProducts)
      return {
        products: filterProducts,
      };
    }),
  reOrder: (products: any) =>
    set(() => {
      return {
        products: products,
      };
    }),
    addNewProduct: (index: any, image:any, idx:any)=>set((state)=>{
      let products = state.products;
      products[index].images[idx]=image;
      return {
        products: products
      }
    })
}));

export default useProductStore;
