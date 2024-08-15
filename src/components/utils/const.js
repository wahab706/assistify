// Utility function to join class names conditionally
export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
