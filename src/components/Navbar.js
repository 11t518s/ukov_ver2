import React, {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import Menu from '../assets/img/menu.png';
import Logo from '../assets/img/logo.png';
import '../css/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar(props) {
    //반응형 네비게이션 바를 위한 세팅
    const Mobile = useMediaQuery({
        query: "(max-width : 1000px)"
    })
    const Web = useMediaQuery({
        query: "(min-width : 1000px)"
    })


    // 모바일 더보기를 위한 햄버거바 토글
    const [toggle, setToggle] = useState(false)


    // 페이지 이동 시 스크롤을 최상단으로~

    const Scroll = require('react-scroll');
    const scroll = Scroll.animateScroll;

    return (
        <>
            {Mobile &&
            <>
                <div className='navbar'>
                    <header>
                        <Link exact to='/home' onClick={() => {
                            scroll.scrollToTop();
                        }}><img className='logo' src={Logo} alt='logo'/></Link>
                        <img className='menu' src={Menu} alt='menu' onClick={() => setToggle(!toggle)}/>
                    </header>
                </div>
                {toggle ? (
                    <div className='moblieNav'>
                        <ul className='mobile'>
                            <li onClick={() => {
                                scroll.scrollToTop();
                            }}><Link onClick={() => setToggle(!toggle)} exact to='/home'>홈</Link></li>
                            <li onClick={() => {
                                scroll.scrollToTop();
                            }}><Link onClick={() => setToggle(!toggle)} exact to='/program'>프로그램</Link></li>
                            <li onClick={() => {
                                scroll.scrollToTop();
                            }}><Link onClick={() => setToggle(!toggle)} exact to='/recruit'>리크루팅</Link></li>
                        </ul>
                    </div>
                ) : null
                }
            </>
            }
            {Web &&
            <div className='navbar'>
                <header>
                    <Link exact to='/home'><img className='logo' src={Logo} alt='logo'/></Link>
                    <ul className='web'>
                        <li onClick={() => {
                            scroll.scrollToTop();
                        }}><Link exact to='/home'>홈</Link></li>
                        <li onClick={() => {
                            scroll.scrollToTop();
                        }}><Link exact to='/program'>프로그램</Link></li>
                        <li onClick={() => {
                            scroll.scrollToTop();
                        }}><Link exact to='/recruit'>리크루팅</Link></li>
                    </ul>
                </header>
            </div>
            }
        </>
    )
}


export default Navbar;
