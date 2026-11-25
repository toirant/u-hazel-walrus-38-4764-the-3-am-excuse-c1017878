# The 3 AM Excuse

[![Bounty](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![Rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/toirant/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![Reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/toirant/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

A [make.fun](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878) entry for **The 3 AM Excuse**: one line, under 200 characters, in the voice of a hardware wallet refusing to sign a transaction at 3 AM.

## The entry

> Nope. It's 3 AM — last time you woke me up at this hour, you bought a monkey JPEG and blamed me for it.

103 characters, one line. The wallet isn't out of battery or mid-update — it remembers. The last 3 AM wake-up call ended with its owner buying a monkey JPEG and blaming the device, so this time it declines on the spot. The joke only works at 3 AM, which is the whole point.

## How it works

`main.ts` (Node 22, no dependencies) writes the excuse to `/output/entry.txt`, then validates it against the competition gate before finishing:

- 1–200 characters (counted as Unicode code points)
- single line, no newlines
- not only whitespace
- names the 3 AM hour

It then reads the file back from disk and re-validates the exact bytes written, so a truncated or mangled write can never pass silently.

Run it with:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
