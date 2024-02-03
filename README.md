# Figma Plugin with Vue 3 + TypeScript + Vite

## 최초 실행 시

```
yarn
yarn build
```

Figma → Plugin → Import plugin from manifest → `figma-plugin-vue-boilerplate/manifest.json` 선택

## 최초 실행 이후

```
yarn start
```

Figma → Plugin → `figma-plugin-vue-boilerplate` 클릭하여 재빌드된 내용을 담은 manifest 재실행

## データの受け渡し

![Figma Sandbox ⇄ UI Message Passing](https://static.figma.com/uploads/04c4c6293fce2a7fe67bccd385ee5ab998705780)

1. `vue(UI)` → `code.ts`로 보내고자 하는 정보를 `window.parent.postMessage`로 전송

```javascript
window.parent.postMessage(
  {
    pluginMessage: {
      type: 'hoge',
      content: 'aaaaa'
    }
  },
  '*'
);
```

2. `vue(UI)`부터 받은 정보는 `code.ts(sandbox)`에서 `figma.ui.onmessage`를 통해 내용 수신할 수 있음.

```javascript
figma.ui.onmessage = (pluginMessage) => {
  console.log(pluginMessage); // {type: 'hoge', content: 'aaaaa'}
};
```

3. `code.ts(sandbox)`에서 `vue(UI)`로 정보를 보내고 싶다면, `figma.ui.postMessage`.

```javascript
figma.ui.postMessage({
  error: '에러 났어',
  ...
});
```

4. `code.ts(sandbox)`부터 받은 정보는 `vue(UI)`에서 `onmessage`를 통해 내용 수신할 수 있음.

```javascript
onmessage = (event) => {
  console.log('got this from the plugin code', event.data.pluginMessage);
};
```
