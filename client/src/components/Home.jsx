import './Home.css'
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
function Home() {
    return (
        <div className="container1">
            <div className='left'>
                <div className='box11'> 
                <div className='box1'>
                    <h1>تابع ايجي بست</h1>
                    <div className='links'>
                    <a href="">EgyBestOriginal</a>
                    <AiFillFacebook className='linksf'/>
                    </div>

                    <div className='links'>
                    <a href="">EgyBestOriginal@</a>
                    <FaTwitterSquare className='linksf'/>
                    </div>
                </div>

                <div className='box2'>
                    <div className='link2'>
                        <a href='#'>افلام 2021</a>
                  
                        <a href='#'>افلام عربية</a>
                    </div>

                    <div className='link2'>
                        <a href='#'>افلام HD</a>
              
                        <a href='#'>افلام بلوراى</a>
                    </div>


                    <div className='link2'>
                        <a href='#'>افلام مصرية</a>
                
                        <a href='#'>افلام كورية</a>
                    </div>


                  
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home