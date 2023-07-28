import { webApihandler } from "../../common-services/web-api-handler";

class PricingDataService {
  async getSecuritiesWithPrices() {
     return await webApihandler.get('https://www.ag-grid.com/example-assets/row-data.json');
  }
}

export const pricingDataService = new PricingDataService();