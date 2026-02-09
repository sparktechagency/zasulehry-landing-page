"use client";
import React from "react";
import { User, Briefcase } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";

export default function SelectMethod({ trigger }: any) {
  const [selected, setSelected] = React.useState<string | null>(null);
  const router = useRouter();

  const handleSelect = () => {
    if (selected === "employer") {
      router.push("https://portal.jobsinapp.de/signup");
    } else {
      window.open(
        "https://play.google.com/store/games?device=windows",
        "_blank",
      );
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="">
        <div className="">
          <div className="">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Choose Your Role
              </h2>
              <p className="text-gray-600 text-sm">
                Select how you'd like to continue
              </p>
            </div>

            {/* Option Buttons */}
            <div className="space-y-4">
              {/* Job Seeker Option */}
              <button
                onClick={() => setSelected("jobseeker")}
                className={`
              w-full p-6 rounded-xl border-2 transition-all duration-300
              flex items-center gap-4 group
              ${
                selected === "jobseeker"
                  ? "border-blue-500 bg-blue-50 shadow-lg scale-105"
                  : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-md"
              }
            `}
              >
                <div
                  className={`
              p-3 rounded-lg transition-colors duration-300
              ${
                selected === "jobseeker"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600"
              }
            `}
                >
                  <User size={24} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Job Seeker
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Looking for opportunities
                  </p>
                </div>
                <div
                  className={`
              w-6 h-6 rounded-full border-2 transition-all duration-300
              flex items-center justify-center
              ${
                selected === "jobseeker"
                  ? "border-blue-500 bg-blue-500"
                  : "border-gray-300"
              }
            `}
                >
                  {selected === "jobseeker" && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </button>

              {/* Employer Option */}
              <button
                onClick={() => setSelected("employer")}
                className={`
              w-full p-6 rounded-xl border-2 transition-all duration-300
              flex items-center gap-4 group
              ${
                selected === "employer"
                  ? "border-indigo-500 bg-indigo-50 shadow-lg scale-105"
                  : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50 hover:shadow-md"
              }
            `}
              >
                <div
                  className={`
              p-3 rounded-lg transition-colors duration-300
              ${
                selected === "employer"
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-100 text-gray-600 group-hover:bg-indigo-100 group-hover:text-indigo-600"
              }
            `}
                >
                  <Briefcase size={24} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Employer
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Hiring talented professionals
                  </p>
                </div>
                <div
                  className={`
              w-6 h-6 rounded-full border-2 transition-all duration-300
              flex items-center justify-center
              ${
                selected === "employer"
                  ? "border-indigo-500 bg-indigo-500"
                  : "border-gray-300"
              }
            `}
                >
                  {selected === "employer" && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </button>
            </div>

            {/* Continue Button */}
            <button
              onClick={handleSelect}
              disabled={!selected}
              className={`
            w-full mt-8 py-4 rounded-xl font-semibold text-white cursor-pointer
            transition-all duration-300
            ${
              selected
                ? "bg-linear-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-lg hover:shadow-xl transform hover:scale-105"
                : "bg-gray-300 cursor-not-allowed"
            }
          `}
            >
              Continue
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
