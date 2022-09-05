import './register.css';

export default function Register() {
  return (
    <div className='register'>
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">InstaSocial</h3>
                <span className="registerDesc">
                    Connect with friends and the world around you on Insta Social
                </span>
            </div>

            <div className="registerRight">
                <div className="registerBox">
                    <input placeholder="Username" className="registerInput" />
                    <input placeholder="Email" className="registerInput" />
                    <input placeholder="Password" className="registerInput" />
                    <input placeholder="Password again" className="registerInput" />
                    <button className="registerButton">Sign Up</button>
                    <button className="loginRegisterButton">Login to acoount</button>
                </div>
            </div>
        </div>
    </div>
  )
}
