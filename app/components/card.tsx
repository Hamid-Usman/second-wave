import React from "react";
import { IconType } from "react-icons";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";

const HoverDevCards = () => {
  return (
    <div className="p-4">
      <p className="text-xl font-semibold mb-2">Settings</p>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card
          title="Account"
          subtitle="Manage profile"
          href="#"
          Icon={FiUser}
        />
        <Card title="Email" subtitle="Manage email" href="#" Icon={FiMail} />
        <Card title="Team" subtitle="Manage team" href="#" Icon={FiUsers} />
        <Card
          title="Billing"
          subtitle="Manage cards"
          href="#"
          Icon={FiCreditCard}
        />
      </div>
    </div>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  Icon: IconType;
  href: string;
}

const Card = ({ title, subtitle, Icon, href }: CardType) => {
  return (
    <div
      className=" active:bg-gradient-to-r active:text-white from-primary to-accent translate-y-[100%] group-hover:translate-y-[0%] w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-secondary  transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg  group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className=" group-hover:text-white relative z-10 duration-300">
        {subtitle}
      </p>
    </div>
  );
};

export default Card