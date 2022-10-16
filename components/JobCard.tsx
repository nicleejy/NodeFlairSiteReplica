import { time } from "console";
import React, { FunctionComponent } from "react";
import { IJob } from "../types";

const JobCard: FunctionComponent<{ job: IJob }> = ({
  job: {
    company,
    jobTitle,
    monthlySalaryLower,
    monthlySalaryUpper,
    duration,
    category,
    skills,
    imgURL,
  },
}) => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "SGD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className="flex flex-col justify-between h-full p-5">
      <div className="flex flex-row items-center sm:flex-col sm:items-start">
        <img
          className="items-start object-cover object-center w-20 h-20 text-left rounded-lg sm:mx-auto sm:w-28 sm:h-28"
          src={imgURL}
          alt={company}
        />
        <div className="pl-5 sm:p-0 ">
          <h3 className="mt-5 mb-1 font-light text-md font-opensans">
            {company}
          </h3>

          <h1 className="text-xl font-bold font-opensans ">{jobTitle}</h1>

          <div
            className={`flex items-center mt-2 ${
              monthlySalaryLower === undefined ||
              monthlySalaryUpper === undefined
                ? "invisible"
                : ""
            }`}
          >
            <h3 className="mb-1 font-light text-md font-opensans">
              {formatter.format(monthlySalaryLower)} -{" "}
              {formatter.format(monthlySalaryUpper)} / Monthly
            </h3>

            <div className="px-2 py-1 mx-3 bg-gray-100 rounded-md">
              <h2 className="text-sm font-light text-gray-600 font-opensans">
                EST
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mt-5">
          <h2 className="text-base italic font-bold font-opensans text-green">
            about {duration} hours ago
          </h2>
          <div className="px-2 py-1 bg-green-100 rounded-md">
            <h2 className="text-base font-semibold font-opensans text-green">
              {category}
            </h2>
          </div>
        </div>

        <hr className="my-3"></hr>

        <div className="flex">
          {skills.slice(0, 4).map((skill) => (
            <div
              key={skill}
              className="px-2 py-1 m-1 bg-gray-100 rounded-md whitespace-nowrap w"
            >
              <h2 className="text-base font-bold text-gray-600 font-opensans">
                {skill}
              </h2>
            </div>
          ))}

          {skills.length > 4 && (
            <div className="px-2 py-1 m-1 bg-gray-100 rounded-md">
              <h2 className="text-base font-bold text-gray-600 font-opensans">
                ...
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
