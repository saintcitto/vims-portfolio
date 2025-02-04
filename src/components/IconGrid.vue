<template>
  <div class="container">
    <div class="category">
      <div class="icon-grid">
        <div
          class="icon"
          v-for="(tool, index) in developmentTools"
          :key="index"
          :style="{ '--index': index }"
        >
          <img :src="tool.icon" :alt="tool.name" />
          <p>{{ tool.name }}</p>
        </div>
      </div>
    </div>

    <div class="category">
      <div class="icon-grid">
        <div
          class="icon"
          v-for="(tool, index) in businessTools"
          :key="index"
          :style="{ '--index': index }"
        >
          <img :src="tool.icon" :alt="tool.name" />
          <p>{{ tool.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      developmentTools: [
        {
          name: "Figma",
          icon: "https://static-00.iconduck.com/assets.00/figma-icon-1024x1024-mvfh9xsk.png",
        },
        {
          name: "JMeter",
          icon: require("@/assets/icons/jmeter.png"),
        },
        {
          name: "OWASP ZAP",
          icon: "https://logos.bugcrowdusercontent.com/logos/2376/fdfa/651b17be/051e0245d787d1f71246d515e88a8564_zap256x256-oversize.png",
        },
        {
          name: "Vue.js",
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
        },
      ],
      businessTools: [
        {
          name: "F&B",
          icon: "https://em-content.zobj.net/source/apple/237/hamburger_1f354.png",
        },
        {
          name: "Python",
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        },
        {
          name: "Office",
          icon: require("@/assets/icons/office.png"),
        },
        {
          name: "QuickBooks",
          icon: require("@/assets/icons/qb.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
}

.category {
  margin-bottom: 40px;
}

.category h2 {
  font-size: 24px;
  color: white;
  margin-bottom: 20px;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0);
  animation: scaleUp 0.8s ease-out forwards;
  animation-delay: calc(0.1s * var(--index));
}

.icon img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon:hover img {
  transform: scale(1.2);
  box-shadow: 0px 6px 20px rgba(255, 255, 255, 0.3);
}

.icon p {
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  text-align: center;
}

@media (max-width: 1024px) {
  .icon-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }

  .icon img {
    width: 70px;
    height: 70px;
  }

  .icon p {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .icon-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .icon img {
    width: 60px;
    height: 60px;
  }

  .icon p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .icon-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .icon img {
    width: 50px;
    height: 50px;
  }

  .icon p {
    font-size: 12px;
  }
}

@keyframes scaleUp {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
