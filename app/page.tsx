import Image from "next/image";
import './globals.css'
import ButtonLink from "./UI/link";
import AlterLink from "./UI/buttonAlter";
import Card from "../components/card";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
export default function Home() {
  return (
    <>
    <section className="text-center lg:px-19 animate-fadeIn flex flex-col gap-7 items-center">
      <div className="w-fit px-3 rounded-full text-dark font-semibold flex items-center gap-2">
        <div className="animate-pulse bg-primary w-[10px] h-[10px] rounded-full"></div>
        <p>path to cleaner enviroment, from trash to gold</p>
      </div>

      <h1 className="text-[40px] lg:text-[47px] font-extrabold  sm:mx-7 :mx-8">Get your CV <span className="text-primary">Optimized</span> with CVNest Recume creation oversimplified</h1>
      <p className="text-grey text-xl md:px-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe autem dolore repudiandae libero est voluptatem. Delectus quaerat nesciunt,</p>
      <div className="flex gap-5">
        <ButtonLink href="/" className="hover:translate-y-[10px] transition duration-300">Get Started</ButtonLink>
        <AlterLink href="/" className="hover:translate-y-[-10px] transition duration-300 hover:rotate-5 ">learn More</AlterLink>
      </div>

    </section>

    <section className="">
      <h3 className="text-center text-[36px] font-bold">Build ATS-Compliant CVs With Relative Ease</h3>
      <p className="text-center text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quo tempore consequuntur a consequatur nesciunt, ab numquam laborum.</p>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            <Card title="Feature"  subtitle="Manage"  href="#" Icon={FiUser}/>
            <Card title="Feature" subtitle="Manage" href="#" Icon={FiMail} />
            <Card title="Feature" subtitle="Manage" href="#" Icon={FiUsers} />
            <Card title="Feature"  subtitle="Manage"  href="#" Icon={FiCreditCard}/>
            <Card title="Feature"  subtitle="Manage"  href="#" Icon={FiUser}/>
            <Card title="Feature" subtitle="Manage" href="#" Icon={FiMail} />
            <Card title="Feature" subtitle="Manage" href="#" Icon={FiUsers} />
            <Card title="Feature"  subtitle="Manage"  href="#" Icon={FiCreditCard}/>
          </div>
        
    </section>
    
    </>
  );
}
