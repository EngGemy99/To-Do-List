export function formatDate(dateString) {
  const options = { month: "short", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}
