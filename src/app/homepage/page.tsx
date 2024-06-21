"use client";

import { FeatureGrid } from "@/src/components/feature-grid";
import { FollowCompanies } from "@/src/components/FollowCompanyBar";

export default function Homepage() {
  return (
    <>
      <div style={{ padding: "4rem 6rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <FeatureGrid />
          <FollowCompanies />
        </div>
      </div>
    </>
  );
}
