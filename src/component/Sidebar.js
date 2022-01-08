import React from 'react'
import Logo from '../image/DiscountSales.png'
import HomeLogo from '../image/home.svg'
import nftLogo from '../image/nft.svg'
import promotionLogo from '../image/promotion.svg'


import DiscouintLogo from '../image/discount.svg'


import { Link  } from '@material-ui/core';

function Sidebar() {
    return (
        <div>
            <div className='close menu_hidden'>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebar-wrapper" aria-controls="sidebar-wrapper" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><i class="far fa-times-circle"></i></span>
                    </button>
            </div>
            <div className='side_bar_new'>
                <a href=''>
                    <img src={Logo}  alt='logo'class="img-fluid logo"/>
                </a>

                <div className='nav_link'>
                    <div className='side_bar_link active'>
                     <Link><img src={HomeLogo}  alt='logo'class="img-fluid"/> Home</Link>
                    </div>
                    <div className='side_bar_link'>
                     <Link><img src={DiscouintLogo}  alt='logo'class="img-fluid"/> Discount</Link>
                    </div>
                    <div className='side_bar_link'>
                     <Link><img src={nftLogo}  alt='logo'class="img-fluid"/> NFTs</Link>
                    </div>
                    <div className='side_bar_link'>
                     <Link><img src={promotionLogo}  alt='logo'class="img-fluid"/> Promotions</Link>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar
