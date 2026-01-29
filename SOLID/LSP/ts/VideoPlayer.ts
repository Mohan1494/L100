class VideoPlayer {
  protected volume: number = 50; // Invariant: 0 <= volume <= 100

  // Preconditions:
  // - quality must not be null

  // Postconditions:
  // - video starts playing
  play(quality: string | null): void {
    if (quality === null) {
      throw new Error("Quality cannot be null");
    }
    console.log(`Playing video in ${quality} quality`);
  }

  // Invariant preserved
  setVolume(volume: number): void {
    if (volume < 0 || volume > 100) {
      throw new Error("Invalid volume");
    }
    this.volume = volume;
  }
}

class PremiumVideoPlayer extends VideoPlayer {
  override play(quality: string | null): void {
    if (quality !== "4K") { // ❌ stronger precondition
      throw new Error("Only 4K allowed");
    }
    console.log("Playing premium 4K video");
  }
}

class BrokenVideoPlayer extends VideoPlayer {
  override play(quality: string | null): void {
    // ❌ weaker postcondition (does not play video)
    console.log("Loading video...");
  }
}

class VLCVideoPlayer extends VideoPlayer {
  boostVolume(): void {
    this.volume = 150; // ❌ breaks invariant
  }
}
