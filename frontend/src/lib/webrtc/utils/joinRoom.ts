import { RtpCapabilities } from "mediasoup-client/lib/types";
import { useVoiceStore } from "../store/useVoiceStore";

export const joinRoom = async (routerRtpCapabilities: RtpCapabilities) => {
  const { device } = useVoiceStore.getState();
  if (!device!.loaded) {
    await device!.load({ routerRtpCapabilities });
  }
};