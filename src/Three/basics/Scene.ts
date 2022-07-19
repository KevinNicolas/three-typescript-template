import * as THREE from "three";

interface Props {
  background?: THREE.Color | THREE.Texture;
  meshes?: THREE.Object3D<THREE.Event>[] | THREE.Object3D<THREE.Event>;
  // (THREE.Mesh | THREE.Line)[] | THREE.Mesh | THREE.Line;
}

export const createScene = ({ background = new THREE.Color("#333"), meshes }: Props) => {
  const scene = new THREE.Scene();
  scene.background = background;

  if (meshes) {
    if (Array.isArray(meshes)) for (const mesh of meshes) scene.add(mesh);
    else scene.add(meshes);
  }

  return scene;
};
