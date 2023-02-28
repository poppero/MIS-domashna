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

function InfoModal({
  modal, 
  setModal
}) {

  return (
      <IonModal id="infoModal" trigger="open-modal" isOpen={modal} onWillDismiss={e => setModal(false)}>
      
          <div className="flex flex-row justify-between p-4 items-center">
        
              <button className="font-poppins text-red-500 w-[3.6rem] hover:bg-slate-50 p-1 rounded-lg" onClick={() => setModal(false)}>Close</button>
          
            <h1 className="text-center font-poppins text-slate-400 w-[3.6rem]">Details</h1>
            <span className="w-[3.6rem]"></span>
            
          </div>
     
        <IonContent className="ion-padding">
          <div className="h-full w-full flex flex-col gap-5 items-center">
            <img className="w-[6rem] h-[6rem] shadow-sm rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" />
            <h1 className="font-poppins text-slate-300">@elonmusk</h1>

            <h1 className="font-poppins text-slate-300">Date created: 19:49 11/28/2022  </h1>
            <h1 className="font-poppins text-slate-300">Total tips: 34  </h1>
            <h1 className="font-poppins text-slate-300">Comments: 123 </h1>

          </div>
          
        </IonContent>
      </IonModal>
  );
}

export default InfoModal;
