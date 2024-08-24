import Image from "next/image";
import FirstPage from '../components/FirstPage';
import FloatingNavDemo from  '../components/Navbar';
import Grid from "@/components/SecondPage";


export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center fles-col overflow-hidden mx-auto sm:px-10 px-5 text-white">
    <div className="max-w-7xl w-full">
      <FloatingNavDemo />
       <Grid />
    </div>
   </main>
  );
}
