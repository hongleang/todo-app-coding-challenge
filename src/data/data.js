const initialData = {
  tasks: {
    "task-1": { id: "task-1", title: "walk the dog", description: "At the park. Bring snacks!", isDone: false},
    "task-2": { id: "task-2", title: "Bring gift for Abby", description: "At her dad store. She likes gems or dandallion", isDone:false },
    "task-3": { id: "task-3", title: "Give Leek to George", description: "At his house. Bring good leek!", isDone: true}
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Todo",
      taskIds: ["task-1","task-2"]
    },
    "column-2": {
      id: "column-2",
      title: "Done",
      taskIds: ["task-3"]
    }
  },
  columnOrder: ["column-1", "column-2"]
};

export default initialData;