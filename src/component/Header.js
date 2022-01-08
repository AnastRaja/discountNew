import React from 'react'
import qustin from '../image/qustin.svg'
import plane from '../image/plane.svg'
import notification from '../image/notification.svg'
import meta from '../image/metamask.png'
import walletconnt from '../image/wallet.png'
import Logo from '../image/DiscountSales.png'





function Header() {
    return (
        <div>
            <header>
                <div className='mobile_hide'>
                <div class="form-group">
                    <div className='input_flex_clas'>
                    <i class="fas fa-search"></i>
                    <input type="email" class="form-control" id="" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                </div>
                </div>
                <div className='mobile_hide'>
                    <div className='header_link '>
                        <a href=''>
                            <img src={qustin} alt="" />
                        </a>
                        <a href=''>
                            <img src={plane} alt="" />
                        </a>
                        <a href=''>
                            <img src={notification} alt="" />
                        </a>
                        <a href='' className='connect_wal' data-toggle="modal" data-target="#exampleModalCenter">
                           <span>connect Wallet</span>
                        </a>
                    </div>
                   
                </div>
                <button class="navbar-toggler menu_hidden" type="button" data-toggle="collapse" data-target="#sidebar-wrapper" aria-controls="sidebar-wrapper" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                    </button>
                    <a href='' className='menu_hidden'>
                    <img src={Logo}  alt='logo'class="img-fluid logo "/>
                </a>
            
            </header>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Connect your Wallet</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div className='connect_walet'>
                    <div>
                        <img src={meta} alt=""/>
                        <p>MetaMask</p>
                         </div>
                         <div>
                        <img src={walletconnt} alt=""/>
                        <p>WalletConnect</p>
                         </div>
                </div>
            </div>
           
            </div>
        </div>
        </div>
        </div>
    )
}

export default Header
