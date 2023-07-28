// import { useMemo } from "react";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";

export interface IDataGridProps extends AgGridReactProps {
  showGridTopSummary?: boolean;
  height?: number;
}

export function DataGrid(props: IDataGridProps) {

  const finalProps: AgGridReactProps = {
    defaultColDef: {
      floatingFilter: true,
      filter: true,
      sortable: true,
      resizable: true,
      width: 120,
      ...props.defaultColDef
    },
    enableRangeSelection: true,
    ...props
  }; 

  return (
    <div className="ag-theme-balham-dark" style={{ height: props.height }}>
      <AgGridReact {...finalProps}>
      </AgGridReact>
    </div>
  );
}