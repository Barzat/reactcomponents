import React from "react";
import { user } from "./mock";
import SectionItem from "../components/SectionItem";

const Section = () => {
  return (
    <div>
      {user.map((item) => (
        <SectionItem key={item.id} user={item} />
      ))}
    </div>
  );
};

export default Section;
