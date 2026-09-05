import { useContext } from 'react';
import { appConfig } from '../config/AppConfig';
import { AppContext } from '@/context/AppContext';
import { lightTheme, darkTheme } from '@/themes/defaultTheme';

/**
 * Utility functions for global use.
 */
// Capitalizes the first letter of a string
export function capitalize(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Formats a date to 'YYYY-MM-DD'
export function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
}

// Generates a random integer between min and max (inclusive)
export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Checks if a value is empty (null, undefined, empty string, or empty array)
export function isEmpty(value: unknown): boolean {
    return (
        value === null ||
        value === undefined ||
        (typeof value === 'string' && value.trim() === '') ||
        (Array.isArray(value) && value.length === 0)
    );
}

/**
 * Returns the appropriate class based on the theme mode.
 * @param classForDarkMode - CSS class for dark mode
 * @param classForLightMode - CSS class for light mode
 * @param theme - (optional) theme mode ('dark' or 'light' or 'system')
 * @returns The class name based on the current theme mode
 */
export function useClassByThemeMode(
    classForDarkMode: string,
    classForLightMode: string
): string {
      const context = useContext(AppContext);
      const mode = context?.mode ?? appConfig.theme.defaultMode; // Use mode from context or fallback to appConfig

    // Use provided theme, or fallback to localStorage, or default to DEFAULT_MODE
    let currentTheme = (typeof window !== "undefined" && localStorage.getItem("theme-mode")) && mode;

    // If 'system', try to detect system preference
    if (currentTheme === 'system' && typeof window !== 'undefined') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        currentTheme = isDark ? 'dark' : 'light';
    }

    return currentTheme === 'dark' ? classForDarkMode : classForLightMode;
}

/**
 * Returns the appropriate theme object based on the mode.
 * @param mode - The theme mode ('light', 'dark', or 'system')
 * @returns The theme object (lightTheme or darkTheme)
 */
export function getAppliedTheme(mode: 'light' | 'dark' | 'system') {
  if (mode === 'dark') return darkTheme;
  if (mode === 'light') return lightTheme;
  if (mode === 'system' && typeof window !== 'undefined') {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return isDark ? darkTheme : lightTheme;
  }
  return lightTheme;
}
