module.exports ={
  "name": "vite3vue3",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build:fat": "vue-tsc --noEmit && vite build --mode fat",
    "build:fat2": "vue-tsc --noEmit && vite build --mode fat2",
    "build": "vue-tsc --noEmit && vite build --mode production",
    "preview": "vite preview",
    "lint": "eslint --ext .ts,.vue,.tsx src --fix",
    "prepare": "husky install"
  },
  "lint-staged": {
    "**/*.{js,jsx,tsx,ts,vue}": [
      "npm run lint",
      "git add ."
    ]
  },
  "dependencies": {
    "unplugin-auto-import": "^0.11.2",
    "vue": "^3.2.37"
  },
  "devDependencies": {
    "@commitlint/cli": "^17.1.2",
    "@commitlint/config-conventional": "^17.1.0",
    "@types/node": "^18.7.18",
    "@typescript-eslint/eslint-plugin": "^5.37.0",
    "@typescript-eslint/parser": "^5.37.0",
    "@vitejs/plugin-vue": "^3.1.0",
    "autoprefixer": "^10.4.9",
    "commitlint": "^17.1.2",
    "eslint": "^8.23.1",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-vue": "^9.4.0",
    "husky": "^8.0.1",
    "lint-staged": "^13.0.3",
    "postcss": "^8.1.0",
    "prettier": "^2.7.1",
    "sass": "^1.54.9",
    "typescript": "^4.6.4",
    "vite": "^3.1.0",
    "vite-plugin-eslint": "^1.8.1",
    "vite-plugin-svg-icons": "^2.0.1",
    "vite-svg-loader": "^3.6.0",
    "vue-eslint-parser": "^9.1.0",
    "vue-tsc": "^0.40.4"
  }
}
