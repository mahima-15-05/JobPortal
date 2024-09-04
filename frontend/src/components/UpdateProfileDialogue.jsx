import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function UpdateProfileDialogue({ open, setOPen }) {
  return (
    <div>
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form action="" className="grid-gap-4 py-4">
            {/* Name */}
            <div className="grid grid-cols-4 items-center gap-4">
              <label
                htmlFor="name"
                className="text-right font-bold text-medium "
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border p-1 border-gray-500 focus:border-gray-600 rounded-sm h-8 col-span-3"
              />
            </div>

            {/* Email */}
            <div className="grid grid-cols-4 items-center gap-4">
              <label
                htmlFor="email"
                className="text-right font-bold text-medium "
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="border p-1 border-gray-500 focus:border-gray-600 rounded-sm h-8 col-span-3"
              />
            </div>

            {/* Number */}
            <div className="grid grid-cols-4 items-center gap-4">
              <label
                htmlFor="number"
                className="text-right font-bold text-medium "
              >
                Number
              </label>
              <input
                type="text"
                name="number"
                id="number"
                className="border p-1 border-gray-500 focus:border-gray-600 rounded-sm h-8 col-span-3"
              />
            </div>

            {/* Bio */}
            <div className="grid grid-cols-4 items-center gap-4">
              <label
                htmlFor="bio"
                className="text-right font-bold text-medium "
              >
                Bio
              </label>
              <input
                type="text"
                name="bio"
                id="bio"
                className="border p-1 border-gray-500 focus:border-gray-600 rounded-sm h-8 col-span-3"
              />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
