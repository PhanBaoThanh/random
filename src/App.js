import './App.scss';
import {useState} from 'react'
import img1 from './img/user1.jpg'
import img2 from './img/user2.jpg'
import img3 from './img/user3.jpg'
import img4 from './img/user4.jpg'
import img5 from './img/user5.jpg'
import img6 from './img/user6.jpg'
import img7 from './img/user7.jpg'
import img8 from './img/user8.jpg'
import img9 from './img/user9.jpg'
import img10 from './img/user10.jpg'
function App() {
  const data = [
    {
      name: "Zlatko Pejić",
      email: 'zlatko.pejic@example.com',
      age: 76,
      street: '6605 Šeste Ličke Divizije',
      phone: '038-5649-075',
      password: 'rubber',
      img: img1
    },
    {
      name: "Faraj Uchil",
      email: 'faraj.uchil@example.com',
      age: 48,
      street: '9201 Dadabhai Naoroji Rd',
      phone: '038-5649-075',
      password: 'rubber',
      img: img2
    },
    {
      name: "Esma Kunt",
      email: 'esma.kunt@example.com',
      age: 22,
      street: '6605 Šeste Ličke Divizije',
      phone: '038-5649-075',
      password: 'rubber',
      img: img3
    },
    {
      name: "Wallace Vasquez",
      email: 'wallace.vasquez@example.com',
      age: 56,
      street: '6605 Šeste Ličke Divizije',
      phone: '038-5649-075',
      password: 'rubber',
      img: img4
    },
    {
      name: "Ayşe Özdenak",
      email: 'ayse.ozdenak@example.com',
      age: 58,
      street: '6605 Šeste Ličke Divizije',
      phone: '038-5649-075',
      password: 'rubber',
      img: img5
    },
    {
      name: "Salustiano Nascimento",
      email: 'salustiano.nascimento@example.com',
      age: 59,
      street: '6605 Šeste Ličke Divizije',
      phone: '038-5649-075',
      password: 'rubber',
      img: img6
    },
    {
      name: "Ludovico Mendes",
      email: 'ludovico.mendes@example.com',
      age: 35,
      street: '6605 Šeste Ličke Divizije',
      phone: '038-5649-075',
      password: 'rubber',
      img: img7
    },
    {
      name: "Alex Zhang",
      email: 'alex.zhang@example.com',
      age: 22,
      street: '6605 Šeste Ličke Divizije',
      phone: '038-5649-075',
      password: 'rubber',
      img: img8
    },
    {
      name: "Charles Simmons",
      email: 'charles.simmons@example.com',
      age: 73,
      street: '6605 Šeste Ličke Divizije',
      phone: '038-5649-075',
      password: 'rubber',
      img: img9
    },
    {
      name: "Jacques Guillaume",
      email: 'jacques.guillaume@example.com',
      age: 64,
      street: '6605 Šeste Ličke Divizije',
      phone: '038-5649-075',
      password: 'rubber',
      img: img10
    },
  ]
  const [user,setUser] = useState(data[0])
  const [info,setInfo] = useState(["name",[data[0].name]])

  const handleRandomUser = () => {
    const r = Math.floor(Math.random() *(data.length - 1))
    setUser(data[r])
    setInfo(["name",data[r].name])
  }

  const handleClickInfoBtn = string => {
    setInfo([string,user[string]])
  } 

  return (
    <div className="App">
      <div className='blackPanel'></div>
      <div className='box'>
        <div className='boxItem'>
          <div className='img'>
            <img src={user.img} alt='ptc' />
          </div>
          <p className='boxTitle'>My {info[0]} is</p>
          <p className='boxContent'>{info[1]}</p>
          <div className='boxBtns'>
            <div className={`boxBtn ${info[0] === 'name' ? 'active' : ''}`}>
              <span onClick={() => handleClickInfoBtn("name")} className="far fa-user"></span>
            </div>
            <div className={`boxBtn ${info[0] === 'email' ? 'active' : ''}`}>
              <span onClick={() => handleClickInfoBtn("email")} class="far fa-envelope-open"></span>
            </div>
            <div className={`boxBtn ${info[0] === 'age' ? 'active' : ''}`}>
              <span onClick={() => handleClickInfoBtn("age")} class="far fa-calendar-times"></span>
            </div>
            <div className={`boxBtn ${info[0] === 'street' ? 'active' : ''}`}>
              <span onClick={() => handleClickInfoBtn("street")} class="far fa-map"></span>
            </div>
            <div className={`boxBtn ${info[0] === 'phone' ? 'active' : ''}`}>
              <span onClick={() => handleClickInfoBtn("phone")} class="fas fa-phone"></span>
            </div>
            <div className={`boxBtn ${info[0] === 'password' ? 'active' : ''}`}>
              <span onClick={() => handleClickInfoBtn("password")} class="fas fa-user-lock"></span>
            </div>
          </div>

          <div className='boxRandomBtn' onClick={handleRandomUser}>RANDOM USER</div>
        </div>
      </div>
    </div>
  );
}

export default App;
