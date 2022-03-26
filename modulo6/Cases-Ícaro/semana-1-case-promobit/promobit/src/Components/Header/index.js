import { useState } from "react"
import { useHistory } from "react-router-dom"
import { changePage } from "../../Router/routerGPS"
import { StyledHeader } from "./style"



export const CompHeader = () => {
    const [icaro, set_icaro] = useState(false)

    const history = useHistory()


    return(
        <StyledHeader>
            <div className="header-text">
                <h2 onClick={() => changePage(history, "/")}>TMDB</h2>

                <div onMouseLeave={() => set_icaro(false)} className="icaro">
                    <span onClick={() => {set_icaro(!icaro)}}> 
                        {icaro ?
                        <a href="https://www.linkedin.com/in/icaro-ferreira-63357994/" target="_blank"><ion-icon name="logo-linkedin" /></a>
                        :
                        <></>    
                    }
                    </span>
                    {
                        icaro ?
                        <h3>Ícaro Ferreira do Amaral</h3>
                        :
                        <h3></h3>
                    }
                </div>
            </div>
        </StyledHeader>
    )
} 