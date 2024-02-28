import Image from "next/image";
import Profile from "../components/profile";

export default function Home() {
  return (
       <>
       <h1>
        <b>
          <center>
          Ilmuwan yang luar biasa
       </center>
        </b>
        </h1>
        <div className="columns-3">
       <Profile />
       <Profile />
       <Profile />
       </div>
       </>
      );
    }
