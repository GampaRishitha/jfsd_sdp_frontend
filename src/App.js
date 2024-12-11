import logo from './logo.svg';
import './App.css';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import Appbar from './components/Appbar.js';
import Homepage from './components/Home.js'
import Show from './components/Show.js';
import AboutUs from './components/Aboutus.js';
import Calendar from './components/Calender.js';
import Payments from './components/Payments.js';
import Medieval from './components/MedievalArt.js';
import Modern from './components/ModernArt.js';
import Ancient from './components/AncientArt.js';
import Paymentreports from './components/Paymentreport.js'

function App({store}) {
  function Page(){
    switch(store.getState()){
      case "Signin":
        return(<div><Signin/></div>);
      case "Signup":
        return(<div><Signup/></div>);
      case "Home":
        return(<div><Homepage/></div>);
      case "Admin":
        
        return(<div><Show/></div>);
      case "Calender":
        return(<div><Calendar/></div>);
      case "AboutUs":
        return(<div><AboutUs/></div>);
      case "Payments":
        return(<div><Payments/></div>); 
        case "Orders":
          return(<div><Paymentreports/></div>); 
      case "Medieval Art":
        return (<div><Medieval /></div>);
      case "Ancient Art":
        return (<div><Ancient /></div>);
      case "Modern Art":
        return (<div><Modern /></div>); 
      default:
        return(<div><Homepage/></div>);
    }

 
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>INDIAN   ART   GALLERY </p>  
      </header>
      <div className='App-body'>
        <Appbar store={store}/>
        <Page />
      </div>
    </div>
  );
}

export default App;
