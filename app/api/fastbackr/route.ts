import { createTokenHandler } from "@fastbackr/core/server";

// Trades FASTBACKR_API_KEY for a short-lived reviewer token. The key stays on
// this server and never reaches the browser. With no key set, the bar lets a
// reviewer paste a project key instead (see @fastbackr/react).
export const POST = createTokenHandler();
