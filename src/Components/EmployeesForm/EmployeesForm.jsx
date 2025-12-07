import { useFormik } from "formik";
import React, { useRef, useEffect } from "react";


export default function EmployeesForm({ open, setOpen }) {
  const firstInputRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      setTimeout(() => firstInputRef.current?.focus(), 10);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function onBackdropClick(e) {
    if (dialogRef.current && !dialogRef.current.contains(e.target)) {
      setOpen(false);
    }
  }

  return (
    <div className=" flex items-center justify-center p-6">

      {open && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center animate-fadeIn"
          onMouseDown={onBackdropClick}
        >
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 animate-fadeIn" />

          <div
            ref={dialogRef}
            className="relative z-50 w-full max-w-md mx-4 bg-white/80 rounded-2xl shadow-2xl overflow-hidden animate-scaleIn"
          >
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Adding New Employee
              </h3>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close form"
                className="p-2 rounded-md hover:bg-gray-100 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form className="px-6 py-6 space-y-4">
              <label className="block">
                <span className="text-sm text-gray-700 font-semibold">Name</span>
                <input
                  ref={firstInputRef}
                  name="name"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-indigo-300 outline-none placeholder:text-gray-500"
                  placeholder="Employee's Name"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-gray-700 ">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-200  bg-white  px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-indigo-300 outline-none placeholder:text-gray-500"
                  placeholder="you@example.com"
                />
              </label>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-md bg-gray-100  text-sm font-medium cursor-pointer hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-[#0B3D91] text-white text-sm font-semibold cursor-pointer hover:bg-blue-800"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Custom animation classes */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
