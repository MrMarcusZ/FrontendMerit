import '../../App.css';
import './Login.css';
import react from 'react';
import HeroSection from '../HeroSection';


class Login extends react.Component{
    constructor(props){
        super(props);
      }
componentDidMount(){
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
    	container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
    	container.classList.remove("right-panel-active");
    });
  }
  render(){
    return(
      <div class="container" id="container">
      	<div class="form-container sign-up-container">
      		<form action="#">
      			<h1>Create Account</h1>
      			<span>or use your email for registration</span>
      			<input type="text" placeholder="Name" />
      			<input type="email" placeholder="Email" />
      			<input type="password" placeholder="Password" />
      			<button>Sign Up</button>
      		</form>
      	</div>
      	<div class="form-container sign-in-container">
      		<form action="#">
      			<h1>Sign in</h1>
      			<span>or use your account</span>
      			<input type="email" placeholder="Email" />
      			<input type="password" placeholder="Password" />
      			<a href="#">Forgot your password?</a>
      			<button>Sign In</button>
      		</form>
      	</div>
      	<div class="overlay-container">
      		<div class="overlay">
      			<div class="overlay-panel overlay-left">
      				<h1>Welcome Back!</h1>
      				<p>To keep connected with us please login with your personal info</p>
      				<button class="ghost" id="signIn">Sign In</button>
      			</div>
      			<div class="overlay-panel overlay-right">
      				<h1>Hello, Friend!</h1>
      				<p>Enter your personal details and start journey with us</p>
      				<button class="ghost" id="signUp">Sign Up</button>
      			</div>
      		</div>
      	</div>
      </div>
    );
}
}

export default Login;