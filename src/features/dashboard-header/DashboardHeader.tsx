import { useState } from 'react';

export function DashboardHeader() {
  const [isSearchClicked, setSearchClicked] = useState<boolean>(false);

  const searchTextControl = isSearchClicked ?
    <input
      type="search"
      className="form-control focus"
      placeholder="Search" />
    :
    <div className="search-icon">
      <i className="fas fa-xs fa-search"></i>
    </div>;

  return (
    <div className="dashboard-header">
      {/* <div className='action-buttons'>
        <i className='far fa-refresh'></i>
      </div> */}

      <div className="search-box">
        {searchTextControl}
      </div>

      <div className='action-buttons'>
      <i className="cil-settings"></i>


        <i className='fas fa-user-circle'></i>
        <i className='fas fa-ellipsis-v'></i>
      </div>
    </div>
  );
} 