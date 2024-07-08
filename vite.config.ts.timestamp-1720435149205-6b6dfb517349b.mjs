// vite.config.ts
import Vue from "file:///Users/cofcat/i/aws-ai-summit-2024/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.11_@types+node@20.12.12__vue@3.4.27_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "node:path";
import UnoCSS from "file:///Users/cofcat/i/aws-ai-summit-2024/node_modules/.pnpm/unocss@0.60.2_postcss@8.4.38_rollup@4.14.3_vite@5.2.11_@types+node@20.12.12_/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///Users/cofcat/i/aws-ai-summit-2024/node_modules/.pnpm/unplugin-auto-import@0.17.6_@vueuse+core@10.9.0_vue@3.4.27_typescript@5.4.5___rollup@4.14.3/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///Users/cofcat/i/aws-ai-summit-2024/node_modules/.pnpm/unplugin-vue-components@0.27.0_@babel+parser@7.24.5_rollup@4.14.3_vue@3.4.27_typescript@5.4.5_/node_modules/unplugin-vue-components/dist/vite.js";
import VueMacros from "file:///Users/cofcat/i/aws-ai-summit-2024/node_modules/.pnpm/unplugin-vue-macros@2.9.2_@vueuse+core@10.9.0_vue@3.4.27_typescript@5.4.5___esbuild@0.20.2_ro_7myypnsiwyogl6boidniy7vakq/node_modules/unplugin-vue-macros/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///Users/cofcat/i/aws-ai-summit-2024/node_modules/.pnpm/unplugin-vue-router@0.8.6_rollup@4.14.3_vue-router@4.3.2_vue@3.4.27_typescript@5.4.5___vue@3.4.27_typescript@5.4.5_/node_modules/unplugin-vue-router/dist/index.mjs";
import VueRouter from "file:///Users/cofcat/i/aws-ai-summit-2024/node_modules/.pnpm/unplugin-vue-router@0.8.6_rollup@4.14.3_vue-router@4.3.2_vue@3.4.27_typescript@5.4.5___vue@3.4.27_typescript@5.4.5_/node_modules/unplugin-vue-router/dist/vite.mjs";
import { defineConfig } from "file:///Users/cofcat/i/aws-ai-summit-2024/node_modules/.pnpm/vite@5.2.11_@types+node@20.12.12/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "/Users/cofcat/i/aws-ai-summit-2024";
var vite_config_default = defineConfig({
  plugins: [
    VueMacros({
      defineModels: false,
      defineOptions: false,
      plugins: {
        vue: Vue({
          script: {
            defineModel: true,
            propsDestructure: true
          }
        })
      }
    }),
    // https://github.com/posva/unplugin-vue-router
    VueRouter(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      dirs: [
        "./src/composables"
      ],
      dts: true,
      imports: [
        "vue",
        "@vueuse/core",
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          "vue-router/auto": ["useLink"]
        }
      ],
      vueTemplate: true
    }),
    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true
    }),
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS()
  ],
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  // https://github.com/vitest-dev/vitest
  test: {
    environment: "jsdom"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY29mY2F0L2kvYXdzLWFpLXN1bW1pdC0yMDI0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY29mY2F0L2kvYXdzLWFpLXN1bW1pdC0yMDI0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jb2ZjYXQvaS9hd3MtYWktc3VtbWl0LTIwMjQvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5cbmltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IFZ1ZU1hY3JvcyBmcm9tICd1bnBsdWdpbi12dWUtbWFjcm9zL3ZpdGUnXG5pbXBvcnQgeyBWdWVSb3V0ZXJBdXRvSW1wb3J0cyB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXInXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZSdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBWdWVNYWNyb3Moe1xuICAgICAgZGVmaW5lTW9kZWxzOiBmYWxzZSxcbiAgICAgIGRlZmluZU9wdGlvbnM6IGZhbHNlLFxuICAgICAgcGx1Z2luczoge1xuICAgICAgICB2dWU6IFZ1ZSh7XG4gICAgICAgICAgc2NyaXB0OiB7XG4gICAgICAgICAgICBkZWZpbmVNb2RlbDogdHJ1ZSxcbiAgICAgICAgICAgIHByb3BzRGVzdHJ1Y3R1cmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bvc3ZhL3VucGx1Z2luLXZ1ZS1yb3V0ZXJcbiAgICBWdWVSb3V0ZXIoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi1hdXRvLWltcG9ydFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgZGlyczogW1xuICAgICAgICAnLi9zcmMvY29tcG9zYWJsZXMnLFxuICAgICAgXSxcbiAgICAgIGR0czogdHJ1ZSxcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgICdAdnVldXNlL2NvcmUnLFxuICAgICAgICBWdWVSb3V0ZXJBdXRvSW1wb3J0cyxcbiAgICAgICAge1xuICAgICAgICAgIC8vIGFkZCBhbnkgb3RoZXIgaW1wb3J0cyB5b3Ugd2VyZSByZWx5aW5nIG9uXG4gICAgICAgICAgJ3Z1ZS1yb3V0ZXIvYXV0byc6IFsndXNlTGluayddLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLWNvbXBvbmVudHNcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIGR0czogdHJ1ZSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bm9jc3NcbiAgICAvLyBzZWUgdW5vLmNvbmZpZy50cyBmb3IgY29uZmlnXG4gICAgVW5vQ1NTKCksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ34vJzogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpfS9gLFxuICAgIH0sXG4gIH0sXG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZpdGVzdC1kZXYvdml0ZXN0XG4gIHRlc3Q6IHtcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxlQUFlO0FBQ3RCLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sZUFBZTtBQUN0QixTQUFTLG9CQUFvQjtBQVY3QixJQUFNLG1DQUFtQztBQVl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxVQUFVO0FBQUEsTUFDUixjQUFjO0FBQUEsTUFDZCxlQUFlO0FBQUEsTUFDZixTQUFTO0FBQUEsUUFDUCxLQUFLLElBQUk7QUFBQSxVQUNQLFFBQVE7QUFBQSxZQUNOLGFBQWE7QUFBQSxZQUNiLGtCQUFrQjtBQUFBLFVBQ3BCO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBO0FBQUEsSUFHRCxVQUFVO0FBQUE7QUFBQSxJQUdWLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxRQUNKO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSztBQUFBLE1BQ0wsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQTtBQUFBLFVBRUUsbUJBQW1CLENBQUMsU0FBUztBQUFBLFFBQy9CO0FBQUEsTUFDRjtBQUFBLE1BQ0EsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBO0FBQUEsSUFHRCxXQUFXO0FBQUEsTUFDVCxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUE7QUFBQTtBQUFBLElBSUQsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE1BQU0sR0FBRyxLQUFLLFFBQVEsa0NBQVcsS0FBSyxDQUFDO0FBQUEsSUFDekM7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUdBLE1BQU07QUFBQSxJQUNKLGFBQWE7QUFBQSxFQUNmO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
