import { PageLayout } from "../components/layout/PageLayout";
import { HabitsManagerHeader } from "../components/habits-manager/HabitsManagerHeader";

export default function HabitsManager() {
  return (
    <PageLayout title="Gerenciar meus hábitos">
      <HabitsManagerHeader />
    </PageLayout>
  )
}