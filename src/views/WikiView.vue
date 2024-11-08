<template>
  <div class="container">
    <h1>Wiki de Patos Intergalácticos</h1>
    
    <div class="main-story">
      <h2>Historia Principal</h2>
      <p>
        En un universo lejano, la especie de los Patos Intergalácticos ha dominado las estrellas durante milenios. 
        Su civilización avanzada se extiende por galaxias enteras, pero ahora enfrenta una crisis sin precedentes. 
        El antiguo emperador ha fallecido sin dejar un heredero claro, y cuatro príncipes patos, cada uno con sus propias 
        habilidades y visión para el futuro, compiten por el Trono Cósmico. La paz de la galaxia pende de un hilo mientras 
        Luis, Félix, Armin y David se embarcan en una épica aventura espacial, llena de desafíos, alianzas inesperadas y 
        peligros cósmicos, para demostrar quién es el más digno de liderar a los Patos Intergalácticos hacia un nuevo amanecer estelar.
      </p>
    </div>
    
    <div class="character-grid">
      
      <div class="card character">
        <h2>Luis</h2>
        <img src="../assets/luis.png" alt="Luis">
        <p>
          Luis, el estratega brillante, posee una mente aguda y un don para la diplomacia. Su habilidad para negociar 
          tratados interestelares lo ha convertido en el favorito de muchas colonias pato. Sueña con expandir el imperio 
          a través de alianzas pacíficas y avances tecnológicos.
        </p>
      </div>
      
      
      <div class="card character">
        <h2>Félix</h2>
        <img src="../assets/felix.png" alt="Félix">
        <p>
          Félix, el guerrero intrépido, es un maestro en el arte del combate espacial. Su valentía en la batalla contra 
          las amenazas alienígenas lo ha convertido en un héroe para muchos. Cree que un imperio fuerte debe estar preparado 
          para defenderse de cualquier amenaza externa.
        </p>
      </div>
      
      
      <div class="card character">
        <h2>Armin</h2>
        <img src="../assets/armin.png" alt="Armin">
        <p>
          Armin, el científico visionario, ha revolucionado la tecnología de viajes interestelares. Su pasión por la 
          exploración y el descubrimiento lo impulsa a buscar nuevos horizontes para los Patos Intergalácticos. Sueña 
          con un imperio que lidere la galaxia en innovación y conocimiento.
        </p>
      </div>
      
      
      <div class="card character">
        <h2>David</h2>
        <img src="../assets/david.png" alt="David">
        <p>
          David, el carismático líder popular, tiene un don innato para conectar con los patos de todas las clases sociales. 
          Su visión de un imperio más igualitario y su habilidad para inspirar a las masas lo han convertido en el campeón 
          del pato común. Busca reformar el imperio desde dentro para beneficiar a todos.
        </p>
      </div>
    </div>
    <div class="go-home-button">
      <button @click="goHome">Volver al Home</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goHome() {
  router.push('/');
}
</script>

<style scoped>

.go-home-button {
  text-align: center;
  margin-top: 2rem;
}

.go-home-button button {
  padding: 12px 25px;
  font-size: 18px;
  cursor: pointer;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.go-home-button button:hover {
  background-color: #218838;
  transform: scale(1.05);
}

.go-home-button button:active {
  transform: scale(1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.main-story {
  background-color: #e6f2ff;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.character-grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  background-color: #fff0e6;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 200px;
}

h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #444;
}

img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

@media (max-width: 1024px) {
  .character-grid {
    flex-direction: column;
  }
  
  .card {
    width: 100%;
  }
}
</style>