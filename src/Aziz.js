import { JitsiMeeting } from "@jitsi/react-sdk";
import React, { useEffect, useRef } from 'react';

const Api = () => {


  return (
    <>
    <JitsiMeeting
      domain="meet.jit.si"
      roomName="PleaseUseAGoodRoomName"
      configOverwrite={{
        enableClosePage: true,
      }}
      interfaceConfigOverwrite={{
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: false,
        WEBGL_DELETE_TEXTURE_THRESHOLD: false,
        SHOW_PROMOTIONAL_CLOSE_PAGE:true
    }}
      userInfo={{
        displayName: 'aziz'
      }}
      onApiReady={(externalApi) => {
        externalApi.removeAllListeners()
        
      }}
      getIFrameRef={(iframe) => {
        iframe.style.height = '800px';
      }}
    />

    </>
  );
};

export default Api;
