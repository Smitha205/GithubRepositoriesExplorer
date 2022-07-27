const styles = [
  // 0 for Accordion
  {
    backgroundColor: "#fff",
    borderRadius: "0",
    marginBottom: "10px",
    boxShadow: "none",
  },
  // 1 for AccordionSummary
  {
    backgroundColor: "#e4e2e2",
    borderRadius: "0",
  },
  // 2 for AccordionDetails
  {
    paddingRight: "0",
    border: "none",
  },
  // 3 for repo details, description and star count
  {
    backgroundColor: "#cbc8c8",
    marginLeft: "0.1rem",
    marginBottom: "5px",
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    gap: "10%",
  },
  // 4 for div with repo title and description
  {
    textAlign: "justify",
    width: "fit-content",
  },
  // 5 for div with star count
  {
    textAlign: "justify",
    width: "max-content",
  },
];

export { styles };
