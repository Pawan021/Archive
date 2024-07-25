import { MoveLeft } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <>
      <div className="ml-16 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <MoveLeft className="h-16 w-16" />
            <div className="pb-2 border-black min-w-[300px] border-b w-full ">
              <span className="text-3xl font-semibold">Rules creation</span>
            </div>
          </div>
          <div>
            <button className="px-3 py-2 rounded-lg bg-green-500 text-white">
              Publish Feed
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header