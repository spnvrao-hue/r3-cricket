# Kufli 2.0 — GitHub Pages drop-in upgrade

This package adds a free, browser-based cricket assistant to the existing R3 site. No paid AI API or server is required. It **does not invent scores**. It needs verified match data to give real player answers.

## Install
1. Upload `kufli.js` and `kufli-data.json` to the **same directory as `index.html`** in your GitHub repository.
2. Edit `index.html` and add this immediately before `</body>`:

   `<script defer src="./kufli.js"></script>`

3. Commit the changes and refresh the deployed website (hard refresh if necessary).
4. If the existing site already renders a Kufli button, disable the old Kufli widget to avoid showing two assistants. Do not delete the rest of the application.

## Add actual cricket data
The included JSON is intentionally empty: no player statistics have been fabricated. Populate it using verified R3 scorecards. Example **schema only, not actual results**:

```json
{
  "players": [{"name":"Example Player"}],
  "matches": [{
    "id":"example-001",
    "date":"2026-08-01",
    "tournament":"Mega Smash",
    "season":"2026",
    "opponent":"Example Opponent",
    "result":"R3 won",
    "r3Score":"120/5",
    "opponentScore":"110/8",
    "url":"https://example.com/verified-scorecard",
    "batting":[{"player":"Example Player","runs":42,"balls":29}],
    "bowling":[{"player":"Example Player","wickets":2,"runsConceded":19,"overs":"4"}]
  }]
}
```

Remove the example before publishing actual statistics. The assistant supports natural-language queries, follow-up pronouns, highest individual innings, recorded run totals, bowling figures, match summaries, season lists and limited comparisons. Match analysis explicitly distinguishes facts from hypotheses.

## Important limitations
- This is **rule-based**, not a generative AI model. It cannot interpret arbitrary questions as flexibly as ChatGPT.
- Only data in `kufli-data.json` (or `window.R3_KUFLI_DATA` supplied before the script) is used.
- Match batting/bowling entries should represent **R3 players** unless you extend the schema and query logic.
- No external scorecard fetching is attempted by the browser because source sites may block cross-origin requests.
- It is a standalone overlay; it does not replace the existing React bundle or change the website's match pages.
