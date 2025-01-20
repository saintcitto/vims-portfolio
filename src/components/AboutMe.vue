<template>
  <section class="gap-section">
    <div class="gap-message">
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3E5aW9xbjJoaHZ0OTlrdGZ1cHZlZXJwNHZ2ajB2eW40NDVvN3piaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IglQkzvuewsoD6E1Pj/giphy.webp"
        alt="Take a Break GIF"
        class="gap-gif"
      />
      <p>LeBron says: Take a Break Sunshine and Enjoy Some Music</p>
    </div>
  </section>

  <section class="music-carousel">
    <div class="carousel-container">
      <ul class="carousel" ref="carousel">
        <li
          class="carousel-item"
          v-for="(item, index) in songs"
          :key="index"
          :class="{ active: index === currentIndex }"
        >
          <div class="iphone-frame">
            <div class="music-player">
              <div class="music-player-details">
                <img
                  class="album-art"
                  :src="getAlbumArt(item.albumArt)"
                  alt="Album Art"
                />
                <p class="song-title">{{ item.title }}</p>
                <p class="artist">{{ item.artist }}</p>
                <audio
                  :ref="`audioPlayer${index}`"
                  :src="getAudioSrc(item.audioSrc)"
                  :key="currentIndex"
                  controls
                  preload="metadata"
                />
              </div>
            </div>
            <div class="carousel-nav">
              <button
                @click="prevItem"
                class="carousel-nav-button prev"
                aria-label="Previous"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M15 18l-6-6 6-6"></path>
                </svg>
              </button>
              <button
                @click="nextItem"
                class="carousel-nav-button next"
                aria-label="Next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "MusicCarousel",
  data() {
    return {
      currentIndex: 0,
      songs: [
        {
          albumArt: "kanye.jpg",
          title: "Devil In A New Dress",
          artist: "Kanye West ft Rick Ross",
          audioSrc: "Devil In A New Dress.mp3",
        },
        {
          albumArt: "abel.jpg",
          title: "Snowchild",
          artist: "The Weeknd",
          audioSrc: "Snowchild.mp3",
        },
        {
          albumArt: "kendrick.jpeg",
          title: "Blood",
          artist: "Kendrick Lamar",
          audioSrc: "Blood.mp3",
        },
        {
          albumArt: "travis.jpeg",
          title: "My Eyes",
          artist: "Travis Scott",
          audioSrc: "MyEyes.mp3",
        },
        {
          albumArt: "frank.jpg",
          title: "White Ferrari",
          artist: "Frank Ocean",
          audioSrc: "White Ferarri.mp3",
        },
        {
          albumArt: "metro.jpeg",
          title: "We Still Don't Trus You",
          artist: "Future, Metro Boomin, The Weeknd",
          audioSrc: "WSDTY.mp3",
        },
      ],
    };
  },
  methods: {
    nextItem() {
      this.currentIndex = (this.currentIndex + 1) % this.songs.length;
      this.updateCarousel();
    },
    prevItem() {
      this.currentIndex =
        (this.currentIndex - 1 + this.songs.length) % this.songs.length;
      this.updateCarousel();
    },
    updateCarousel() {
      const carousel = this.$refs.carousel;
      const offset = -this.currentIndex * 100;
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateX(${offset}%)`;
    },
    getAlbumArt(albumArt) {
      return require(`@/assets/icons/${albumArt}`);
    },
    getAudioSrc(audioSrc) {
      return require(`@/assets/kanye/${audioSrc}`);
    },
  },
};
</script>

<style scoped>
.music-carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.carousel-container {
  display: flex;
  overflow: hidden;
  width: 100%;
}

.carousel {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.carousel-item.active {
  opacity: 1;
}

.iphone-frame {
  width: 375px;
  height: 750px;
  background: #fff;
  border-radius: 60px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
  overflow: hidden;
}

.music-player {
  display: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}

.album-art {
  width: 100%;
  max-width: 180px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.song-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
}

.artist {
  font-size: 16px;
  color: #555;
}

audio {
  width: 100%;
  margin-top: 10px;
}

.carousel-nav {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
}

.carousel-nav-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.carousel-nav-button svg {
  width: 50px;
  height: 50px;
  opacity: 0.7;
}

.carousel-nav-button:hover svg {
  opacity: 1;
}

.gap-section {
  margin-top: 40px;
  text-align: center;
  font-size: 20px;
  animation: bounceIn 1s ease-out;
}

.gap-message {
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  animation: zoomIn 1s ease-out;
  display: inline-block;
}

.gap-gif {
  width: 300px;
  height: auto;
  margin-bottom: 15px;
}

@keyframes bounceIn {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  60% {
    transform: translateY(30px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes zoomIn {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
