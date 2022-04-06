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
                        <a href="https://media-exp1.licdn.com/dms/image/C5603AQGxRdROyG7gqA/profile-displayphoto-shrink_800_800/0/1642643467566?e=1654128000&v=beta&t=Kdw0Khj-UfWZJZaTkifwZkSbkupCNELkiAIUMjQkUm4" target="_blank"><ion-icon name="foto" /></a>
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