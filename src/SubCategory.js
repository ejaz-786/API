import { Button, Select } from '@shopify/polaris'
import React, { useEffect, useState } from 'react'

const SubCategory = (props) => {
  const [categOption,setCategOption] = useState([])
  let categData = props.subCategData;
  const test = () =>{
    console.log(props.subCategData);
    let temp=[]
    for(let i in categData){
      for(let j in categData[i]){
        let obj={label:"",value:""}
        obj["label"]=categData[i][j].label;
        obj["value"]=categData[i][j].label;
        temp.push(obj)
      }
    }
    setCategOption([...temp])
}
  return (
    <>
      <div className='wrapper2'>
           <div>
        
           <Select
                  placeholder='select'
                  requiredIndicator={true}
                  label="Amazon Attribute"
                  options={categOption}
                  // onChange={(e) => optionHandlechange(e, index)}
                  // value={name[index]}
                />
           </div>
           <div>
            <Button primary
            onClick={test}
            >Add Attribute</Button>
           </div>
      </div>
    </>
  )
}

export default SubCategory
