import './../css/Navbar.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import ReactTooltip from 'react-tooltip';

function Navbar() {
  return (
    <div className="Navbar">
    	<ReactTooltip/>
	   	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/600px-Facebook_Messenger_logo_2020.svg.png" alt="Messenger Logo" className="logo"/>
    	<h1 className="logo_written">Messenger Clone</h1>
    	<div id="github_reference" data-tip="@MuhammadRehanRasool" onClick={() => {
    		window.location = "https://github.com/MuhammadRehanRasool";
    	}}>
    		<GitHubIcon id="github_icon"/>
    	</div>
    </div>
  );
}

export default Navbar;
