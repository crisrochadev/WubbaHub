export function getStatusColor(status: string): string {
  switch (status) {
    case "Alive":
      return "green";
    case "Dead":
      return "red";
    default:
      return "grey";
  }
}