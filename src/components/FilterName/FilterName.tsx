import './FilterName.scss';
import { FormEventHandler } from "react";

type FilterNameProps = {
  searchName: string;
  onChange: FormEventHandler<HTMLInputElement>;

};

const FilterName = ({ searchName, onChange }: FilterNameProps) => {
    return (
      <div className="searchByName">
        <input
          type="text"
          value={searchName}
          onChange={onChange}
          className="searchByName__input"
          placeholder="Search by name"
        />
      </div>
    );
  };

export default FilterName;
