import type { PersistOptions } from "zustand/middleware";
import type { AppStore } from "../types/appStore";

export const persistConfig: PersistOptions<AppStore> = {
  name: 'vivaquest_state',
}