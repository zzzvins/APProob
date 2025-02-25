import React, { useState } from 'react';
import Drawer from "../../components/DrawerComponents/Drawer";

export default function LandingPage_NoAdviser() {
  const buttons = [
    {icon: "dashboard.png", title: "Dashboard"},
    {icon: "profile.png", title: "Profile"},
    {icon: "appli.png", title: "Application"},
  ]

  return (
    <div className="flex flex-row h-screen">
      <Drawer buttons={buttons}/>
      <div className='flex flex-col flex-grow justify-center items-center font-lexend-deca text-baby-powder text-center'>
        <div>
            <img className='h-52 mb-14' src='assets/onboard.svg' alt='ship' draggable='false'/>
        </div>
        <div className='text-5xl font-bold'>
            <span className='text-celadon'>Hang on!</span> We're getting you onboard.
        </div>
        <div className='font-light my-4'>
            <p>
                Please wait for an admin to assign you an adviser. Once an adviser is assigned, you can proceed with your clearance application.
            </p>
        </div>
      </div>
    </div>
  );
}