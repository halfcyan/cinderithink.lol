// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

// Tailwind CSS
import "./src/styles/global.css"

import * as Sentry from "@sentry/browser"
import { BrowserTracing } from "@sentry/tracing"

Sentry.init({
  dsn: "https://8ed24fba1d024dabbf56fc1755aed302@o4504233156935680.ingest.sentry.io/4504233161261056",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})
