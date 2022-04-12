import FetchData from './FetchData.js';
import ShowInfoProduts from './ShowInfoProduts.js';

async function FetchDataInit(BaseUrl) {
  const fecthData = FetchData();
  const showInfoProduts = ShowInfoProduts();

  await fecthData.init(BaseUrl);
  showInfoProduts.init();
}

export default FetchDataInit;
