import { useState, useEffect } from 'react';
import { ColDef } from 'ag-grid-community';
import { DataGrid, getNumberColDefTemplate } from '../../common-components/data-grid';
import { pricingDataService } from '../../business-services/pricing-data';

export function Pricing() {

  const [rowData, setRowData] = useState<any>([]); // todo add type
  const [columnDefs] = useState<ColDef[]>(getColumnDefs());

  useEffect(()=> {
    const loadSecurities = async () => {
      const securities = await pricingDataService.getSecurities();
      setRowData(securities);
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
          height={400}>
        </DataGrid>
      </div>
    </div>
  );

  function getColumnDefs(): ColDef[] {
    return [
      {
        field: 'id',
        headerName: 'Security ID',
        width: 100
      },
      {
        field: 'ticker',
        headerName: 'Ticker',
        width: 90
      },
      {
        field: 'cusip',
        headerName: 'Cusip',
        width: 100
      },
      {
        field: 'isin',
        headerName: 'ISIN',
        width: 100
      },
      {
        field: 'sedol',
        headerName: 'SEDOL',
        width: 100
      },
      {
        ...getNumberColDefTemplate(2),
        field: 'coupon',
        headerName: 'Coupon',
        width: 90
      },
      {
        field: 'maturity',
        headerName: 'Maturity',
        width: 100
      },
      {
        field: 'security',
        headerName: 'Description',
        width: 240
      },
      {
        field: 'quoteType',
        headerName: 'Quote Type',
        width: 100
      },
      {
        field: 'bmkIsin',
        headerName: 'Benchmark',
        width: 100
      },
      {
        ...getNumberColDefTemplate(2),
        field: 'bid',
        headerName: 'Bid',
        width: 90
      },
      {
        ...getNumberColDefTemplate(2),
        field: 'ask',
        headerName: 'Ask',
        width: 90
      },
      {
        ...getNumberColDefTemplate(2),
        field: 'bidYield',
        headerName: 'Bid Yield',
        width: 90
      },
      {
        ...getNumberColDefTemplate(2),
        field: 'askYield',
        headerName: 'Ask Yield',
        width: 90
      },
      {
        ...getNumberColDefTemplate(2),
        field: 'bidSpread',
        headerName: 'Bid Spread',
        width: 90
      },
      {
        ...getNumberColDefTemplate(2),
        field: 'askSpread',
        headerName: 'Ask Spread',
        width: 90
      },
    ];
  }
} 