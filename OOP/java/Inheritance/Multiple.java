package Inheritance;
// Interface A
interface AudioTrack {
    void playAudio();
}

// Interface B
interface VisualSequence {
    void playVideo();
}

// Child Class implements both
class VideoClip implements AudioTrack, VisualSequence {

    public void playAudio() {
        System.out.println("Playing audio track...");
    }

    public void playVideo() {
        System.out.println("Playing video sequence...");
    }

    void merge() {
        System.out.println("Merging audio and video...");
    }
}

public class Multiple {
    public static void main(String[] args) {
        VideoClip clip = new VideoClip();
        clip.playAudio();
        clip.playVideo();
        clip.merge();
    }
}
