import { useState, useEffect } from 'react';
import { ColDef } from 'ag-grid-community';
import { DataGrid } from '../../common-components/data-grid';
import { pricingDataService } from '../../business-services/pricing-data';

export function Pricing() {

  const [rowData, setRowData] = useState(null);

  const [columnDefs] = useState<ColDef[]>([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ]);

  useEffect(()=> {
    const loadSecurities = async () => {
      const data = await pricingDataService.getSecuritiesWithPrices();
      setRowData(data);   
    };

    loadSecurities();
  },[]);

  return (
    <div className="widget">
      <div className="widget-header">
        <span className="widget-label">Pricing</span>
      </div>

      <div className="widget-content">
        <DataGrid
          rowData={rowData}
          columnDefs={columnDefs}
          sideBar={true}
          height={400}>
        </DataGrid>
      </div>
    </div>
  );
} 