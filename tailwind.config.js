/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-400": "#9ca3af",
        "gray-900": "#111827",
        whitesmoke: "rgba(243, 244, 246, 0.5)",
        white: "#fff",
        "rose-700": "#be123c",
        "gray-300": "#d1d5db",
        "gray-500": "#6b7280",
        black: "#000",
        gainsboro: {
          "100": "#e8e8e8",
          "200": "rgba(232, 232, 232, 0.2)",
          "300": "rgba(232, 232, 232, 0.5)",
          "400": "rgba(232, 232, 232, 0.1)",
          "500": "rgba(232, 232, 232, 0.3)",
          "600": "rgba(232, 232, 232, 0.6)",
        },
        gray1: {
          "100": "rgba(0, 0, 0, 0.3)",
          "200": "rgba(255, 255, 255, 0.35)",
          "300": "rgba(255, 255, 255, 0.8)",
          "400": "rgba(33, 33, 33, 0.15)",
          "500": "rgba(18, 18, 18, 0.2)",
          "600": "rgba(18, 18, 18, 0.5)",
        },
        dimgray: "#666",
        mediumturquoise: "#3dd2cc",
        darkgray: "#a9acb2",
        aliceblue: "#d6edf6",
        ghostwhite: "#f1f1f9",
        lightcyan: "#d3eef7",
        darkslategray: {
          "100": "#404040",
          "200": "#333",
          "300": "rgba(51, 51, 51, 0.8)",
        },
        silver: "#c7c7c7",
        crimson: {
          "100": "rgba(190, 18, 60, 0.7)",
          "200": "rgba(190, 18, 60, 0.2)",
          "300": "rgba(190, 18, 60, 0.1)",
        },
        indianred: "#d84b60",
        firebrick: "#b91c1c",
        lavenderblush: {
          "100": "#f8e7eb",
          "200": "rgba(248, 231, 235, 0.4)",
        },
      },
      spacing: {},
      fontFamily: {
        "dm-sans": "'DM Sans'",
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "3xl": "22px",
        xl: "20px",
        mini: "15px",
        "11xl": "30px",
        "26xl": "45px",
      },
    },
    fontSize: {
      xs: "12px",
      lg: "18px",
      "5xl": "24px",
      base: "16px",
      sm: "14px",
      "29xl": "48px",
      "17xl": "36px",
      mini: "15px",
      "6xl": "25px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
