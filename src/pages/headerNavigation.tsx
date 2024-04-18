import {Link} from "react-router-dom";

export default function HeaderNavigation(){
    return<>
        <button><Link to={"/"}>Home</Link></button><br/>
        <button><Link to={"/welcome"}>Welcome</Link></button><br/>
        <button><Link to={"/characters"}>Characters</Link></button><br/>
    </>
}