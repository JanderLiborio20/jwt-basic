import { sign } from "./jwt/sign";
import { verify } from "./jwt/verify";

const secret = "keySecret";

const token = sign({
  data: {
    sub: "@jl_nunes",
  },
  exp: Date.now() + 24 * 60 * 60 * 1000,
  secret,
});

const decode = verify({
  secret,
  token,
});

console.log({ decode });
