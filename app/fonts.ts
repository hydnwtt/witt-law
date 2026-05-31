/**
 * app/fonts.ts — fonts for the Witt Law design system.
 * DM Serif Display (display/headlines) via next/font/google; Libre Franklin
 * (body/UI) and Geist Mono (eyebrows/labels/meta, + italic) self-hosted via
 * next/font/local. globals.css composes these into --font-display/-sans/-mono.
 * Per the design SKILL: don't substitute other fonts for these three.
 */

import { DM_Serif_Display } from "next/font/google";
import localFont from "next/font/local";

export const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dmserif",
  display: "swap",
});

export const libreFranklin = localFont({
  src: [{ path: "./fonts/LibreFranklin-VariableFont_wght.ttf", weight: "100 900", style: "normal" }],
  variable: "--font-franklin",
  display: "swap",
});

export const geistMono = localFont({
  src: [
    { path: "./fonts/GeistMono-VariableFont_wght.ttf", weight: "100 900", style: "normal" },
    { path: "./fonts/GeistMono-Italic-VariableFont_wght.ttf", weight: "100 900", style: "italic" },
  ],
  variable: "--font-geist",
  display: "swap",
});
