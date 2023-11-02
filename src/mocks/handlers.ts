import { setupWorker } from "msw";
import { sampleRequest } from "./sampleRequest";

export const buildMswWorker = () => {
  return setupWorker(
    ...sampleRequest(),
  );
};
