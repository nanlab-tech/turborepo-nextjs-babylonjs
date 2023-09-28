import {Color3, PBRMaterial, Scene} from "@babylonjs/core";
import Cube from "../models/Cube";

/**
 * Class represents api for your 3D app.
 */
export default class My3DApp {
  private readonly scene: Scene;

  private cube?: Cube;

  /**
   * Constructor for My3DApp class.
   * @param scene - Babylonjs Scene.
   */
  constructor(scene: Scene) {
    this.scene = scene;
  }

  /**
   * Method to create new Cube object.
   */
  public createCube(): void {
    if (this.cube === undefined) {
      this.cube = new Cube(this.scene);
      this.cube.positionY = 1;
    }
  }

  /**
   * Method to create new Cube object.
   * @param color - Color to be assigned to the material of the cube.
   */
  public changeCubeMaterial(color: string): void {
    if (this.cube !== undefined) {
      const pbr = new PBRMaterial("basic", this.scene);
      pbr.albedoColor = Color3.FromHexString(color);
      pbr.reflectionColor = Color3.FromHexString(color);
      pbr.metallic = 0.0;
      pbr.roughness = 1;
      this.cube.material = pbr;
    }
  }
}
