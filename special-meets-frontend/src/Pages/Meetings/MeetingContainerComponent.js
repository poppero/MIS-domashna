import React, { useEffect, useState } from "react";
import { Constants, MeetingProvider } from "@videosdk.live/react-sdk";
import { meetingTypes } from "./utils/common";
import { MeetingContainer } from "./meeting/MeetingContainer";
import { MeetingAppProvider } from "./MeetingAppContextDef";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const MeetingContainerComponent = () => {
  const UserReducer = useSelector(state => state.user)
  const meeting_id = useParams().meeting_id
  const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJjM2U0MWYxMi0zMDgxLTQ3YzctOTEyMi0xN2MwMjk0Njg5MDEiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY3NzA5MzY3OSwiZXhwIjoxNjc3Njk4NDc5fQ.AyViSzVobd5oMhP3Z8zPAgQE7hX6qmGZLx6-I1OxJh4");
  const [meetingId, setMeetingId] = useState(meeting_id);
  const [participantName, setParticipantName] = useState(UserReducer.user.current.first_name + " " + UserReducer.user.current.last_name);
  const [micOn, setMicOn] = useState(false);
  const [webcamOn, setWebcamOn] = useState(true);
  const selectedMic = { id: null }
  const selectedWebcam = { id: null }
  const [selectWebcamDeviceId, setSelectWebcamDeviceId] = useState(selectedWebcam.id);
  const meetingMode = Constants.modes.CONFERENCE
  const [selectMicDeviceId, setSelectMicDeviceId] = useState(selectedMic.id);
  const meetingType = "MEETING";

  const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

  useEffect(() => { if (isMobile) window.onbeforeunload = () => "Are you sure you want to exit?" }, [isMobile]);

  return (
    <MeetingAppProvider
      selectedMic={selectedMic}
      selectedWebcam={selectedWebcam}
      initialMicOn={micOn}
      initialWebcamOn={webcamOn}
    >
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: micOn,
          webcamEnabled: webcamOn,
          name: participantName ? participantName : "TestUser",
          mode: meetingMode,
          multiStream: meetingType === meetingTypes.MEETING ? true : false,
        }}
        token={token}
        reinitialiseMeetingOnConfigChange={true}
        joinWithoutUserInteraction={true}
      >
        <MeetingContainer
          onMeetingLeave={() => {
            setToken("");
            setMeetingId("");
            setParticipantName("");
            setWebcamOn(false);
            setMicOn(false);
          }}
          selectedMic={selectedMic}
          selectedWebcam={selectedWebcam}
          selectWebcamDeviceId={selectWebcamDeviceId}
          setSelectWebcamDeviceId={setSelectWebcamDeviceId}
          selectMicDeviceId={selectMicDeviceId}
          setSelectMicDeviceId={setSelectMicDeviceId}
          micEnabled={micOn}
          webcamEnabled={webcamOn}
        />
      </MeetingProvider>
    </MeetingAppProvider>
  );
};

export default MeetingContainerComponent;
