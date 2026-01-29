class VideoPlayer:
    def __init__(self):
        self._volume = 50  # Invariant: 0 <= volume <= 100

    # Preconditions:
    # - quality must not be None
    #
    # Postconditions:
    # - video starts playing
    def play(self, quality):
        if quality is None:
            raise ValueError("Quality cannot be null")
        print(f"Playing video in {quality} quality")

    # Invariant preserved
    def set_volume(self, volume):
        if volume < 0 or volume > 100:
            raise ValueError("Invalid volume")
        self._volume = volume


class PremiumVideoPlayer(VideoPlayer):
    def play(self, quality):
        if quality != "4K":  # ❌ stronger precondition
            raise ValueError("Only 4K allowed")
        print("Playing premium 4K video")


class BrokenVideoPlayer(VideoPlayer):
    def play(self, quality):
        # ❌ weaker postcondition
        print("Loading video...")


class VLCVideoPlayer(VideoPlayer):
    def boost_volume(self):
        self._volume = 150  # ❌ breaks invariant
