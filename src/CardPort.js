import React from 'react'
import Card from './Card'

function CardPort() {
    return (
        <div className="grid grid-cols-4 mr-24">
            <Card img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4CFyx?ver=25c5&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&x=839&y=615&aim=true" h1="Microsoft Teams" p="Chat, meet, call and collaborate" button="Learn more"/>
            <Card img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rzE2?ver=aa0b&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true"   h1="Introducing the new Microsoft Edge" p="World-class performance with more privacy, more productivity and more value while you browse." button="Learn more"/>

            <Card img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3hD2k?ver=6539&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true"
           h1="Microsoft OneDrive"
           p="Save your files and photos to OneDrive and access them from any device, anywhere."
            button="Learn more"/>

            <Card img="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE37Bcs?ver=e981&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" h1="Windows 10 Update" p="Bringing you new features to help you pursue your passions, make better connections and give back some time." button="Learn more"/>
           
        </div>
    )
}

export default CardPort
