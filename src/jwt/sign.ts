import { generateSignature } from "./generateSignature";

interface ISignOptions {
  data: Record<string, any>;
  exp: number;
  secret: string;
}

export function sign({ data, exp, secret }: ISignOptions) {
  const header = {
    alg: "HS256",
    typ: "jwt",
  };

  const payload = {
    ...data,
    iat: Date.now(),
    exp,
  };

  const base64EncodedHeader = Buffer.from(JSON.stringify(header)).toString(
    "base64url"
  );

  const base65EncodedPayload = Buffer.from(JSON.stringify(payload)).toString(
    "base64url"
  );

  const signature = generateSignature({
    secret,
    header: base64EncodedHeader,
    payload: base65EncodedPayload,
  });

  return `${base64EncodedHeader}.${base65EncodedPayload}.${signature}`;
}
