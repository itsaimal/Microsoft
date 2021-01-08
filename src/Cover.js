import React from 'react'

function Cover() {
    return (
        <div className="flex justify-center">
            <div className="w h-96 bg-gray-200 flex">

<div className="mt-24 ml-11">
    <h1 className="text-3xl font-medium mb-6">Microsoft 365</h1>
    <p className="text-lg">Premium Office apps,extra cloud storage, advanced security, and</p>
    <p className="text-lg mb-6">more-all in one convenient subscription</p>
    <button className="bg-black text-white pl-4 pr-4 pt-2 pb-2 hover:text-gray-300">For up to 6 people ></button>
</div>


<div className="ml-96">
                <img className="w-96 h-96 object-contain" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4q2qk?ver=1006&q=90&m=8&h=431&w=767&b=%23FFFFFFFF&l=f&x=616&y=176&s=1304&d=733&aim=true"/>
                </div>

            </div>
            
        </div>
    )
}

export default Cover
