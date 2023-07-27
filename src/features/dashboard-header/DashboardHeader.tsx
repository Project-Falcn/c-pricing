
export function DashboardHeader() {
  return (
    <div className="dashboard-header">
      
      {/* todo.. move searchbox in to separate component */}
      <div className="search-box">
        <div className="search-icon">
          <i className="fas fa-s fa-search"></i>
        </div>

        <input
          type="search"
          className="form-control focus"
          placeholder="Search" />
        <a className="">
          <i className="bi-x-lg" />
        </a>
      </div>

    </div>
  );
} 