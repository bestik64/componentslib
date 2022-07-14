import './Select.css'

export interface SelectProps {
  optionLabels: string[];
}

const Select = ({ optionLabels }: SelectProps) => {
  return (
    <div className="selectContainer">
      <label htmlFor="login">Choose a login</label>
      <select name="login" id="login">
        {optionLabels &&
          optionLabels.map((opt) => <option value={opt}>{opt}</option>)}
      </select>
    </div>
  );
};

export default Select;
