import Meta from "@/icons/meta";
import { Facebook, Image, Settings, Star } from "lucide-react";
import React from "react";

function Sidebar() {
  return (
    <>
      <div className="w-16 h-full flex justify-between items-center   flex-col px-2 py-7 fixed bg-black">
        <div className="space-y-8">
          <Star className="text-green-500" />
          <Image className="text-white" />
          <Facebook className="text-white" />
        </div>
        <div>
          <Settings className="text-white" />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
