class VideoPlayer {

    protected int volume = 50; // Invariant: 0 <= volume <= 100

    // Preconditions:
    // - quality must not be null

    // Postconditions:
    // - video starts playing
    public void play(String quality) {
        if (quality == null) {
            throw new IllegalArgumentException("Quality cannot be null");
        }
        System.out.println("Playing video in " + quality + " quality");
    }

    // Invariant preserved
    public void setVolume(int volume) {
        if (volume < 0 || volume > 100) {
            throw new IllegalArgumentException("Invalid volume");
        }
        this.volume = volume;
    }
}

class PremiumVideoPlayer extends VideoPlayer {

    @Override
    public void play(String quality) {
        if (!quality.equals("4K")) {   //  stronger precondition
            throw new IllegalArgumentException("Only 4K allowed");
        }
        System.out.println("Playing premium 4K video");
    }
}

class BrokenVideoPlayer extends VideoPlayer {

    @Override
    public void play(String quality) {
        //  does not start playback
        System.out.println("Loading video...");
    }
}

class VLCVideoPlayer extends VideoPlayer {

    public void boostVolume() {
        this.volume = 150;  // breaks invariant
    }
}



