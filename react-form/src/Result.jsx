import React, { useState, useContext } from "react";
import { DataContext, useData } from "./DataContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

function Result() {
  const { data, setData } = useContext(DataContext);

  console.log(data);
  const arrData = data.keys(data);
  return (
    <div>
      {arrData.map((form) => {
        return <PrintResult form={form} />;
      })}
    </div>
  );
}

function PrintResult({ form }) {
  return (
    <div>
      <ul>
        <li>
          <h1>
            {form.firstName} {form.lastName}
          </h1>
          <p>{form.data.email}</p>
          <p>{form.data.phoneNumber}</p>
        </li>
      </ul>
    </div>
  );
}
export default Result;
