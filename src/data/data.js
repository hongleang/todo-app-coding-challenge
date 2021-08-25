import { v4 as uuidv4 } from "uuid";

const initialData = {
  tasks: {
    "task-1": { id: "task-1", title: "walk the dog", description: "At the park. Bring snacks!"},
    "task-2": { id: "task-2", title: "Bring gift for Abby", description: "At her dad store. She likes gems or dandallion" },
    "task-3": { id: "task-3", title: "Give Leek to George", description: "At his house. Bring good leek!"}
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Todo",
      taskIds: ["task-1","task-2","task-3"]
    },
    "column-2": {
      id: "column-2",
      title: "Done",
      taskIds: []
    }
  },
  columnOrder: ["column-1", "column-2"]
};

export default initialData;