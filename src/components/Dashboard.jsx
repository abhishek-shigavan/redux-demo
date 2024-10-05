import { Outlet, useNavigate } from "react-router-dom";

export default function Dashboard() {
    const searchQuery = ""
    const navigate = useNavigate()

    const handleNavigation = (path) => {
        navigate(path)
    }

    const methodWOParam = () => {
        navigate("/notes")
    }

    return(
        <>
        <div style={{height: "80px", width: "100%", borderBottom: "3px solid red"}}>Header

            <input type="text" onChange={(e)=> searchQuery = e.target.value}/>
        </div>
        <button onClick={methodWOParam}>Notes</button>
        <br /><br />
        <button onClick={() => handleNavigation('/archive')}>Archive</button>
        <Outlet/>
        </>
    )
}