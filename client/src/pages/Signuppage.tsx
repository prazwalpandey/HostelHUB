import "../styles/signup.css";

const SignUp= ()=>{
const handleSubmit= ()=>{};
    return(
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="my flex flex-col bg-white px-10 py-10 m-10 " style={{width:"90vw", height:"90vh", margin:"5vw 5vh",overflowY: "auto"}}>
                
    <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">REGISTER</h2>
      <hr className="w-full my-1 border-t border-gray-300" />
      <form onSubmit={handleSubmit} className="w-full mt-5" >
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="name" className="font-medium text-blue-500">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="email" className="font-medium text-blue-500">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="Block" className="font-medium text-blue-500">
            Password
          </label>
          <input
            type="text"
            id="block"
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="contact" className="font-medium text-blue-500">
            Contact Number
          </label>
          <input
            type="text"
            id="contact"
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="rollNo" className="font-medium text-blue-500">
            Roll No
          </label>
          <input
            type="text"
            id="rollNo"
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="batch" className="font-medium text-blue-500">
            Batch
          </label>
          <input
            type="text"
            id="batch"
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="guardianName" className="font-medium text-blue-500">
            Guardian Name
          </label>
          <input
            type="text"
            id="guardianName"
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="guardianContact" className="font-medium text-blue-500">
            Guardian Contact
          </label>
          <input
            type="text"
            id="guardianContact"
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="grid grid-cols-4" style={{alignItems:"center",margin:"10px"}}>
          <label htmlFor="guardianRelationship" className="font-medium text-blue-500">
            Relation with Guardian
          </label>
          <input
            type="text"
            id="guardianRelationship"
            className="px-3 col-span-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="w-full flex flex-col mt-10">
            <div className="flex justify-center">
          <button
            type="submit"
            className=" w-1/5 mb-5 bg-blue-500  hover:bg-blue-600 text-white font-semibold  px-4 rounded focus:outline-none focus:ring focus:ring-blue-400"
            // onClick={}
            >
            Register
          </button>
          </div>
          <div className="flex justify-center">
          <button
            type="button"
            // onClick={}
            className="w-1/5 bg-gray-500 mb-5 hover:bg-gray-600 text-white font-semibold  px-4 rounded focus:outline-none focus:ring focus:ring-gray-400">
            Login
          </button>
          </div>
        </div>
      </form>
    </div>
 </div>  
    );
};

export default SignUp;