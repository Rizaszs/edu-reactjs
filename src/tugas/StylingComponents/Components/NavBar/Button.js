import React from "react";

export default function Button({ className, variant, href, children }) {
  const addClassName = className ? `${className}` : "";
  const variants = {
    btnNavbar: `border bg-black/50 border-yellow-500 text-yellow-500 font-semibold text-lg hover:scale-110 hover:bg-yellow-500 hover:text-white duration-300`,
    form: `bg-yellow-500 text-white hover:bg-yellow-600 mx-1 px-7 `,
  };
  const pickedVariant = variants[variant];
  return (
    <a
      className={`py-3 px-10 rounded-full ${pickedVariant}${addClassName}`}
      href={href}
    >
      {children}
    </a>
  );
}
