import Image from "next/image";
import Bio from "../components/bio";
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";
import TodoList from "@/components/todolist";

export default function Home() {
  return (
       <>
       <h1><b><center>Ilmuwan yang luar biasa</center></b></h1>
       <hr />
       <Bio />
       <hr />
       <Profile />
       <hr />
       <Gallery />
       <hr />
       <TodoList />
       </>
      );
    }

    