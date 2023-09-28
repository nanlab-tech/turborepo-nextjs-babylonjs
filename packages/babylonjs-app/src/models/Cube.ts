import { Material, Mesh, MeshBuilder, Nullable, Scene } from "@babylonjs/core";

/**
 * Cube class represents wrapped mesh logic.
 */
export default class Cube {
  /** Wrapped mesh. */
  public readonly mesh: Mesh;

  /**
   * Constructor to create Cube object.
   * @param scene - Scene of the mesh.
   */
  constructor(scene: Scene) {
    this.mesh = MeshBuilder.CreateBox(
      "box",
      {
        width: 2,
        height: 2,
        depth: 2,
      },
      scene,
    );
  }

  /**
   * Position of the mesh on X axis.
   */
  public get positionX(): number {
    return this.mesh.position.x;
  }

  public set positionX(x: number) {
    this.mesh.position.x = x;
  }

  /**
   * Position of the mesh on X axis.
   */
  public get positionY(): number {
    return this.mesh.position.y;
  }

  public set positionY(y: number) {
    this.mesh.position.y = y;
  }

  /**
   * Position of the mesh on Z axis.
   */
  public get positionZ(): number {
    return this.mesh.position.z;
  }

  public set positionZ(z: number) {
    this.mesh.position.z = z;
  }

  /**
   * Material of the mesh.
   */
  public get material(): Nullable<Material> {
    return this.mesh.material;
  }

  public set material(material: Nullable<Material>) {
    this.mesh.material = material;
  }
}
