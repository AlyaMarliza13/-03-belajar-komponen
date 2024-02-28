import Image from "next/image";
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";

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
       <Profile />
       <Gallery />
       </>
      );
    }
