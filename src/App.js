
import './App.css';
import './assets/output.css'
import Header from "./Header"
import Cover from "./Cover"

import CardPort from './CardPort';
import CoverTwo from './CoverTwo';
import CardPT from './CardPT';
import Footer from "./Footer"

function App() {
  return (
    <div className="">
      <Header/>
      <Cover/>
     
     <CardPort/>
     <CoverTwo/>
     <CardPT/>

     <div className="w-full h-20  mt-24 flex">
       <h1 className="mt-8 ml-5">Follow Microsoft</h1>
       <img className=" w-8 object-contain ml-5 " src="https://assets.stickpng.com/thumbs/584ac2d03ac3a570f94a666d.png"/>
       
       <img className="object-contain w-8 ml-3 " src="https://lh3.googleusercontent.com/proxy/2Jex_7I9fPdBuRBFZzx_cUYUTHJVOh5U8gvnv6sopDPGDeEXSJWweWorPWbmZ3EKhQkqdoFrAbpUlWiPImYNB76cY6zvhTAVqKUxaTjidjBqF5O5fmV5Db8wH-Y788UOuA"/>

       <img className="object-contain w-8 ml-3 " src="https://assets.stickpng.com/images/58e91afdeb97430e81906504.png"/>

     </div>

     <Footer/>
    
    </div>
  );
}

export default App;
