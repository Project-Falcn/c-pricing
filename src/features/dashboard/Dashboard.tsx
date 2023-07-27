import { DashboardHeader } from '../dashboard-header';
import { Pricing } from '../pricing';
import { RunsSummary } from '../runs-summary';
import { Trace } from '../trace';

export function Dashboard() {

  return (
    <div className="multi-widget-dashboard">
      <DashboardHeader></DashboardHeader>

      <div className="dashboard-content">
        <Pricing></Pricing>
        <RunsSummary></RunsSummary>
        <Trace></Trace>
      </div>
    </div>
  );
} 