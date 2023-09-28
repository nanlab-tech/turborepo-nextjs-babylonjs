import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  CubeTexture,
  Engine, FreeCamera,
  HemisphericLight, MeshBuilder,
  Nullable,
  Scene,
  Vector3,
} from "@babylonjs/core";

interface SceneContext {
  scene?: Scene;
  reactCanvas: React.MutableRefObject<Nullable<HTMLCanvasElement>>;
}

const SceneContext = createContext<SceneContext | null>(null);

interface ConfiguratorProviderProps {
  antialias?: boolean;
  adaptToDeviceRatio?: boolean;
  children?: React.ReactNode;
}

export const SceneProvider = ({
  children,
  antialias,
  adaptToDeviceRatio,
}: ConfiguratorProviderProps) => {
  const [scene, setScene] = useState<Scene>(null);
  const reactCanvas = useRef<Nullable<HTMLCanvasElement>>(null);

  const onSceneReady = (scene) => {
    const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(Vector3.Zero());

    const canvas = scene.getEngine().getRenderingCanvas();

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'ground' shape.
    MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);

    scene.environmentTexture = CubeTexture.CreateFromPrefilteredData(
      "/textures/Studio_Softbox_2Umbrellas_cube_specular.dds",
      scene
    );
  };

  // set up basic engine and scene
  useEffect(() => {
    const { current: canvas } = reactCanvas;
    if (!canvas) return;
    const engine = new Engine(canvas, antialias, undefined, adaptToDeviceRatio);
    const scene = new Scene(engine);
    if (scene.isReady()) {
      onSceneReady(scene);
    } else {
      scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
    }

    const resize = () => {
      scene.getEngine().resize();
    };

    if (window) {
      window.addEventListener("resize", resize);
    }
    engine.runRenderLoop(() => {
      scene.render();
    });

    setScene(scene);

    return () => {
      scene.getEngine().dispose();

      if (window) {
        window.removeEventListener("resize", resize);
      }
    };
  }, [antialias, adaptToDeviceRatio]);

  return (
    <SceneContext.Provider
      value={{
        scene: scene,
        reactCanvas: reactCanvas,
      }}
    >
      {children}
    </SceneContext.Provider>
  );
};

export const useScene = () => {
  const context = useContext(SceneContext);
  if (context === null) {
    throw new Error(
      "useSceneWrapper must be used within a SceneWrapperProvider"
    );
  }
  return context;
};
