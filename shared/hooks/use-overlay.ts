import { useCallback, useEffect, useState } from "react";
import { overlay } from "overlay-kit";
import type { OverlayAsyncControllerComponent } from "overlay-kit";

const randomId = () => `overlay-${Math.random().toString(36).slice(2, 11)}`;

export const useOverlay = () => {
  const [defaultOverlayId] = useState<string>(randomId());
  const [overlayId, setOverlayId] = useState<string>(defaultOverlayId);

  const open = useCallback(
    (
      controller: Parameters<typeof overlay.open>[0],
      options?: Parameters<typeof overlay.open>[1]
    ) => {
      const id = options?.overlayId ? options.overlayId : defaultOverlayId;
      setOverlayId(id);
      return overlay.open(controller, { ...options, overlayId: id });
    },
    [defaultOverlayId]
  );

  const close = useCallback(() => overlay.close(overlayId), [overlayId]);
  const unmount = useCallback(() => overlay.unmount(overlayId), [overlayId]);

  const openAsync = useCallback(
    <T>(
      controller: OverlayAsyncControllerComponent<T>,
      options?: { overlayId?: string | undefined } | undefined
    ): Promise<T> => {
      const id = options?.overlayId ? options.overlayId : defaultOverlayId;
      setOverlayId(id);
      return overlay.openAsync<T>(controller, { ...options, overlayId: id });
    },
    [defaultOverlayId]
  );

  // 컴포넌트가 언마운트될 때 자동으로 오버레이도 언마운트
  useEffect(() => {
    return () => {
      unmount();
    };
  }, [unmount]);

  return { open, close, unmount, openAsync };
};
