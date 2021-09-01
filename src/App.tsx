import { toTemporalInstant } from '@js-temporal/polyfill';
const App = () => <div>{toTemporalInstant.toString()}</div>;
export default App;
