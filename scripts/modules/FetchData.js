import ComponentDidMount from './components/ComponentDidMount.js';
import { ErrorMessage } from './helper/Helper.js';
import Loading from './helper/Loading.js';

function FetchData() {
  async function init(BaseUrl) {
    let response;
    let json;

    try {
      Loading(true);
      response = await fetch(BaseUrl);
      if (!response.ok) throw new Error(ErrorMessage);
      json = await response.json();
    } catch (error) {
      json = error.toString();
    } finally {
      ComponentDidMount(json);
      Loading(false);
    }
    return json;
  }

  return { init };
}

export default FetchData;
