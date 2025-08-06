import { useCallback, useEffect } from "react";
import { fabric } from "fabric";

interface UseAutoResizeParams {
  canvas: fabric.Canvas | null;
  container: HTMLDivElement | null;
}
export const useAutoResize = ({ canvas, container }: UseAutoResizeParams) => {
  const autoZoom = useCallback(() => {
    if (!canvas || !container) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    canvas.setWidth(width);
    canvas.setHeight(height);

    const center = canvas.getCenter();

    const zoomRatio = 0.85;
    const localWorkspace = canvas
      .getObjects()
      .find((object) => object.name === "clip");

    //@ts-ignore
    const scale = fabric.util.findScaleToFit(localWorkspace, {
      width,
      height,
    });

    const zoom = zoomRatio * scale;

    canvas.setViewportTransform(fabric.iMatrix.concat());
    canvas.zoomToPoint(new fabric.Point(center.left, center.top), zoom);

    if (!localWorkspace) return;

    const workspaceCenter = localWorkspace.getCenterPoint();
    const viewportTransform = canvas.viewportTransform;

    if (!canvas.width || !canvas.height || !viewportTransform) return;
    viewportTransform[4] =
      canvas.width / 2 - workspaceCenter.x * viewportTransform[0];

    viewportTransform[5] =
      canvas.height / 2 - workspaceCenter.y * viewportTransform[3];

    canvas.setViewportTransform(viewportTransform);

    localWorkspace.clone((clonedWorkspace:fabric.Rect) => {
      canvas.clipPath = clonedWorkspace;
      canvas.requestRenderAll();
    });
  }, [canvas, container]);
  useEffect(() => {
    let resizeObserver: ResizeObserver | null = null;
    if (canvas && container) {
      resizeObserver = new ResizeObserver(() => {
        autoZoom();
      });
      resizeObserver.observe(container);
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [canvas, container, autoZoom]);
};
