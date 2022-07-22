import { Object3D, Event } from "three";
import { createPerspectiveCamera, createRenderer, createScene } from "../../Three";

export const createBasicScenario = (meshes?: Object3D<Event>[] | Object3D<Event>) => {
  const camera = createPerspectiveCamera({ cameraOptions: { fov: 100 }, cameraPosition: { z: 5 } });
  const scene = createScene({
    meshes,
  });
  const renderer = createRenderer();
  renderer.render(scene, camera);

  return { camera, renderer, scene };
};
