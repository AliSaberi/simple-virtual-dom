import h from "./hyperscript";

// h stands for hyperscript

const App = () => {
  return h("h1", null, "Hi, vDOM!");
};

console.log('App', App());
