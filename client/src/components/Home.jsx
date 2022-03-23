import './Home.css'
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
function Home() {
    return (
        <div className="container1">
            <div className='left'>
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
            </div>
        </div>
    )
}

export default Home