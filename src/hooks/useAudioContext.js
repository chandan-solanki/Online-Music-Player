import { useContext } from "react";
import { AudioContext } from "../contexts/AudioContext";

export const useAudioContext = () => useContext(AudioContext);
