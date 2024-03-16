export const ExploreFilterBar = ({ setShowGroups }) => {
  const handleChange = () => {
    setShowGroups((prevGroupState) => !prevGroupState);
  };
  return (
    <>
      <div className="explore-filter-container">
        <button className="button" onClick={handleChange}>
          Groups
        </button>
        <button className="button" onClick={handleChange}>
          Users
        </button>
      </div>
      <div className="filter-bar-container">
        <div></div>
        <div></div>
        <div className="filter-bar">
          {/* input bar */}
          <input
            type="text"
            placeholder="Search"
            className="filter-option"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

<div className="filter-bar-container">
  <div></div>
  <div></div>
  <div className="filter-bar">
    {/* input bar */}
    <input
      type="text"
      placeholder="Search"
      className="filter-option"
      onChange={(event) => {
        setSearchTerm(event.target.value);
      }}
    />
  </div>
</div>;
