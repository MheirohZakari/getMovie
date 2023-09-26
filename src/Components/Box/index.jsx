import React from "react";
import {Content,Wrapper} from "./box.styles";






const Box =({header,children})=>(
    <>
    <Wrapper>
      <h1>{header}</h1>
      <Content>
        {children}
      </Content>
    </Wrapper>
    </>
)
export default Box;