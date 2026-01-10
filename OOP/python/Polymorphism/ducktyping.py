class Song:
    def play(self):
        return "Playing audio song"

class Video:
    def play(self):
        return "Playing video file"

class Podcast:
    def play(self):
        return "Playing podcast episode"

def play_media(media):
    print(media.play())

# Create objects
song = Song()
video = Video()
podcast = Podcast()

# Same function works with different objects
play_media(song)      # Output: Playing audio song
play_media(video)     # Output: Playing video file
play_media(podcast)   # Output: Playing podcast episode
