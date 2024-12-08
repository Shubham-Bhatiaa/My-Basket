const forgotPasswordTemplate=({name,otp})=>{
    return `
    <div>
    <p>Dear, ${name}</p>
    <p>You are requested a password reset. Please use following OTP code to reset your password.</p>
    <div>
    <span style="background:yellow;font-size:20px">
    ${otp}
    </span>
    </div>
    <p>This otp is valid only for 1 hour. Enter this otp in the binkeyIt website to proceed with resetting your password.</p>
    <br/>
    <br/>
    <p>Thanks</p>
    <p>BinkeyIt</p>
    </div> 
    `
}

export default forgotPasswordTemplate