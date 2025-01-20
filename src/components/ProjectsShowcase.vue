<template>
  <div class="projects-showcase">
    <div class="projects-container">
      <div class="row">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project-card"
          :style="{
            backgroundImage: `linear-gradient(135deg, ${project.gradientStart}, ${project.gradientEnd})`,
          }"
        >
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="card-link"
          >
            <div class="card-cover">
              <img
                :src="project.image"
                alt="project.title"
                class="cover-image"
              />
            </div>
            <div class="card-content">
              <div class="card-logo">
                <img :src="project.icon" alt="Logo" class="logo" />
              </div>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-role">{{ project.role }}</p>
              <p class="project-year">/ {{ project.year }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsShowcase",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Vims-Portfolio",
          role: "GitHub Repository",
          year: "2024",
          gradientStart: "#FF512F",
          gradientEnd: "#F09819",
          image: "https://via.placeholder.com/300x200",
          icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
          link: "https://github.com/saintcitto/vims-portfolio",
        },
        {
          id: 2,
          title: "POS Sonia Cafe",
          role: "GitHub Repository",
          year: "2024",
          gradientStart: "#396afc",
          gradientEnd: "#2948ff",
          image: "https://via.placeholder.com/300x200",
          icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
          link: "https://github.com/saintcitto/POS-Sonia-Cafe",
        },
        {
          id: 3,
          title: "Project Shit Portfolio",
          role: "GitHub Repository",
          year: "2024",
          gradientStart: "#34e89e",
          gradientEnd: "#0f3443",
          image: "https://via.placeholder.com/300x200",
          icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
          link: "https://github.com/saintcitto/shit-portofolio",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;600;700&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
}

.projects-showcase {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  overflow-x: hidden;
  font-family: "Montserrat Alternates", sans-serif;
}

.projects-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
}

.project-card {
  position: relative;
  background: #1c1c1e;
  border-radius: 20px;
  width: 320px;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  font-family: "Montserrat Alternates", sans-serif;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.card-link {
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
}

.card-cover {
  width: 100%;
  height: auto;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 15px;
  overflow-wrap: break-word;
}

.card-logo {
  margin-bottom: 10px;
}

.logo {
  width: 50px;
  height: 50px;
}

.project-title {
  font-size: 1.1em;
  font-weight: bold;
  margin: 10px 0;
  font-family: "Montserrat Alternates", sans-serif;
}

.project-role {
  font-size: 0.9em;
  color: #dcdcdc;
  margin: 5px 0;
}

.project-year {
  font-size: 0.8em;
  color: #a1a1a1;
  margin: 0;
}

@media (max-width: 768px) {
  .project-card {
    width: 90%;
  }
  .card-content {
    padding: 10px;
  }
  .logo {
    width: 40px;
    height: 40px;
  }
  .project-title {
    font-size: 1em;
  }
  .project-role {
    font-size: 0.8em;
  }
  .project-year {
    font-size: 0.7em;
  }
}

@media (max-width: 480px) {
  .row {
    flex-direction: column;
    gap: 15px;
  }
  .project-card {
    width: 100%;
  }
}
</style>
