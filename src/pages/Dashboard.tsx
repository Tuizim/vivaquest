import { TabScreen } from "../components/layout/TabScreen";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import { DashboardStatistics } from "../components/dashboard/DashboardStatistics";
import { DashboardHabits } from "../components/dashboard/DashboardHabits";

export default function Dashboard() {
  return (
    <TabScreen>
      <DashboardHeader />
      <DashboardStatistics />
      <DashboardHabits />
    </TabScreen>
  )
}