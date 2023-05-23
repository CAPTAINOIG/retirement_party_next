"use client"
import React, { useState } from 'react';
import Conversations from "@/components/core/dashboard/sensii/Conversations";
import ChatWindow from "@/components/core/dashboard/sensii/ChatWindow";

const SensiiPage = () => {
  const [id, setId] = useState(null);

  const handleClick = (id) => {
    setId(id);
  };

  return (
    <div className="h-screen w-full grid grid-cols-[0_1fr] md:grid-cols-[300px_1fr] overflow-y-hidden">
      <div className="h-screen border-r border-zinc-200 flex flex-col py-5">
        <Conversations onClick={ handleClick } selected={ id }/>
      </div>
      <div className="relative">
        <div className="h-screen flex-1 flex flex-col">
          <ChatWindow selected={ id } onClose={ () => setId(null) }/>
        </div>
      </div>
    </div>
  );
};

export default SensiiPage;
