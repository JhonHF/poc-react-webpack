import React, { lazy, Suspense } from "react";
import ListElements from "../../molecules/listElements";
import { StyledTitle } from "./styles";
import logo from "../../../assets/favicon.jpg"
//const ListElements = lazy(() => import("../../molecules/listElements"));

export const Home = () => {
  return (
    <div>
      <StyledTitle>hola</StyledTitle>
      {/*         <Suspense fallback={<p>Loading</p>}>
      <ListElements />
      </Suspense> */}
      <img src={logo}/>
      <ListElements />
    </div>
  );
};
