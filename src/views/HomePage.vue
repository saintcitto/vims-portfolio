<template>
  <section class="home">
    <div class="intro">
      <h1 class="name">I'm Ryan <span class="wave-motion-emoji">🛠️</span></h1>
      <div class="marquee">
        <div class="marquee_text">
          <p>UI/UX designer</p>
          <p>enhancing experiences @VueJS</p>
          <p>Front-end & QA advocate crafting seamless apps</p>
        </div>
      </div>
      <p class="fade-in">I'm interested based on my work experience:</p>
    </div>
    <IconGrid />
    <AboutMe />
    <ProjectsShowcase />
  </section>
</template>

<script>
import IconGrid from "../components/IconGrid.vue";
import AboutMe from "../components/AboutMe.vue";
import ProjectsShowcase from "../components/ProjectsShowcase.vue";

export default {
  components: {
    IconGrid,
    AboutMe,
    ProjectsShowcase,
  },
};
</script>

<style scoped>
/* Global Reset */
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat Alternates", sans-serif;
  background-color: #000;
  color: #fff;
  font-size: 24px;
}

/* Section Styling */
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  gap: 50px;
}

.intro {
  text-align: left;
  max-width: 100%;
}

.intro h1 {
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 36px;
  margin-bottom: 20px;
  color: white;
}

/* Marquee Styling */
.marquee {
  position: relative;
  width: 100%;
  height: 6em;
  font-size: 1.8rem;
  display: grid;
  justify-content: flex-start;
  overflow: hidden;
}

.marquee_text {
  position: relative;
  white-space: nowrap;
  animation: marquee 10s infinite linear;
}

.marquee_text p {
  margin-bottom: 20px;
}

/* Animations */
@keyframes marquee {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

.wave-motion-emoji {
  display: inline-block;
  animation: waveMotionEmoji 2s ease-in-out 2;
}

@keyframes waveMotionEmoji {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsiveness */
@media (max-width: 768px) {
  .home {
    padding: 30px 15px;
  }

  .intro h1 {
    font-size: 28px;
  }

  .marquee {
    font-size: 1.4rem;
    height: 5em;
  }

  .marquee_text p {
    margin-bottom: 15px;
  }
}

@media (max-width: 480px) {
  .intro h1 {
    font-size: 24px;
  }

  .marquee {
    font-size: 1.2rem;
    height: 4em;
  }

  .marquee_text p {
    margin-bottom: 10px;
  }
}
</style>
