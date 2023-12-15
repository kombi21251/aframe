// Import necessary modules
import * as THREE from 'three';

// Your array of vertices
const vertices = [
  new THREE.Vector2(-1, -1),
  new THREE.Vector2(1, -1),
  new THREE.Vector2(1, 1),
  new THREE.Vector2(-1, 1),
];

// Create a shape based on the vertices
const shape = new THREE.Shape(vertices);

// Set extrusion settings
const extrudeSettings = {
  depth: 1,  // Extrusion depth
  bevelEnabled: false,  // Disable bevel
};

// Create the extruded geometry
const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

// Create a mesh using the geometry
const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x00ff00 }));

// Add the mesh to your scene
scene.add(mesh);
