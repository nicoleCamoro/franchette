"use client";
import Sound from "../icons/Sound";

export default function SoundBtn() {
  const playSound = () => {
    const audio = new Audio("/audio/name-pronounced.mp3");
    audio.play();
  };

  return (
    <button className="p-1 rounded-full bg-transparent hover:cursor-pointer">
      <Sound
        className="size-4 text-navy hover:text-navy/60 transition-all duration-300 hover:scale-110"
        onClick={playSound}
      />
    </button>
  );
}
