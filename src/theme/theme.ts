export const lightTheme = {
  backgroundColor: 'radial-gradient(rgb(206, 234, 243), white)',
  textColor: `rgba(187, 211, 255, 1)`,
  secondaryTextColor: 'rgba(255, 255, 255, 1)',
  textColorOpacity: `rgba(187, 211, 255, 0.5)`,
};

export const darkTheme = {
  backgroundColor: 'radial-gradient(rgb(73, 67, 67), white)',
  textColor: `rgb(198, 37, 37)`,
  secondaryTextColor: 'rgba(255, 255, 255, 1)',
  textColorOpacity: `rgb(198, 37, 37, 0.5)`,
};

export type Theme = typeof lightTheme | typeof darkTheme;
