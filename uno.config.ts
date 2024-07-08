import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: [
          {
            name: 'Noto Sans TC',
            weights: ['300', '400', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
  ],
  rules: [
    ['rounded-5xl', { 'border-radius': '4rem' }],
  ],
  shortcuts: [
    ['btn', 'pos-relative grid h-22 w-60 cursor-pointer place-items-center border border-4 border-white rounded-2xl text-10 text-white font-bold leading-[57.92px] op100 disabled:op20 disabled:cursor-default transition transition-all duration-300'],
    ['title', 'text-[rgb(255,236,151)]'],
  ],
})
