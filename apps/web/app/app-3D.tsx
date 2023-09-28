"use client";
import CanvasView from "@/lib/components/CanvasView";
import {SceneProvider} from "@/lib/context/scene-context";
import {AppProvider} from "@/lib/context/app-context";
import SidebarMenu from "@/lib/components/SidebarMenu";

export default function App3D() {
  return (
    <SceneProvider antialias adaptToDeviceRatio>
      <AppProvider>
        <div className="flex h-screen">
          <div className="w-4/5">
            <CanvasView />
          </div>
          <div className="w-1/5">
            <SidebarMenu />
          </div>
        </div>
      </AppProvider>
    </SceneProvider>
  );
}
