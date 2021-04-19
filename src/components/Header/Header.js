import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <div className="header">
            <img className="header-icon"
                 src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                 alt="" />

            <div className="header-center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header-right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <AccountCircleIcon />
            </div>
        </div>
    )
}

export default Header
