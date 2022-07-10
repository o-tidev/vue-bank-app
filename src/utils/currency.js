const formatter = new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR' });

export function currency(value) {
    return formatter.format(value)
}