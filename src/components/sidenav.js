import React from "react";

const SideNav = () => {
  const styles = {
    base:
      "px-2 bg-red-400 text-gray-200 uppercase shadow-md flex flex-col w-1/3",
    link: "p-2 hover:text-white",
  };
  return (
    <div class="col-span-1 bg-red-600 text-gray-300 max-w-sm">
      <div className={styles.link}>Something</div>
    </div>
  );
};

export default SideNav;
