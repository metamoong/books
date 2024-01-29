const MyReact = function () {
  const global = {};
  let index = 0;

  function useState(initalState) {
    if (!global.states) {
      global.states = [];
    }
    const currentState = global.states[index] || initalState;
    global.states[index] = currentState;

    const setState = (function () {
      let currentIndex = index;
      return function (value) {
        global.states[currentIndex] = value;
      };
    })();
    index = index + 1;
    return [currentState, setState];
  }

  function Component() {
    const [value, setValue] = useState(0);
    console.log(value);
    setValue(3);
    console.log(value);
  }

  Component();
};

MyReact();
