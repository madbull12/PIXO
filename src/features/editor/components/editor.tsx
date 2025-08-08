"use client";
import { fabric } from "fabric";
import { useEffect, useRef } from "react";
import { useEditor } from "@/src/features/editor/hooks/use-editor";
import Navbar from "@/src/features/editor/components/navbar";
import Sidebar from "@/src/features/editor/components/sidebar";
import Toolbar from "@/src/features/editor/components/toolbar";
import Footer from "@/src/features/editor/components/footer";

const Editor = () => {
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
      <Sidebar />

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
