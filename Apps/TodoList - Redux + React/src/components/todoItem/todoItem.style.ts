export const customStyle = {
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    background: "white",
    marginBottom: "1rem",
    borderRadius: "4px",
  },
  todoDetails: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "1rem",
  },
  texts: { display: "flex", flexDirection: "column", overflow: "hidden" },
  todoIncomplete: {},
  todoComplete: {
    textDecoration: "line-through",
  },
  time: {
    display: "block",
    fontSize: "1.2rem",
    fontWeight: "300",
    marginTop: "-0.2rem",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  },
  icons: {
    cursor: "pointer",
    fontSize: "1.5rem",
  },
};
