import * as THREE from "three";

interface Options {
  antialias: boolean;
}

export const createRenderer = (opts?: Options) => {
  const { antialias } = opts ?? { antialias: true };

  const renderer = new THREE.WebGLRenderer({ antialias });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  return renderer;
};
