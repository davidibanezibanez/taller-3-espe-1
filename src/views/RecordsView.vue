<template>
    <div class="records-container">
      <div class="title-container">
        <h1>Records de Juego</h1>
      </div>
      
      <div class="player-info">
        <p>Jugador actual: {{ currentPlayer }}</p>
      </div>
      
      <div class="records">
        <h2>Victorias:</h2>
        <p>{{ currentPlayer }}: {{ playerWins }}</p>
        <p>Jugador invitado: {{ guestWins }}</p>
      </div>
      
      <button @click="updateRecords" class="update-btn">Actualizar Records</button>
      
      <button @click="goHome" class="home-btn">Regresar al Home</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const currentPlayer = ref('Jugador invitado');
  const playerWins = ref(0);
  const guestWins = ref(0);
  
  onMounted(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser && loggedInUser.username) {
      currentPlayer.value = loggedInUser.username;
    }
    
    // Cargar records existentes si los hay
    const savedRecords = JSON.parse(localStorage.getItem('gameRecords'));
    if (savedRecords) {
      playerWins.value = savedRecords.playerWins;
      guestWins.value = savedRecords.guestWins;
    }
  });
  
  const updateRecords = () => {
    // Asignar victoria aleatoriamente
    if (Math.random() < 0.5) {
      playerWins.value++;
    } else {
      guestWins.value++;
    }
    
    // Guardar records actualizados
    localStorage.setItem('gameRecords', JSON.stringify({
      playerWins: playerWins.value,
      guestWins: guestWins.value
    }));
  };
  
  const goHome = () => {
    router.push('/'); // Asumiendo que la ruta del home es '/'
  };
  </script>
  
  <style scoped>
  .records-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  .title-container {
    background-color: #4a4a4a;
    color: white;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    margin: 0;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  .player-info {
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  
  .records {
    background-color: #e6f2ff;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin: 10px;
  }
  
  .update-btn {
    background-color: #4CAF50;
    color: white;
  }
  
  .home-btn {
    background-color: #008CBA;
    color: white;
  }
  
  button:hover {
    opacity: 0.8;
  }
  </style>