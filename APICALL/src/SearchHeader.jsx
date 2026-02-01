import { useState } from "react";

function SearchHeader({ search }) {
  const [value, setValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>Ne ariyorsunuz?</label>
        <input value={value} onChange={handleChange} />
      </form>
    </>
  );
}

export default SearchHeader;
