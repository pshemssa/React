
function Doctors(){ 
    const doctors = [{
        name: "Dr. Adeline Parker",
        specialty: "Genecologist",
        experience: "10 years",
        location: "kacyiru",
        contact: "0782356876",
        image: "images/ladyada.png"
    
    },
 {
    name: "Dr. Jane Smith",
    specialty: "Dermatologist",
    experience: "8 years",
    location: "kabeza",
    contact: "0788234321",
    image : "images/mrman.png"
 }]
    return (
        <>
        <br/>
    <h1 className="font-bold text-xl mx-130 mt-10">Doctors Page</h1>
    <div className="p-10 shadow-md mx-80 ">
        <p>Find the best doctors near you and get the care you need.</p>
        <p>Book appointments, view services, and read reviews from other patients.</p>
       </div>
       <div>
        {doctors.map((doctor, index) => (
            <div key={index} className="p-4 m-20 rounded shadow-md flex gap-10 justify-between">
                <div>
                <img src={doctor.image} alt={doctor.name} className="w-40 h-40 rounded-full mx-30" />
                <h3 className="font-semibold mx-30">{doctor.name}</h3>
                </div>
                <div className=" text-center mx-50 mt-10 ">
                <p><span className="font-bold text-blue-400">Specialty: </span>{doctor.specialty}</p>
                <p><span className="font-bold text-blue-400">Experience: </span>{doctor.experience}</p>
                <p><span className="font-bold text-blue-400">Location: </span>{doctor.location}</p>
                <p><span className="font-bold text-blue-400">Contact:</span> {doctor.contact}</p>
                </div>
            </div>
        ))}
         </div>
    </>
    )
}
export default Doctors