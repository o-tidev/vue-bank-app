// currency formatter
const formatter = new Intl.NumberFormat("fi-FI", {
  style: "currency",
  currency: "EUR",
});

// exporting the custom hook
export function currency(value) {
  return formatter.format(value);
}
