import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/Store";
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
  useIonAlert,
  IonLoading,
} from "@ionic/react";
import { UserActions } from "../Redux/User/Actions";
import { UserState } from "../Redux/User/Interface";

function EditProfileModal({
  edit,
  setEdit,
  current,
  confirmPassword,
  setConfirmPassword,
}) {
  const [user, setUser] = useState({
    ...current,
    new_password: "",
    confirm_password: "",
  });
  const UserReducer: UserState = useSelector((state: RootState) => state.user);
  const [ionAlert] = useIonAlert();
  const dispatch = useDispatch<AppDispatch>();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted === false) return;
    if (UserReducer.user.updateStatus === "fulfilled") {
      ionAlert({
        header: "Success",
        message: UserReducer.user.updateMessage,
        buttons: ["I Understand"],
      });
    } else if (UserReducer.user.updateStatus === "rejected") {
      ionAlert({
        header: "Error",
        message: UserReducer.user.updateMessage,
        buttons: ["I Understand"],
      });
    }
  }, [UserReducer.user.updateStatus]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (
      user.new_password.length > 0 &&
      user.new_password !== user.confirm_password
    )
      return ionAlert({
        header: "Error",
        message: "Password must match",
        buttons: ["I Understand"],
      });
    const data = new FormData();
    data.append("id", current.id);
    data.append("bio", user["bio"]);
    data.append("phone_number", user["phone_number"]);
    data.append("charge_per_minute", user["charge_per_minute"]);
    data.append("first_name", user["first_name"]);
    data.append("last_name", user["last_name"]);
    data.append("password", user.new_password);
    dispatch(UserActions.updateUser({ user: data }));
    setSubmitted(true);
  };
  const handleChange = (e) => {
    setSubmitted(false);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <IonModal
      id="editModal"
      trigger="open-modal"
      isOpen={edit}
      onWillDismiss={(e) => setEdit(false)}
    >
      <IonLoading
        isOpen={UserReducer.user.updateStatus === "pending"}
        message={UserReducer.user.updateMessage}
      />
      <div className="flex flex-row justify-between p-4 items-center ">
        <h1 className="text-center font-poppins text-slate-400 w-[3.6rem]">
          Details
        </h1>
        <span className="w-[3.6rem]"></span>
      </div>

      <IonContent className="ion-padding">
        <form className="h-full w-full flex flex-col gap-5 items-center justify-center ">
          <img
            className="w-[6rem] h-[6rem] shadow-sm rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
          />
          <h1 className="font-poppins text-slate-300">
            @{user["first_name"] + "" + user["last_name"]}
          </h1>
        
            {current.user_type_id === 1 ? <div className="w-3/4 flex flex-col gap-2 justify-center">
              <h1 className="font-poppins">Bio</h1>
              <input
                onChange={(e) => handleChange(e)}
                name="bio"
                type="text"
                value={user["bio"]}
                className="w-full bg-white outline-none border-slate-200 border-[0.1rem] p-2 font-poppins"
                placeholder="bio"
              />
            </div> : null}
   
          <div className="w-3/4 flex flex-col justify-center gap-2">
            <h1 className="font-poppins">Phone number</h1>
            <input
              onChange={(e) => handleChange(e)}
              name="phone_number"
              type="text"
              value={user["phone_number"]}
              className="w-full bg-white outline-none border-slate-200 border-[0.1rem] p-2 font-poppins"
              placeholder="phone number"
            />
          </div>
          {current.user_type_id === 1 ? <div className="w-3/4 flex flex-col justify-center gap-2">
            <h1 className="font-poppins">Charge per minute</h1>
            <input
              onChange={(e) => handleChange(e)}
              name="charge_per_minute"
              value={user["charge_per_minute"]}
              type="text"
              className="w-full bg-white outline-none border-slate-200 border-[0.1rem] p-2 font-poppins"
              placeholder="charge per minute"
            />
          </div> : null}
          <div className="w-3/4 flex flex-col justify-center gap-2">
            <h1 className="font-poppins">First name</h1>
            <input
              onChange={(e) => handleChange(e)}
              name="first_name"
              value={user["first_name"]}
              type="text"
              className="w-full bg-white outline-none border-slate-200 border-[0.1rem] p-2 font-poppins"
              placeholder="Firstname"
            />
          </div>
          <div className="w-3/4 flex flex-col justify-center gap-2">
            <h1 className="font-poppins">Last name</h1>
            <input
              onChange={(e) => handleChange(e)}
              name="last_name"
              value={user["last_name"]}
              type="text"
              className="w-full bg-white outline-none border-slate-200 border-[0.1rem] p-2 font-poppins"
              placeholder="Lastname"
            />
          </div>
          <div className="w-3/4 flex flex-col justify-center gap-2">
            <h1 className="font-poppins">Change password</h1>
            <input
              name="new_password"
              onChange={(e) => handleChange(e)}
              value={user.new_password}
              type="password"
              className={
                user.new_password.length > 0 &&
                user.new_password === user.confirm_password
                  ? "w-full bg-white outline-none border-green-400 border-[0.1rem] p-2 font-poppins"
                  : "bg-white outline-none w-full border-slate-200 border-[0.1rem] p-2 font-poppins"
              }
              placeholder="new password"
            />
            <input
              name="confirm_password"
              onChange={(e) => handleChange(e)}
              type="password"
              className={
                user.new_password?.length > 0 &&
                user.new_password === user.confirm_password
                  ? "bg-white outline-none w-full border-green-400 border-[0.1rem] p-2 font-poppins"
                  : "bg-white outline-none border-slate-200 w-full border-[0.1rem] p-2 font-poppins"
              }
              placeholder="confirm password"
            />
          </div>

          <button
            onClick={(e) => handleUpdate(e)}
            className=" bg-white w-3/4 text-red-500 border-solid border-[0.1rem] border-red-500 pl-4 pr-4 p-2 font-poppins rounded-full transition-all hover:scale-110 hover:bg-red-500 hover:text-white"
          >
            save
          </button>
        </form>
      </IonContent>
    </IonModal>
  );
}

export default EditProfileModal;
