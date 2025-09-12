"use client";
import { fabric } from "fabric";
import { useCallback, useEffect, useRef, useState } from "react";
import { useEditor } from "@/features/editor/hooks/use-editor";
import Navbar from "@/features/editor/components/navbar";
import Sidebar from "@/features/editor/components/sidebar";
import Toolbar from "@/features/editor/components/toolbar";
import Footer from "@/features/editor/components/footer";
import { ActiveTool } from "@/features/editor/types";

const Editor = () => {
  const [activeTool,setActiveTool] = useState<ActiveTool>("select")

  const onChangeActiveTool = useCallback((tool: ActiveTool) => {
    if(tool === activeTool) {
      return setActiveTool("select")
    }
    setActiveTool(tool)
  },[activeTool])
  const { init } = useEditor();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = new fabric.Canvas(canvasRef.current, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });

    // Set initial canvas size
    canvas.setWidth(containerRef.current.offsetWidth);
    canvas.setHeight(containerRef.current.offsetHeight);

    init({
      initialCanvas: canvas,
      initialContainer: containerRef.current,
    });

    return () => {
      canvas.dispose();
    };
  }, [init]);

  return (
    <div className="h-screen  bg-muted">
      <Navbar />
      <Sidebar activeTool={activeTool} onChangeActiveTool={onChangeActiveTool} />

      <div className="absolute h-[calc(100%-64px)] w-full top-[100px] flex">
        <Toolbar />
        <div
          ref={containerRef}
          className="h-full w-full flex items-center justify-center"
        >
          <canvas ref={canvasRef} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Editor;
