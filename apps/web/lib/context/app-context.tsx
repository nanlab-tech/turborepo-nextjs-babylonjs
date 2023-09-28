import React, { createContext, useContext, useEffect, useState } from 'react';
import {useScene} from './scene-context';
import {My3DApp} from 'babylonjs-app';

interface AppContext {
  isLoading: boolean;
  addCube: () => void;
  changeColor: (color: string) => void;
}

const AppContext = createContext<AppContext | null>(null);

interface AppProviderProps {
  children?: React.ReactNode;
}

export const AppProvider = ({
  children,
}: AppProviderProps) => {
  const { scene } = useScene();
  const [api, setApi] = useState<My3DApp>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (api === null && scene !== null) {
      const a = new My3DApp(scene,);
      setApi(a);
      setIsLoading(false);
    }
  }, [api, scene]);

  const addCube = (): void => {
    if (api) {
      api.createCube();
    }
  };

  const changeColor = (color: string): void => {
    if (api) {
      api.changeCubeMaterial(color);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isLoading: isLoading,
        addCube: addCube,
        changeColor: changeColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useApp must be used within a SceneProvider");
  }
  return context;
};
