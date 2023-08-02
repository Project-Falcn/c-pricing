import { SearchDataContextProvider } from '../../business-services/search-context-data';
import { DashboardHeader } from '../dashboard-header';
import { Pricing } from '../pricing';
import { RunsSummary } from '../runs-summary';
import { Trace } from '../trace';

export function Dashboard() {

  return (
    <div className="multi-widget-dashboard">
      <SearchDataContextProvider>
        <DashboardHeader></DashboardHeader>

        <div className="dashboard-content">
          <Pricing></Pricing>
          <RunsSummary></RunsSummary>
          <Trace></Trace>
        </div>
      </SearchDataContextProvider>
    </div>
  );
} 