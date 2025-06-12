// 3D Background with Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("bgCanvas"), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

const geometry = new THREE.IcosahedronGeometry(0.2);
const material = new THREE.MeshStandardMaterial({ color: 0xff00ff });
let particles = [];

for (let i = 0; i < 100; i++) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10
  );
  scene.add(mesh);
  particles.push(mesh);
}

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);

  particles.forEach(p => {
    p.rotation.x += 0.01;
    p.rotation.y += 0.01;
  });

  renderer.render(scene, camera);
}
animate();

// Sentiment Analysis Logic
function analyzeSentiment() {
  const text = document.getElementById("textInput").value.toLowerCase();
  const emoji = document.getElementById("emoji");

  if (text.includes("happy") || text.includes("good") || text.includes("great")) {
    emoji.src = "emojis/happy.png.png";
  } else if (text.includes("sad") || text.includes("bad") || text.includes("upset")) {
    emoji.src = "emojis/sad.png.png";
  } else if (text.includes("angry") || text.includes("mad")) {
    emoji.src = "emojis/angry.png.png";
  } else if (text.includes("hungry") || text.includes("mad")) {
    emoji.src = "emojis/hungry.png.png";
  } else if (text.includes("thirsty") || text.includes("mad")) {
    emoji.src = "emojis/thirsty.png.png";
  }  else if (text.includes("love") || text.includes("mad")) {
    emoji.src = "emojis/love.png.png";
  }  else {
    emoji.src = "emojis/neutral.png";
  }
}
