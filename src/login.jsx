import React ,{useState,useEffect}from 'react'
import {auth,provider} from "./Config";
import {signInWithPopup,FacebookAuthProvider,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";

const providers = new FacebookAuthProvider();
const Logins=({setValue})=>{
  const [logindata,setlogindata]=useState({email:"",password:""})
  const [create,setcreate]=useState(false)

//   const [value,setValue] = useState('')
const handlechange=(e)=>{
 let name=e.target.name;
 let value=e.target.value;
 setlogindata((prev)=>({...prev,[name]:value}))
}
  const handleClick =()=>{
      signInWithPopup(auth,provider).then((data)=>{
          setValue(data.user.email)
          localStorage.setItem("email",data.user.email)
      })
  }

  useEffect(()=>{
      setValue(localStorage.getItem('email'))
  })



  const loginwithfacebook=()=>{
signInWithPopup(auth, providers)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    setValue(user.email)
          localStorage.setItem("email",user.email)

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
      console.log(error)
    // ...
  });
  }
   
  const onHandleLogin = () => {
    // e.preventDefault()
    if (logindata.email !== "" && logindata.password !== "") {
      console.log(logindata)
      signInWithEmailAndPassword(auth, logindata.email, logindata.password)
        .then((e) => {
          
          setValue(e.user.email)
          localStorage.setItem("email",e.user.email)
    alert("login successfully")

        }
        )
        .catch((err) =>alert("Login error", err.message));
    }}


    const createLogin=()=>{
      if (logindata.email !== "" && logindata.password !== "") {
      console.log("crate logn",logindata)

      createUserWithEmailAndPassword(auth, logindata.email, logindata.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    setValue(user.email)
    localStorage.setItem("email",user.email)
    alert("created successfully")
    // console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("something went wrong")
    // ..
  });
    }
    }
    return(
        <>
        
      
        
        <div className="  bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 rounded-lg ">
        {/* <Link to="/"><CloseIcon className=" absolute z-10 top-4"/></Link>  */}

  <div className="max-w-md w-full space-y-4">
    <div>
      <img className="mx-auto h-12 w-auto" src="https://i.pinimg.com/736x/94/3f/cf/943fcf1ad73de4334e083475d1ab9541.jpg" />
      {
        create?
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">New account</h2>:
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      }
     
    </div>
    {
      create?

    <form className="mt-8 space-y-3" >
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address " className="sr-only">Email address</label>
          <input id="email-address" name="email" 
          type="email" autocomplete="email"
          value={logindata.email}
           onChange={handlechange}
           required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label for="password" className="sr-only">Password</label>
          <input id="password" name="password" 
          value={logindata.password}
          onChange={handlechange}

          type="password" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
          <label for="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-gray-500"> Forgot your password? </a>
        </div>
      </div>

      <div>
        <button type="button" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" onClick={()=>createLogin()}>
          
          Create
        </button>
       
      </div>
      <p className="font-medium text-center  text-gray-600 hover:text-gray-500   font-bold text-sm" onClick={(prev)=>setcreate(!prev)} > Alreday Have a Account</p>
        
    </form>:
        <form className="mt-8 space-y-3" >
        <input type="hidden" name="remember" value="true"/>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address " className="sr-only">Email address</label>
            <input id="email-address" name="email" 
            type="email" autocomplete="email"
            value={logindata.email}
             onChange={handlechange}
             required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
          </div>
          <div>
            <label for="password" className="sr-only">Password</label>
            <input id="password" name="password" 
            value={logindata.password}
            onChange={handlechange}
  
            type="password" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
          </div>
        </div>
  
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
            <label for="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
          </div>
  
          <div className="text-sm">
            <a href="#" className="font-medium text-gray-500"> Forgot your password? </a>
          </div>
        </div>
  
        <div>
          <button type="button" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" onClick={()=>onHandleLogin()}>
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              
              <svg className="h-5 w-5 text-yello-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
            Sign in
          </button>
         
        </div>
        <p className="font-medium text-center  text-gray-500 hover:text-gray-500   font-bold text-sm" onClick={()=>setcreate(true)} > Create  Account</p>
        
        
      </form>
    }
    <div>
    
    <hr className="text-gray-500" />
    {/* <div className="flex items-center justify-center "> */}

      <p className="font-medium text-center mt-2 text-gray-600 hover:text-gray-500   mb-2  font-bold text-sm" > Continue with</p>
      
      
  {/* </div> */}
    <div className="flex items-center justify-around ">

        <button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
        onClick={loginwithfacebook}
        >
  <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
  Sign in with Facebook
</button>
<button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
onClick={handleClick}
>
  <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
  Sign in with Google
</button>
    </div>
    </div>
  </div>
        
</div>

        </>
    )
}
export default Logins

