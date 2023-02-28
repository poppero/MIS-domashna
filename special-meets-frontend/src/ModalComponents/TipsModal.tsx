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

function TipsModal({
  tipsmodal, 
  setTipsModal
}) {

  return (
      <IonModal id="tipsModal" trigger="open-modal" isOpen={tipsmodal}>
      
          <div className="flex flex-row justify-between p-4 items-center">
        
              <button className="font-poppins text-red-500 w-[3.6rem] hover:bg-slate-50 p-1 rounded-lg" onClick={() => setTipsModal(false)}>Close</button>
          
            <h1 className="text-center font-poppins text-slate-400 w-[3.6rem]">Tip</h1>
            <span className="w-[3.6rem]"></span>
            
          </div>
     
        <IonContent className="ion-padding overflow-hidden">
          <div className="w-full flex flex-col gap-5 items-center justify-center p-2 pb-4">
          <div className="flex flex-row gap-2">
          <h1 className="font-poppins text-slate-400">@elonmusk (you)</h1>
           <h1 className="font-poppins text-slate-600">to</h1>
           <h1 className="font-poppins text-slate-400">@andrew_tate</h1>
          </div>
           <div className="flex flex-row gap-2">
           <input   className="outline-none p-2 bg-slate-100 rounded-md font-poppins" type="text" placeholder="number of roses" />
           <button className="font-poppins bg-red-500 hover:bg-red-400 text-white p-2 rounded-md">send roses</button>
           </div>
           <p className="font-poppins text-slate-300 pt-[3.5rem] ">By sending a rose you support your Special Person !</p>
          </div>
          
          
        </IonContent>
      </IonModal>
  );
}

export default TipsModal;
