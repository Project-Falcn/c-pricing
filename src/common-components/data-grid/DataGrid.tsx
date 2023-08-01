import { useCallback } from "react";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import styles from './datagrid.module.scss';
import { GridApi, GridReadyEvent } from "ag-grid-community";

export interface IDataGridProps extends AgGridReactProps {
  showGridTopSummary?: boolean;
  height?: number;
}

export function DataGrid(props: IDataGridProps) {

  let gridApi: GridApi;

  const finalProps: AgGridReactProps = {
    defaultColDef: {
      floatingFilter: true,
      filter: true,
      sortable: true,
      resizable: true,
      width: 120,
      ...props.defaultColDef
    },
    sideBar: true,
    enableRangeSelection: true,
    ...props
  };

  const onGridReady = useCallback((event: GridReadyEvent) => {
    gridApi = event.api;

    const toolpanelid = gridApi.getOpenedToolPanel();
    if (toolpanelid) {
      gridApi.closeToolPanel();
    }
  }, []);

  return (
    <>
      {/* <div className={styles["grid-summary"]}>
        <div className={styles["record-summary"]}>

        </div>
        <div className={styles["action-buttons"]}>
          <i className="cil-settings"></i>
        </div>
      </div> */}

      <div className="ag-theme-balham-dark" style={{ height: props.height }}>
        <AgGridReact {...finalProps}
          onGridReady={onGridReady}>
        </AgGridReact>
      </div>
    </>
  );
}