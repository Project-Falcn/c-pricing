import { useState, useEffect } from 'react';
import { ColDef } from 'ag-grid-community';
import { DataGrid } from '../../common-components/data-grid';
import { pricingDataService } from '../../business-services/pricing-data';

export function RunsSummary() {

  const [rowData, setRowData] = useState<any>([]); // todo add type
  
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
  });

  return (
    <div className="widget">
      <div className="widget-header">
        <span className="widget-label">Runs Summary</span>
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
        width: 110
      },
      {
        field: 'ticker',
        headerName: 'Ticker',
        width: 90
      },
      {
        field: 'cusip',
        headerName: 'Cusip',
        width: 110
      },
      {
        field: 'isin',
        headerName: 'ISIN',
        width: 110
      },
      {
        field: 'sedol',
        headerName: 'SEDOL',
        width: 110
      },
      {
        field: 'coupon',
        headerName: 'Coupon',
        width: 90
      },
      {
        field: 'maturity',
        headerName: 'Maturity',
        width: 90
      },
      {
        field: 'security',
        headerName: 'Description',
        width: 140
      },
      {
        field: 'quoteType',
        headerName: 'Quote Type',
        width: 100
      },
      {
        field: 'bmkIsin',
        headerName: 'Benchmark',
        width: 110
      },
      {
        field: 'bid',
        headerName: 'Bid',
        width: 90
      },
      {
        field: 'ask',
        headerName: 'Ask',
        width: 90
      },
      {
        field: 'bidYield',
        headerName: 'Bid Yield',
        width: 90
      },
      {
        field: 'askYield',
        headerName: 'Ask Yield',
        width: 90
      },
      {
        field: 'bidSpread',
        headerName: 'Bid Spread',
        width: 90
      },
      {
        field: 'askSpread',
        headerName: 'Ask Spread',
        width: 90
      },
    ];
  }
} 
