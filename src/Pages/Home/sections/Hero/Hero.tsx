import { styled } from "@mui/material"
import perfil from "../../../../assets/images/fotolinkedin.jpg"
import back from "../../../../assets/images/back.jpg"

const Hero = () => {
  
    const StyledHero = styled("div")(()=> ({
        backgroundColor: "Black",
        color: "white",
        

    }))


    


    return (
      <>
      <StyledHero>
        Olá
        <img src={back} alt="" />
      </StyledHero>
      
      </>
    )
  }
  
  export default Hero