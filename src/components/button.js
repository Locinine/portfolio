import React from "react";

export default function Button({ children, ...buttonProps }) {
  const styles = {
    base:
      "px-2 py-1 rounded-lg bg-green-400 text-green-800 text-xl font-light uppercase shadow-md",
    hover: "hover:shadow-lg",
  };

  return (
    <button className={styles.root} {...buttonProps}>
      {children}
    </button>
  );
}
