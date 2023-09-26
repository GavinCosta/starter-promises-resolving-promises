const { welcome, goodbye, tell } = require("../utils/fortune-teller");
//welcome function
welcome()
  .then(console.log) // Logs the result of welcome()
  .then(goodbye) // Returns promise from goodbye()
  .then(console.log) // Logs the result of goodbye()
  .catch(console.error); // Logs error from welcome() or goodbye()

//welcome function with combined then methods (nested)
welcome()
  .then((welcomeMessage) =>
    goodbye().then((goodbyeMessage) => `${welcomeMessage}\n${goodbyeMessage}`)
  ) // welcomeMessage and goodbyeMessage combined.
  .then(console.log) // Logs combines messages
  .catch(console.error); // Logs error from welcome() or goodbye()

console.log(promise);

const question = "Will the weather be nice today?";
tell(question)
  .then((fortune) => {
  console.log(question);
  console.log(fortune);
})
  .catch(console.error);
