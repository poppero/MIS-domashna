import { IonSpinner } from "@ionic/react";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MeetingActions } from "../../Redux/Meetings/Actions";
import { MeetingsState } from "../../Redux/Meetings/Interface";
import { AppDispatch, RootState } from "../../Redux/Store";
import { UserState } from "../../Redux/User/Interface";

const SpecialPeople: React.FC = ({ }) => {
  const dispatch = useDispatch<AppDispatch>()
  const UserReducer: UserState = useSelector((state: RootState) => state.user)
  const MeetingsSelector: MeetingsState = useSelector((state: RootState) => state.meetings)

  useEffect(() => {
    // dispatch(MeetingActions.readMeetings({ arguments: {} }))
  }, [])

  const SpecialPeople = UserReducer.user.users.filter(user => user !== null && user !== undefined && user.user_type_id === 3).slice(0, 5)

  return (
    <div className="max-w-[95%] mx-auto my-4 rounded-lg bg-white overflow-hidden shadow-xl">
      <div className="flex">
        <div className="flex-1 m-2">
          <h2 className="px-4 py-2 text-[1.22rem] font-semibold text-red-500 font-poppins">
            Top Special people
          </h2>
        </div>
      </div>

      <hr className="border-red-500" />
      {UserReducer.user.readStatus === "pending" || SpecialPeople.length === 0 ? <div className="flex items-center justify-center my-2">
        <IonSpinner color={"danger"} />
      </div> : SpecialPeople.sort((a,b) => MeetingsSelector.meetings.meetings.filter(m => m.participant_one_id === a.id).length > 
      MeetingsSelector.meetings.meetings.filter(m => m.participant_one_id === b.id).length ? -1 : 1).map(person => (
        <Fragment key={person.id}>
          <div className="flex hover:bg-slate-50 w-full">
            <div className="flex-1 w-full mt-2">
              <h2 className="px-4 ml-2 font-bold text-red-500 font-poppins">
                {person.first_name} {person.last_name}
              </h2>
              <p className="px-4 pt-1 ml-2 mb-3 text-xs text-gray-400 font-poppins">
                {MeetingsSelector.meetings.meetings.filter(m => m.participant_one_id === person.id).length} Meetings
              </p>
            </div>
          </div>
          <hr className="border-red-500" />
        </Fragment>
      ))}
    </div>
  );
};

export default SpecialPeople;
