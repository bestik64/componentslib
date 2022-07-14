import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Select from "./Select";

export default {
  title: "Components/Select",
  component: Select,
} as Meta;

const labels = ["Google", "Facebook", "Twitter"];

export const SelectComp = () => <Select optionLabels={labels} />;
