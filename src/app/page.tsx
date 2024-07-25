"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/sidebar";
import SingleRow from "@/components/SingleRow";
// import products from "@/database/products";
import useProductStore from "@/store/product-store";
import { Delete, Dot, Grip, MoveLeft, Plus, Trash } from "lucide-react";
import { Arapey } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Reorder, AnimatePresence } from "framer-motion";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import toast from "react-hot-toast";
export default function Home() {
  const { products, addNewRow } = useProductStore();
  const [productItem, setProductItem] = useState(products);
  const [maxVarient, setMaxVarient] = useState(2);

  useEffect(() => {
    setProductItem(products);
  }, [products]);
  useEffect(() => {
    let filter = products.map((product: any) => {
      return product.images.length;
    });
    let maxLen = filter.reduce((accumulator: any, currentValue: any) => {
      return Math.max(accumulator, currentValue);
    }, filter[0]);
    setMaxVarient(maxLen);
  }, [products]);
  return (
    <>
      <Sidebar />
      <Header />
      <div className=" border mx-20 px-6 min-h-screen rounded-lg py-20 bg-zinc-50">
        <div className="flex gap-4">
          <div></div>
          <div className="w-5/12 py-2  border-r">
            <p className="text-zinc-400 text-center">Product Filter</p>
          </div>
          <div className="w-7/12 overflow-y-scroll flex flex-row  gap-2 pb-4">
            {productItem[0].images.map((value: any, idx: any) => {
              return (
                <>
                  <div
                    key={value}
                    className="w-[300px] min-w-[300px] px-6 flex  items-center justify-between border-r"
                  >
                    <p className="text-zinc-400 text-center">
                      {idx === 0 ? "Primary varient" : `Varient ${idx + 1}`}
                    </p>
                    <div className="flex -space-y-4 flex-col">
                      <Dot className="text-zinc-400" />
                      <Dot className="text-zinc-400" />
                      <Dot className="text-zinc-400" />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <Reorder.Group onReorder={setProductItem} values={productItem}>
          {productItem.map((item: any, index: any) => {
            return (
              <>
                <Reorder.Item key={index} value={item}>
                  <SingleRow index={index} item={item} />
                </Reorder.Item>
              </>
            );
          })}
        </Reorder.Group>

        <div className="mx-20">
          <button
            onClick={()=>{
              addNewRow();
              toast.success("state added")
            }}
            className="px-2 py-2 border rounded-lg
          bg-white"
          >
            <Plus />
          </button>
        </div>
      </div>
    </>
  );
}
