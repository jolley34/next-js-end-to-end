"use client";

import { FollowCompanies } from "@/components/FollowCompanyBar";
import { FeatureGrid } from "@/components/feature-grid";

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
