import { PageLayout } from "../components/layout/PageLayout";
import { ProfileHeader } from "../components/profile/ProfileHeader";
import { ProfileStatistics } from "../components/profile/ProfileStatistics";

export function Profile() {
  return(
    <PageLayout title="Perfil">
      <ProfileHeader />
      <ProfileStatistics />
    </PageLayout>
  )
}