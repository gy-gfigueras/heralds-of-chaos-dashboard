export function oscurecerColor(hexColor: string, factor: number = 0.8): string {
  // Elimina el '#' si está presente
  hexColor = hexColor.replace(/^#/, '');

  // Extrae los valores R, G, B
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Aplica el factor de oscurecimiento y asegura que estén en el rango 0–255
  const darker = (value: number) =>
    Math.max(0, Math.min(255, Math.floor(value * factor)));

  const rDark = darker(r);
  const gDark = darker(g);
  const bDark = darker(b);

  // Convierte los valores de nuevo a hexadecimal con padding
  const toHex = (value: number) => value.toString(16).padStart(2, '0');

  return `#${toHex(rDark)}${toHex(gDark)}${toHex(bDark)}`;
}
