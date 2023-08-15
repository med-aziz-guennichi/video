import { JitsiMeeting } from "@jitsi/react-sdk";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Api = () => {
  const navigate = useNavigate();

  const handleIframeLoad = () => {
    const iframe = document.getElementById("jitsi-iframe");
    if (iframe) {
      iframe.onload = () => {
        const anchorElement = iframe.contentDocument.querySelector(
          "a.watermark.leftwatermark"
        );
        if (anchorElement) {
          anchorElement.style.display = "none";
        }
      };
    }
  };

  useEffect(() => {
    handleIframeLoad();
  }, []);
  return (
    <JitsiMeeting
      domain="meet.jit.si"
      roomName="PleaseUseAGoodRoomName"
      configOverwrite={{
        enableClosePage: true,
        enableWelcomePage: false,
        // enable web cam for all users
        enableVideo: true,
        // i wanna to disable the logo

        startWithAudioMuted: true,
        disableModeratorIndicator: true,
        startScreenSharing: true,
        enableEmailInStats: false,
      }}
      interfaceConfigOverwrite={{
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: false,
        WEBGL_DELETE_TEXTURE_THRESHOLD: false,
        SHOW_PROMOTIONAL_CLOSE_PAGE: true,
        SHOW_JITSI_WATERMARK: false,
        // HIDE_DEEP_LINKING_LOGO: true,
      }}
      userInfo={{
        displayName: "aziz",
        // what i can use in this ?
      }}
      onApiReady={(externalApi) => {
        externalApi.on("videoConferenceJoined", () => {
          console.log("videoConferenceJoined");
        });
        externalApi.on("videoConferenceLeft", () => {
          navigate("/home");
        });
      }}
      getIFrameRef={(iframe) => {
        iframe.style.height = "750px";
        iframe.id = "jitsi-iframe";
      }}
    />
  );
};

export default Api;
