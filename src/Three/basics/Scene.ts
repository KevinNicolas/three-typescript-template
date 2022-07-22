import * as THREE from "three";

export const getTextureFromUrl = (path: string, callback?: (texture: THREE.Texture) => void | undefined): Promise<THREE.Texture> => {
  return new Promise((resolve) => {
    const loader = new THREE.TextureLoader();
    loader.loadAsync(path).then((texture) => {
      if (callback) callback(texture);
      resolve(texture);
    });
  });
};

interface Props {
  background?: THREE.Color | THREE.Texture;
  meshes?: THREE.Object3D<THREE.Event>[] | THREE.Object3D<THREE.Event>;
  // (THREE.Mesh | THREE.Line)[] | THREE.Mesh | THREE.Line;
}
export const createScene = (sceneProps: Props = {}) => {
  const { background, meshes } = sceneProps ?? { background: new THREE.Color("#333"), meshes: [] };
  const scene = new THREE.Scene();
  scene.background = background ?? new THREE.Color("#333");

  if (meshes) {
    if (Array.isArray(meshes)) for (const mesh of meshes) scene.add(mesh);
    else scene.add(meshes);
  }

  return scene;
};
