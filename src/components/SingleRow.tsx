import useProductStore from "@/store/product-store";
import { Grip, Plus, Trash } from "lucide-react";
import React from "react";
import AddImageModal from "./AddImageModal";
import toast from "react-hot-toast";

function SingleRow({ item, index }: { item: any; index: number }) {
  const { deleteRow, addNewCol } = useProductStore();
  return (
    <>
      <div className="w-full my-10 border ">
        <div className="flex my-4 group justify-center flex-row gap-4">
          <div className="flex flex-col w-1/12 items-end  justify-center gap-2">
            <div className="flex flex-col justify-center items-center space-y-2">
              <button
                onClick={() => {
                  deleteRow(index);
                  toast.success("state removed")
                }}
                className="hidden group-hover:block duration-200 transition-all"
              >
                <Trash className="text-red-600" />
              </button>
              <div className="flex gap-2 items-center justify-center">
                <span className="text-xl font-bold">{item.id}</span>
                <Grip />
              </div>
            </div>
          </div>
          <div className="w-4/12 rounded-lg ">
            <div className="bg-white rounded-lg py-4 mx-4 px-4 flex items-center  border min-h-[200px] justify-center gap-2 flex-wrap">
              <div className="flex flex-wrap items-center  justify-center gap-2">
                {item.tags.map((tag: any, index: number) => {
                  if (index == 1) {
                    return (
                      <>
                        <span className="border border-green-300 rounded-lg bg-green-100 px-2">
                          {tag}
                        </span>
                      </>
                    );
                  }
                  return (
                    <>
                      <span className="border rounded-lg bg-zinc-50 px-2">
                        {tag}
                      </span>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-7/12 overflow-y-scroll flex flex-row  gap-2 pb-4">
            {item.images.map((image: any, idx: any) => {
              if (image.isGrid) {
                return (
                  <>
                    <div className="w-[300px] min-w-[300px]  flex  items-center justify-between px-6 h-full border-r">
                      <div className=" bg-white h-full w-full border rounded-lg  px-6 py-6 flex flex-col justify-center space-y-2 items-center">
                        <AddImageModal index={index} idx={idx} />
                      </div>
                    </div>
                  </>
                );
              }
              return (
                <>
                  <div className="w-[300px] min-w-[300px]  flex  items-center justify-between px-6 h-full border-r">
                    <div className=" bg-white h-full w-full border rounded-lg  px-6 py-6 flex flex-col justify-center space-y-2 items-center">
                      <img
                        className="h-36 object-cover w-36 rounded-lg"
                        src={image.url}
                        alt=""
                      />
                      <p>{image.text}</p>
                    </div>
                  </div>
                </>
              );
            })}
            <div className="flex w-[100px] justify-center items-center">
              <button
                onClick={() => {
                  addNewCol(index);
                  toast.success("Varient added");
                }}
                className="px-2 border py-2 rounded-lg bg-white"
              >
                <Plus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleRow;
