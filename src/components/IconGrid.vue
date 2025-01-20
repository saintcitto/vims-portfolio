<template>
  <div class="icon-grid">
    <div
      class="icon"
      v-for="(tool, index) in tools"
      :key="index"
      :style="{ '--index': index }"
    >
      <img :src="tool.icon" :alt="tool.name" />
      <p>{{ tool.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tools: [
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
.icon-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Selalu 4 kolom */
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  animation: scaleUp 0.8s ease-out forwards;
  animation-delay: calc(0.2s * var(--index));
}

.icon img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 10px;
}

.icon:hover img {
  transform: scale(1.2);
  box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.3);
}

.icon p {
  margin-top: 10px;
  font-size: 14px;
  color: white;
  text-align: center;
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

/* Responsivitas */
@media (max-width: 768px) {
  .icon-grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 kolom */
  }
}

@media (max-width: 480px) {
  .icon-grid {
    grid-template-columns: repeat(1, 1fr); /* Mobile: 1 kolom */
  }

  .icon img {
    width: 60px;
    height: 60px;
  }

  .icon p {
    font-size: 12px;
  }
}
</style>
