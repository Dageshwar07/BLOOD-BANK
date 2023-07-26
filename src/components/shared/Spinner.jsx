import React from "react";
import { Oval } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <>


      <Oval

        height={70}
        width={70}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="blue"
        strokeWidth={2}
        strokeWidthSecondary={2}

      />




    </>
  );
};

export default Spinner;
