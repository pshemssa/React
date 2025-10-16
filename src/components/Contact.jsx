import { Link } from 'react-router-dom';

function Contact() {
    return (
        <>
        <br/>
        <h1 className= "font-bold mx-120 text-xl mt-15 text-xl" >Contact Us</h1>
        <aside className='flex gap-20 mx-20 my-10'>
         <div>
        <img src="/images/hospital.png" className="w-80 h-full "/>
       </div>
       <div className="mt-15">
        <form class="space-y-4 top-5">
      <div>
        <label for="name" class="block text-gray-700 mb-1">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" 
               class="w-full px-4 py-2 border rounded-md " />
      </div>
      <div>
        <label for="email" class="block text-gray-700 mb-1">phone number</label>
        <input type="tel" id="phone" name="phone number" placeholder="tel" 
               class="w-full px-4 py-2 border rounded-md " />
      </div>
      <div>
        <label for="subject" class="block text-gray-700 mb-1">Doctor's name</label>
        <input type="text" id="subject" name="subject" placeholder="Subject" 
               class="w-full px-4 py-2 border rounded-md " />
      </div>
      <div>
        <label for="comment" class="block text-gray-700 mb-1">Comment</label>
        <textarea id="comment" name="comment" rows="4" placeholder="Your Comment" 
                  class="w-full px-4 py-2 border rounded-md "></textarea>
      </div>

    
      <button type="submit" 
              class="w-30 bg-blue-400 text-white py-2 rounded-full font-semibold hover:bg-pink-500 transition-colors">
        Submit
      </button>
    </form>
        <p className='pt-5'>If you have any questions or need assistance, please don't hesitate to reach out to us directly on</p>
        <p>Email: CureHelp@info.org</p>
        <p>Phone: 2456</p>
        </div>
        </aside> 
        <Link to="/doctors" className="bg-blue-400 p-5 rounded-full mx-120 mt-2 text-white">View Doctors</Link>
        </>
    )
}
export default Contact