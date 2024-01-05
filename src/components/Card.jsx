import { useContext } from "react";
import UserContext from "../context/UserContext";

function Card() {
  const {user} = useContext(UserContext)
  return (
    <>
     <div className="text-center bg-sky-100 text-black rounded p-2 m-2 w-full"> Welcome {user.username}</div>
    </>
  );
}

export default Card;
