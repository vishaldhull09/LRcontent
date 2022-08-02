function _hello(md,name){return(
md`# Hello ${name}`
)}

function _name(){return(
'world'
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer("hello")).define("hello", ["md","name"], _hello);
  main.variable(observer("name")).define("name", _name);
  return main;
}
