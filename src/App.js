import './App.css';
import anakin from "./images/anakin.jpg";
import check from "./images/check.png";

export default function App() {
  return (
    <div className='user_info'>
      <img className='avatar' src={anakin} alt='Anakin'></img>
      <p id='acc_name'>Anakin Skywalker</p>
      <img className='check' src={check} alt='check'></img>
      <p id='profile_tag'>@dart_vader</p>
      <p id='date'>26 лют.</p>
    </div>
  );
}


