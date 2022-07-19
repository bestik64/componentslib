import './Select.css'
import { chakra } from "@chakra-ui/react"
export interface SelectProps {
  optionLabels: string[];
}

const Select = ({ optionLabels }: SelectProps) => {
  return (
    <div className="selectContainer">
      <label htmlFor="login">Choose a login</label>
      <chakra.select name="login" id="login" bg='blueviolet' color='white' marginLeft='20px'>
        {optionLabels &&
          optionLabels.map((opt) => <option value={opt}>{opt}</option>)}
      </chakra.select>
    </div>
  );
};

export default Select;
