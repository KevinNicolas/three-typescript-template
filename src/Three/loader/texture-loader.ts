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
