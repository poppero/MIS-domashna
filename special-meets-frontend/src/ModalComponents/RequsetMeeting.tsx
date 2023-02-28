import { IonContent,IonModal } from '@ionic/react'
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react'
import DateTimePicker from "../Components/DateTimePicker"
import Theme from '../theme/Theme';

export const RequsetMeeting = ({request , setRequest}) => {

  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));

  return (
    <IonModal id="requestModal" trigger="open-modal" isOpen={request} onWillDismiss={(e) => setRequest(false)} >
      
          <div className="flex flex-row justify-between p-4 items-center">
        
            
          
            <h1 className="text-center font-poppins text-slate-400 w-[10rem]">Meeting schedule</h1>
            <span className="w-[3.6rem]"></span>
            
          </div>
     
        <IonContent className="ion-padding">
          <div className="h-full w-full flex flex-col gap-8 items-center">
            <img className="w-[6rem] h-[6rem] shadow-sm rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" />
           <Theme>
            <DateTimePicker value={value} setValue={setValue}/>
           </Theme>
           <div>
          <input type="text" placeholder="minutes"  className="bg-white border-solid border-[0.1rem] border-gray-300 p-3 w-[16rem] rounded-md outline-none font-poppins"/>
            </div>
            <h1 className='font-poppins text-red-500 text-lg'>TOTAL PRICE : 20$</h1>
            <button className='font-poppins text-red-500 border-solid border-[0.1rem] border-red-500 pl-4 pr-4 p-2 rounded-full hover:scale-110 hover:bg-red-500 hover:text-white transition-all'>send</button>
          </div>
          
        </IonContent>
      </IonModal>
  )
}
