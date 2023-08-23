import './index.css'
// import CAR from './images/car.jpeg'
// import Header from './components/header'
// import Footer from './components/footer'





function App() {
  // let fullName = "Ahmed Raza"
  // const foo = (a) => {
  //   console.log(a)
  // }
  const arr = ["one", "two", "three"]
  return (
    <div>
     <ul>
      {arr.map((v, i) => <li key={i}>{v}</li>)}
     </ul>
      {/* {alert("hello")} */}
      {/* <Header/>
      <h1>{fullName}</h1>
      <button onClick={() => foo("SMIT")} >Click</button>
      <img src={CAR} alt="car-image" />
      <h1 style={{color: 'blue',backgroundColor: '#000',padding: 20}}>Hello World</h1>
      <h1 className='heading'>Saylani</h1>
      <Footer/> */}
     
    </div>
  )
}

export default App