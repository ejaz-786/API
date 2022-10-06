import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [full_data, setFull_data] = useState([]);
  const [subCategData, setsubCategData] = useState();

  const getApi = async (url, select, condition) => {
    // console.log(select);
    let response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        user_id: "63329d7f0451c074aa0e15a8",
        "Content-Type": "application/json",
        appTag: "amazon_sales_channel",
        authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjI5MGRiYjIzOGUyOWExYjIzMzYwY2E5Iiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjk2NTY4MDE3LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzM2U1ZjUxYWRkZGFlMjIyNjczN2E5MiJ9.m5LW1XQ_w6E8Y_ZAWV-SqoqLUpgyeQXe3R7aGKhCfkxA0h0i2oESFxS3NXvsqU2zBWO9iPa5vobjXypZCEo7ZbjieaowfryVym-Yc2Kc-SkfHJfr7a2QrXxfKql0nBX0SvgEfVdWKxmVb3AK7MyT60gVUCCh82H7ExXntXA46oTvIQkK2rMTC1pCAFxFcWPTUEvz2yfuyLf62533dDfbdWwnYBxOYXrTUBN9E6aOsbl8MDfglV7bRIiKCXF1hTRjyOzUzqp_Tns4kg3oT2zXKpv7mLFcPpEPnYveRP4TGi_N5gRjfyA4o7xAxTHIxmhlRrY7ZEFUx-BcW6aZz7tYNw",
        "Ced-Source-Id": 500,
        "Ced-Source-Name": "shopify",
        "Ced-Target-Id": 530,
        "Ced-Target-Name": "amazon",
      },
      body: JSON.stringify({
        ...select,
        target_marketplace: "eyJtYXJrZXRwbGFjZSI6ImFsbCIsInNob3BfaWQiOm51bGx9",
        user_id: "63329d7f0451c074aa0e15a8",

        target: {
          marketplace: "amazon",
          shopId: "530",
        },
      }),
    });
    let datas = await response.json();
    if (condition === true) {
      setFull_data([...full_data, datas]);
      console.log(datas);
      setData(datas.data);
    } else {
      console.log("else part");
      setsubCategData(datas.data);
    }
  };

  return { data, getApi, full_data, setFull_data, subCategData };
};
export default useFetch;
