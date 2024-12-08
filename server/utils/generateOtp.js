const generateOtp=()=>{
   return Math.floor(Math.random()* 900000)+100000
}

export default generateOtp