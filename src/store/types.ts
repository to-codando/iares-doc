import type { StateType } from "@/utils/types";

export interface StoreType {
  menuIsVisible: boolean;
}

export type StoreActions = {
  toggleMenu: () => void;
};

export type ActionType = (store: StateType<StoreType>) => StoreActions;
