import Business from "@/components/Business/Business";
import Navbar from "@/components/NavBar";
import Section from "@/components/Section/Section";
import Skills from "@/components/Skills/Skills";
import StudentProfile from "@/components/StudentProfile/StudentProfile";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Section/>
      <Skills/>
      {/* <StudentProfile/> */}
      <Business/>
      
    </>
  );
}
