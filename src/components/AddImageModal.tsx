import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { Image, Plus, Search } from "lucide-react";
import products from "@/database/products";
import useProductStore from "@/store/product-store";
import toast from "react-hot-toast";

function AddImageModal({ index, idx }: { index: any; idx: any }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { addNewProduct } = useProductStore();
  const onInsert = (onClose: any, image: any, idx: any) => {
    addNewProduct(index, image, idx);
    toast.success("Varient template updated");
    onClose();
  };
  return (
    <>
      <button
        onClick={onOpen}
        className="flex justify-center items-center px-2 py-2 border rounded-lg"
      >
        <Plus />
        Add Design
      </button>
      <Modal
        scrollBehavior="inside"
        size="5xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <Image className="text-green-500" />
                <div className="flex mt-4 justify-between">
                  <h1 className="text-xl font-semibold">
                    Select a design to link
                  </h1>
                  <Input
                    className="w-[200px]"
                    startContent={<Search />}
                    placeholder="Search"
                  />
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 ">
                  {products.map((product: any) => {
                    return (
                      <>
                        {product.images.map((image: any) => {
                          if (image.isGrid == false)
                            return (
                              <>
                                <div className="  bg-white relative w-full group">
                                  <img
                                    className="w-full aspect-square object-cover rounded-lg"
                                    src={image.url}
                                    alt=""
                                  />
                                  <button
                                    onClick={() => {
                                      onInsert(onClose, image, idx);
                                    }}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                 bg-white text-black rounded-lg px-4 py-2 
                 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                  >
                                    Insert
                                  </button>
                                </div>
                              </>
                            );
                        })}
                      </>
                    );
                  })}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddImageModal;
