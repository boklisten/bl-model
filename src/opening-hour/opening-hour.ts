import { BlDocument } from "../bl-document/bl-document";
import { Branch } from "../branch/branch";

export class OpeningHour extends BlDocument {
  from: Date;
  to: Date;
  branch: string | Branch;
}
