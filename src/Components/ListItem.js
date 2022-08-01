import React from "react";

function ListItem({ index, heading="", value="" }) {
  return (
    <div
      className={`${
        index % 2 == 0 ? "bg-gray-50 " : "bg-white "
      } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
    >
      <dt className="text-sm font-medium text-gray-500">{heading.toUpperCase()}</dt>
      <dd className={`overscroll-auto	 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2`}>
        {typeof(value)!=='string' ? (value.length ? value?.join(", ") : value): value}
      </dd>
    </div>
  );
}

export default ListItem;
