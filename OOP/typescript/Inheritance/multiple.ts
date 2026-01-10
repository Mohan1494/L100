// Interface A
interface AudioTrack {
  playAudio(): void;
}

// Interface B
interface VisualSequence {
  playVideo(): void;
}

// Child Class implements both
class VideoClip implements AudioTrack, VisualSequence {
  playAudio() {
    console.log("Playing audio track...");
  }

  playVideo() {
    console.log("Playing video sequence...");
  }

  merge() {
    console.log("Merging audio and video...");
  }
}

const clip = new VideoClip();
clip.playAudio();
clip.playVideo();
clip.merge();
