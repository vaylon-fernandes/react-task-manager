import { create } from "zustand";
import { ITasks } from "../interfaces/ITasks";
import { persist } from "zustand/middleware";

interface TaskState {
  tasks: ITasks[];
  addTask: (data: ITasks) => void;
}

export const useManageTasks = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (data: ITasks) =>
        set((state) => ({ tasks: [...state.tasks, data] })),
    }),
    {
      name: "task-storage", // name of the item in the storage (must be unique)
    }
  )
);
