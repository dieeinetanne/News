function addThought() {
  const input = document.getElementById('thoughtInput');
  const cloud = document.getElementById('cloud');
  
  if (input.value.trim() !== "") {
    const newThought = document.createElement('span');
    newThought.innerText = input.value;
    newThought.className = 'thought';
    
    // Zufällige Position innerhalb des Containers
    const x = Math.random() * (cloud.clientWidth - 50);
    const y = Math.random() * (cloud.clientHeight - 20);
    
    newThought.style.left = x + 'px';
    newThought.style.top = y + 'px';
    
    // Zufällige Animationsdauer für mehr Natürlichkeit
    newThought.style.animationDuration = (Math.random() * 5 + 5) + 's';

    cloud.appendChild(newThought);
    input.value = ""; // Eingabefeld leeren
  }
}