// import {Doc2} from '../image/Doc2.jpg'
import { Link } from 'react-router-dom';
function Hospital(){
    return (
        <>
        <br/>
        <h1 className= "font-bold mx-120 text-xl mt-15" >Welcome to CureHelp platform</h1>
        <aside className='flex gap-20 mx-20 my-10'>
         <div>
        <img src="/images/staff.png" className="w-80 h-full "/>
       </div>
       <div className="mt-15">
        <p>Find the best hospitals near you and get the care you need.</p>
        <p>Book appointments, view services, and read reviews from other patients.</p><br/>
        <p>Your health is our priority. Trust CureHelp to connect you with top healthcare providers.</p>
        <p>Stay healthy with CureHelp!</p>
        <p>Contact us for more information and support.</p>
        <p>We are here to help you on your healthcare journey.</p>
        </div>
        </aside> 
        <Link 
        to="/contact" className="bg-blue-400 p-5 rounded-full mx-120 mt-2 text-white">Book appointment</Link>
        </>
    )
}

export default Hospital