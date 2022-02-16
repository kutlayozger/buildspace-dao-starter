import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x6Ae34F51b1Fa9A51F5A94Aee5235a116bae16b62",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "MovieDAO Entrance",
        description: "This NFT will give you access to MovieDAO!",
        image: readFileSync("scripts/assets/moviedaoticket.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()