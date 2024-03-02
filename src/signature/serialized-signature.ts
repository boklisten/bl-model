import { BlDocument } from "../bl-document/bl-document";

export class SignatureMetadata extends BlDocument {
  signingName: string;
  signedByGuardian: boolean;
}

export class SerializedSignature extends SignatureMetadata {
  base64EncodedImage: string;
}
