import React from 'react'
import style from './Header.module.css';
import menu from '../../asset/menu.png';
import keep from '../../asset/keeps.png';
import searchicon from '../../asset/search.png'



function Header({ searchQuery, setSearchQuery, isSidebarOpen, setIsSidebarOpen }) {

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <header>
                <div className={style.top}>
                    <div className={style.topleft}>
                        <div className={style.menu} onClick={handleToggleSidebar}>
                            <img src={menu} alt="" />
                        </div>
                        <div className={style.logobox}>
                            <div>
                                <img src={keep} alt="" />
                                <span>Keep</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.searchbox}>
                        <button><img src={searchicon} alt="" /></button>
                        <input type="text" placeholder='Search' value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                </div>
            </header>
            <hr />
        </>
    )
}

export default Header