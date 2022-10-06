import { Select } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import SubCategory from "./SubCategory";
import useFetch from "./useFetch";
let url = `https://multi-account.sellernext.com/home/public/connector/profile/getAllCategory/`;

const SelectCompo = () => {
  // const [option, setOption] = useState([]);
  const { data, getApi, full_data, setFull_data,subCategData } = useFetch();
  const [selected, setSelected] = useState("");
  const [name, setName] = useState([]);
  const [condition,setCondition] = useState(true);
  const [show,setShow] = useState(false);
  useEffect(() => {
    getApi(url);
  }, []);

  useEffect(() => {
    getApi(url, selected,condition);
  }, [selected]);

  const optionHandlechange = (e, index) => {
    console.log(index);
    // console.log(full_data.length - 1);
    if (index < full_data.length){
      full_data.splice(index + 1);
      name.splice(index);

      setFull_data(full_data);
      setName(name);
    }

    full_data[index].data.map((val) => {
      if (val.name === e) {
        setName((value) => [...value, e]);

        if (val.hasChildren) {
          setSelected({selected: val.parent_id});
        } else {
             setShow(true);
          // getApi(url2)
        url = `https://multi-account.sellernext.com/home/public/connector/profile/getCategoryAttributes/`;

        getApi(url,{
          source: {
            marketplace: "amazon",
            shopId: 500,
          },
          data: {
            barcode_exemption: false,
            browser_node_id: val.browseNodeId,
            category: val.category["primary-category"],
            sub_category: val.category["sub-category"],
          },
        },false)
          
        }
      }
    });
  };


  return (
    <>
      <div className="wrapper1">
        <div className="first-box">
          <div>
            {full_data.map((val, index) => {
              return (
                <Select
                  key={index}
                  placeholder='select'
                  requiredIndicator={true}
                  label="Amazon Attribute"
                  options={full_data[index].data.map((val, i) => ({
                    label: val.name,
                    value: val.name,
                  }))}
                  // options={optionss[index]}
                  onChange={(e) => optionHandlechange(e, index)}
                  value={name[index]}
                />
              );
            })}
          </div>
          {
            show  && <SubCategory subCategData={subCategData}/>
          }
        </div>
      </div>
    </>
  );
};

export default SelectCompo;
