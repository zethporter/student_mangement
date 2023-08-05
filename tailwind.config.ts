import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['cupcake', 'dracula'],
    darkTheme: 'dracula',
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true
  }
} satisfies Config;
