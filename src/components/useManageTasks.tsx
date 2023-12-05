import { create } from "zustand";
import { ITasks } from "../interfaces/ITasks";

interface TaskState {
  tasks: ITasks[];
  addTask: (data: ITasks) => void;
}

export const useManageTasks = create<TaskState>()((set) => ({
  tasks: [],
  addTask: (data: ITasks) =>
    set((state) => ({ tasks: [...state.tasks, data] })),
}));
