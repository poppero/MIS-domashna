import { IonButton } from "@ionic/react";
import { useEffect, useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { STATIC_URL } from "../../Common/constants";
import { User } from "../../Common/Interfaces";
import EditProfileModal from "../../ModalComponents/EditProfileModal";
import { RequsetMeeting } from "../../ModalComponents/RequsetMeeting";

const ProfileInfo: React.FC<{
  current: User;
  selected: User;
  setEdit;
  edit;
  setConfirmPassword;
  confirmPassword;
}> = ({
  current,
  selected,
  setEdit,
  edit,
  confirmPassword,
  setConfirmPassword,
}) => {
  const [request, setRequest] = useState<boolean>(false);
  const [currentLoc , setCurrentLoc] = useState<any>();
  const apiKey = "8f745ad9a3974307b7beadb32d59717d";
  let test = 0;
  useEffect(()=> {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((res) => {
          const lat = res.coords.latitude;
          const lon = res.coords.longitude;
          fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=${apiKey}`
          )
            .then((res) => res.json())
            .then((data) => setCurrentLoc(data));
        });
    }
  } , [])

  return (
    <div className="flex h-[180px] justify-between">
      <span className="flex">
        <div
          className="w-[120px] min-w-[120px] h-[120px] rounded-full -mt-12 ml-8 border-2 border-white border-solid"
          style={{
            background:
              selected.profile_picture.length === 0
                ? "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.hw-Sk04AflX4Te0r8K4R9QAAAA%26pid%3DApi&f=1&ipt=2ed4d140903d1b166845b14d71dec749ac7e28fe37c724b5953c7b071cf1bb03&ipo=images')"
                : "url('" + STATIC_URL + selected.profile_picture + "')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div style={{ width: "calc(100% - 150ox)" }}>
          <span className="flex justify-between">
            <h1 className="text-slate-800 font-bold text-2xl ml-5 mb-3">
              <p className="flex items-center text-slate-800">
                {selected.first_name} {selected.last_name}
                <BsPatchCheckFill className="text-base ml-2 text-red-400" />
              </p>
              <p className="text-base text-slate-800">
                (California, United States)
              </p>
            </h1>
            {current.id === selected.id ? (
              <IonButton
                color={"danger"}
                className="mr-5 mt-4"
                onClick={() => setEdit(true)}
              >
                Edit
              </IonButton>
            ) : (
              <IonButton
                onClick={() => setRequest(true)}
                color={"danger"}
                className="mr-5 mt-4"
              >
                Request meeting
              </IonButton>
            )}
            {edit === true ? (
              <EditProfileModal
                confirmPassword={confirmPassword}
                setEdit={setEdit}
                edit={edit}
                current={current}
                setConfirmPassword={setConfirmPassword}
              />
            ) : null}
            {request === true ? (
              <RequsetMeeting request={request} setRequest={setRequest} />
            ) : null}
          </span>
          <h1 className="text-slate-800 text-sm ml-5 mr-8 min">
            Current Location : {currentLoc?.results[0].address_line2.slice(18,41)}
          </h1>
        </div>
      </span>
    </div>
  );
};

export default ProfileInfo;
