import { generateSignature } from "./generateSignature";

interface IVerifyOptions {
  token: string;
  secret: string;
}

export function verify({ secret, token }: IVerifyOptions) {
  const [headerSent, payloadSent, signatureSent] = token.split(".");

  const signarute = generateSignature({
    secret,
    header: headerSent,
    payload: payloadSent,
  });

  if (signarute !== signatureSent) {
    throw new Error("Invalid jwt token");
  }

  const decodedPayload = JSON.parse(
    Buffer.from(payloadSent, "base64url").toString("utf-8")
  );

  if (decodedPayload.exp < Date.now()) {
    throw new Error("Expired Token.");
  }

  return decodedPayload;
}
