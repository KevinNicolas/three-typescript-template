import * as THREE from "three";

interface CameraOptions {
  aspect?: number;
  far?: number;
  fov?: number;
  near?: number;
}

interface CameraPosition {
  x?: number;
  y?: number;
  z?: number;
}

export const createPerspectiveCamera = (
  { cameraOptions, cameraPosition }: { cameraOptions?: CameraOptions | undefined; cameraPosition?: CameraPosition | undefined } = {
    cameraOptions: undefined,
    cameraPosition: undefined,
  }
): THREE.PerspectiveCamera => {
  const { aspect, far, fov, near } = cameraOptions ?? {
    aspect: window.innerWidth / window.innerHeight,
    far: 100,
    fov: 70,
    near: 1,
  };
  const { x, y, z } = cameraPosition ?? { x: 0, y: 0, z: 1 };
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  if (x) camera.position.x = x;
  if (y) camera.position.y = y;
  if (z) camera.position.z = z;

  return camera;
};
