import { PageLayout } from "../components/layout/PageLayout";
import { HabitsManagerHeader } from "../components/habits-manager/HabitsManagerHeader";
import { HabitsManagerContet } from "../components/habits-manager/HabitsManagerContent";

export default function HabitsManager() {
  return (
    <PageLayout title="Gerenciar meus hábitos">
      <HabitsManagerHeader />
      <HabitsManagerContet />
    </PageLayout>
  )
}