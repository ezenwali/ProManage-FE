export const StringToColor = (str: string, alpha?: number) => {
  let hash = 0;
  let i;
  for (i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  let colour = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    const modifiedValue = 128 + (value % 128);
    colour += `00${modifiedValue.toString(16)}`.substr(-2);
  }

  if (alpha !== undefined) {
    const opacity = Math.min(Math.max(0, alpha), 1); // Ensure alpha value is between 0 and 1
    const alphaHex = Math.floor(opacity * 255)
      .toString(16)
      .padStart(2, '0');
    colour += alphaHex;
  }

  return colour;
};
