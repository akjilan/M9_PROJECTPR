import React from "react";

const PriceCard = ({ price }) => {
  return (
    <>
      <div className="bg-purple-300 p-6 rounded-md">
        <h2 className="text-3xl font-extrabold text-purple-900 ">
          {price.price}/<span className="text-sm">Month</span>
        </h2>
        <h3 className="text-2xl font-bold text-purple-900 tracking-wider ">{price.productName}</h3>
        <h4>features are :</h4>
        {
            price.features.map(feature=> <li className="list-inside">{feature}</li> )
        }
      </div>
    </>
  );
};

export default PriceCard;
