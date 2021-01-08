import React from 'react'

function Header() {
    return (
        <div className="bg-white w-full h-14 flex shadow-md">
            {/* left */}
            <div className="ml-20">
                <img className="w-24 object-contain" src="https://cdn.vox-cdn.com/thumbor/T0r74loeMvtK93oAbHZBiAPit3I=/7x0:633x417/1400x788/filters:focal(7x0:633x417):format(jpeg)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"/>
                </div>

                {/* middle */}

                <div className="flex ml-10 mt-3 ">
                    <h1 className="cursor-pointer hover:border-black border-b mb-6">Microsoft 365</h1>
                    <h1 className="cursor-pointer ml-4 hover:border-black border-b mb-6">Office</h1>
                    <h1 className="cursor-pointer ml-4 hover:border-black border-b mb-6">Windows</h1>
                    <h1 className="cursor-pointer ml-4 hover:border-black border-b mb-6">Support</h1>

                </div>

                {/* right */}
                <div className="flex absolute right-12 mt-3 ">
                    <h1 className="cursor-pointer hover:border-black border-b  mr-5">All Microsoft</h1>
                    <img className="cursor-pointer  w-8 mr-5 object-contain" src="https://assets.stickpng.com/thumbs/585e4ad1cb11b227491c3391.png"/>


                    <img className="cursor-pointer  w-9 mr-5 object-contain" src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"/>

                    <img className="cursor-pointer  w-9 object-contain" src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"/>
                </div>
            
            
        </div>
    )
}

export default Header
