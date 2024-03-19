export const ExploreFilterBar = ({ setShowGroups, setSearchTerm }) => {
  const handleChangeGroup = () => {
    setShowGroups(true);
  };
  const handleChangeUser = () => {
    setShowGroups(false);
  };
  return (
    <>
      <div className="explore-filter-container">
        <button className="button" onClick={handleChangeGroup}>
          Groups
        </button>
        <button className="button" onClick={handleChangeUser}>
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
