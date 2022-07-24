import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const createOrbitControl = (camera: THREE.Camera, domElement: HTMLCanvasElement, opts?: undefined) => {
  const control = new OrbitControls(camera, domElement);
  return control;
};
