import { useState } from "react";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/react";

function ReminderModal({
   reminder,
   setReminder
}) {

  return (
      <IonModal  id="reminderModal" trigger="open-modal" isOpen={reminder}>
      
          <div className="flex flex-row justify-between p-4 items-center">
        
              <button className="font-poppins text-red-500 w-[3.6rem] hover:bg-slate-50 p-1 rounded-lg" onClick={() => setReminder(false)}>Close</button>
          
            <h1 className="text-center font-poppins text-slate-400 w-[6rem]">Reminder</h1>
            <span className="w-[3.6rem]"></span>
            
          </div>
     
        <IonContent className="ion-padding overflow-hidden">
          <div className="">
            <div className="w-full bg-slate-200 ">
                <h1 className="font-poppins text-slate-400 p-2">Today , 4 NOV</h1>
            </div>
            <div className="flex flex-row items-center justify-between p-2">
                <div className="flex flex-col font-poppins ">
                    <h1>15:00</h1>
                    <h1>15:30</h1>
                </div>
                <div className="flex flex-row gap-1">
                <h1 className="font-poppins">Meeting with</h1>
                <h1 className="font-poppins hover:text-slate-400">@andrew_tate</h1>
                </div>
                <span></span>
            </div>
            <hr className="border-slate-300 " />
            <div className="flex flex-row items-center justify-between p-2">
                <div className="flex flex-col font-poppins ">
                    <h1>12:00</h1>
                    <h1>12:15</h1>
                </div>
                <div className="flex flex-row gap-1">
                <h1 className="font-poppins">Meeting with</h1>
                <h1 className="font-poppins hover:text-slate-400">@andrew_tate</h1>
                </div>
                <span></span>
            </div>
            <hr className="border-slate-300 " />
            <div className="flex flex-row items-center justify-between p-2">
                <div className="flex flex-col font-poppins ">
                    <h1>20:00</h1>
                    <h1>21:00</h1>
                </div>
                <div className="flex flex-row gap-1">
                <h1 className="font-poppins">Meeting with</h1>
                <h1 className="font-poppins hover:text-slate-400">@andrew_tate</h1>
                </div>
                <span></span>
            </div>
            <hr className="border-slate-300 " />
            <div className="flex flex-row items-center justify-between p-2">
                <div className="flex flex-col font-poppins ">
                    <h1>22:00</h1>
                    <h1>22:40</h1>
                </div>
                <div className="flex flex-row gap-1">
                <h1 className="font-poppins">Meeting with</h1>
                <h1 className="font-poppins hover:text-slate-400">@andrew_tate</h1>
                </div>
                <span></span>
            </div>
            <hr className="border-slate-300 " />
            
          </div>
          
          
        </IonContent>
      </IonModal>
  );
}

export default ReminderModal;
