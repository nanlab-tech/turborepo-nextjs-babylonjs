import { useScene } from "../context/scene-context";

const CanvasView = () => {
  const { reactCanvas } = useScene();

  return (
    <div className="w-full h-full">
      <canvas
        ref={reactCanvas}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default CanvasView;
