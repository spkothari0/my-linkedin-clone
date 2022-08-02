import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>

      <div className="header__left">
        left side
        <img src="" alt="LinkedIn Icon" />
        <div className="header__search">
          {/* <SearchIcon /> */}
          <input type="text" />
        </div>

      </div>

      <div className="header__right">
        rigt side
      </div>

    </div>
  )
}

export default Header
