import React  , {useState ,useEffect} from 'react'
import NavCard from "./NavCard.js"
import "../styles/NavOptions.css"





const NavOptions = ({miPhones , redmiPhones, tv , laptop,fitnessAndLifestyle , home , audio ,  accessories  }) => {

    const [miPhoneToggle , setMiPhoneToggle] = useState(false)
    const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false)
    const [tvToggle, setTvToggle] = useState(false)
    const [laptopToggle, setLaptopToggle] = useState(false)
    const [fitnessAndLifestyleToggle, setFitnessAndLifestyleToggle] = useState(false)
    
    const [homeToggle, setHomeToggle] = useState(false)
    const [audioToggle, setAudioToggle] = useState(false)
    const [accessoriesToggle, setAccessoriesToggle] = useState(false)

    useEffect(() => {
      if (window.location.pathname === "/miphones") {
         return  setMiPhoneToggle(true)
      }
      if (window.location.pathname === "/redmiphones") {
         return  setRedmiPhoneToggle(true)
      }
      if (window.location.pathname === "/tv") {
         return  setTvToggle(true)
      }
      if (window.location.pathname === "/laptops") {
         return  setLaptopToggle(true)
      }
      if (window.location.pathname === "/lifestyle") {
         return  setFitnessAndLifestyleToggle(true)
      }
      if (window.location.pathname === "/home") {
         return  setHomeToggle(true)
      }
      if (window.location.pathname === "/audio") {
         return  setAudioToggle(true)
      }
      if (window.location.pathname === "/accessories") {
         return  setAccessoriesToggle(true)
      }
    }, [])
    

  return (
    <div className='navOptions'>
        {miPhoneToggle ? miPhones.map((items) => (
            <NavCard name={items.name} price={items.price} image = {items.image} key={items.image} />
        )): null}
        {redmiPhoneToggle ? redmiPhones.map((items) => (
            <NavCard name={items.name} price={items.price} image = {items.image} key={items.image} />
        )): null}
        {tvToggle ? tv.map((items) => (
            <NavCard name={items.name} price={items.price} image = {items.image} key={items.image} />
        )): null}
        {laptopToggle ? laptop.map((items) => (
            <NavCard name={items.name} price={items.price} image = {items.image} key={items.image} />
        )): null}
        {fitnessAndLifestyleToggle ? fitnessAndLifestyle.map((items) => (
            <NavCard name={items.name} price={items.price} image = {items.image} key={items.image} />
        )): null}
        {homeToggle ? home.map((items) => (
            <NavCard name={items.name} price={items.price} image = {items.image} key={items.image} />
        )): null}
        {audioToggle ? audio.map((items) => (
            <NavCard name={items.name} price={items.price} image = {items.image} key={items.image} />
        )): null}
        {accessoriesToggle ? accessories.map((items) => (
            <NavCard name={items.name} price={items.price} image = {items.image} key={items.image} />
        )): null}

    </div>
  )
}

export default NavOptions