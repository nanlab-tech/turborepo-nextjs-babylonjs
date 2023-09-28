import { useApp } from "../context/app-context";

const SidebarMenu = () => {
  const { isLoading, addCube, changeColor } = useApp();
  return (
    <div className="flex w-full h-full">
      {!isLoading && (
        <>
          <div className="flex-grow join join-vertical w-full rounded-none m-12">
            <h1 className="text-4xl mb-8">Your App UI</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={addCube}>
              Create Cube
            </button>

            <h1 className="text-xl mt-8 mb-2">Chose color</h1>
            <button className="text-white font-bold py-2 px-4 rounded-full"
                    style={{backgroundColor: "#cc1111"}}
                    onClick={() => changeColor("#cc1111")}>
              Red
            </button>
            <button className="text-white font-bold py-2 px-4 rounded-full"
                    style={{backgroundColor: "#1246d2"}}
                    onClick={() => changeColor("#1246d2")}>
              Blue
            </button>
            <button className="text-white font-bold py-2 px-4 rounded-full"
                    style={{backgroundColor: "#088d1a"}}
                    onClick={() => changeColor("#088d1a")}>
              Green
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SidebarMenu;
