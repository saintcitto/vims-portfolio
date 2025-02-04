<template>
  <header class="header">
    <div class="logo">
      <h1>vims</h1>
    </div>
    <div class="social-links">
      <a
        href="https://linkedin.com/in/ryanshahteja/"
        target="_blank"
        aria-label="LinkedIn"
      >
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="mailto:ryanshahteja@gmail.com" aria-label="Email">
        <i class="fas fa-envelope"></i>
      </a>
      <a
        href="https://instagram.com/cittowest/"
        target="_blank"
        aria-label="Instagram"
      >
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.logo h1 {
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin: 0;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-links a {
  color: white;
  font-size: 24px;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-links a:hover {
  color: #ffaa00;
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .logo h1 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  .social-links {
    gap: 10px;
  }

  .social-links a {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 15px;
  }

  .logo h1 {
    font-size: 20px;
  }

  .social-links a {
    font-size: 18px;
  }
}
</style>
