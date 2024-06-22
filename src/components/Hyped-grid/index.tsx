import { Card } from "../Card";
import { HypedGridLayout } from "./layout";

export async function HypedGrid() {
  return (
    <>
      <div>
        <HypedGridLayout />
        <Card />
      </div>
    </>
  );
}
