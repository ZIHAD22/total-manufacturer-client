import React from "react";
import { CogIcon } from "@heroicons/react/solid";

const BusinessSummary = () => {
  return (
    <div className="shadow-xl rounded-xl">
      <h1 className="text-4xl text-center font-bold mt-20 mb-10">
        Our Business Summary
      </h1>
      <div
        className="stats stats-vertical lg:stats-horizontal w-full
     text-center mt-5 shadow"
      >
        <div className="stat">
          <div className="stat-title uppercase">Served customers</div>
          <div className="stat-value">100+</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title uppercase">Annual revenue</div>
          <div className="stat-value">180M+</div>
          <div className="stat-desc">↗︎ 180 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">tools</div>
          <div className="stat-value">500+</div>
          <div className="stat-desc flex justify-center items-center">
            <CogIcon className="w-6 h-6 text-center" />
            <span>Our Tools is world class</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
