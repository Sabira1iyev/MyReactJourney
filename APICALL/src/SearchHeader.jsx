function SearchHeader({search}) {

    const handleFormSubmit = () => {

    }

  return(
  <div className="searchDiv">
    <form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="">Ne Ariyorsunuz?</label>
        <input type="text"/>
    </form>
  </div>
  );
}

export default SearchHeader;
