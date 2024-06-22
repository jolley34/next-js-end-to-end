import FeatureGrid from "@/src/components/Feature-grid";
import { FollowCompanies } from "@/src/components/FollowCompanyBar";
import { HypedGrid } from "@/src/components/Hyped-grid";

export default function Homepage() {
  return (
    <>
      <div style={{ padding: "4rem 6rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <FeatureGrid />
          <FollowCompanies />
          <HypedGrid />
        </div>
      </div>
    </>
  );
}
