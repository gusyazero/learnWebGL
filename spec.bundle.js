// @see http://kentor.me/posts/testing-react-and-flux-applications-with-karma-and-webpack/
var testContext = require.context('./spec', true, /[sS]pec\.ts/);
testContext.keys().forEach(testContext);
