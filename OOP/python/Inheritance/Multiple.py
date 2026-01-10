# Multiple Inheritance Example

class AudioTrack:
    def __init__(self, bitrate):
        self.bitrate = bitrate


class VisualSequence:
    def __init__(self, resolution):
        self.resolution = resolution


class VideoClip(AudioTrack, VisualSequence):  # Multiple inheritance
    def __init__(self, bitrate, resolution, duration):
        AudioTrack.__init__(self, bitrate)
        VisualSequence.__init__(self, resolution)
        self.duration = duration

    def details(self):
        print(f"Bitrate: {self.bitrate} kbps, Resolution: {self.resolution}, Duration: {self.duration}s")


clip = VideoClip(256, "1080p", 180)
clip.details()
