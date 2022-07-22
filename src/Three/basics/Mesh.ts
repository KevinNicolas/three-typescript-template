import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const createCube = (size: number, material: THREE.Material = new THREE.MeshNormalMaterial()) => {
  const geometry = new THREE.BoxGeometry(size, size, size);
  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
};

export const createSphere = (radius: number, material: THREE.Material = new THREE.MeshNormalMaterial()) => {
  const geometry = new THREE.SphereGeometry(radius);
  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
};

export const importGLTFModel = (url: string) =>
  new Promise((resolve) => {
    const loader = new GLTFLoader();

    loader.load(url, function (gltf) {
      resolve(gltf);
    });
  });
