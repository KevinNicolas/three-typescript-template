import { createBasicScenario, createCube } from "./Three";

(async () => {
  console.info("Init..");
  const cube = createCube(1);
  cube.rotation.set(2, 0, 2);

  createBasicScenario(cube);
})();
