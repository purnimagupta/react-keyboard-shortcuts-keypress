export function capitalizeFirstLetter(string) {
    return string.replace(/\b\w/g, (c) => c.toUpperCase());
}