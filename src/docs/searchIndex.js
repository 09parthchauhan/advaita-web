export const SEARCH_INDEX = [
  // ── Getting Started ──────────────────────────────────────────────────────
  {
    section: 'getting-started', page: 'introduction',
    href: '/docs/getting-started/introduction',
    title: 'Introduction to Advaita',
    tags: ['overview', 'what is advaita', 'platform', 'getting started'],
    excerpt: 'AI-native product intelligence platform that turns raw clickstream events into decisions your team can trust.',
    headings: ['What is Advaita?', 'How it works', 'Key capabilities', 'Architecture', 'Next steps'],
  },
  {
    section: 'getting-started', page: 'quickstart',
    href: '/docs/getting-started/quickstart',
    title: 'Quickstart',
    tags: ['install', 'setup', 'npm', 'first event', 'track', 'sdk', 'api key'],
    excerpt: 'Install the Advaita SDK and send your first event in under five minutes.',
    headings: ['Prerequisites', 'Install the SDK', 'Initialise', 'Track your first event', 'Identify a user', 'Verify in dashboard'],
  },
  {
    section: 'getting-started', page: 'core-concepts',
    href: '/docs/getting-started/core-concepts',
    title: 'Core Concepts',
    tags: ['events', 'identity', 'sessions', 'schema', 'pipeline', 'track', 'identify', 'page', 'anonymous'],
    excerpt: 'Understanding how Advaita models events, users, and sessions will help you instrument correctly.',
    headings: ['Events', 'Event types', 'Properties', 'Identity & users', 'Sessions', 'Schema & validation', 'Ingest pipeline'],
  },
  // ── SDKs ─────────────────────────────────────────────────────────────────
  {
    section: 'sdks', page: 'overview',
    href: '/docs/sdks/overview',
    title: 'SDK Overview',
    tags: ['sdk', 'javascript', 'python', 'node', 'flutter', 'react native', 'go', 'package'],
    excerpt: 'Advaita provides official SDKs for web, server, and mobile with the same track/identify/page API.',
    headings: ['Available SDKs', 'Choosing an SDK', 'Common API surface', 'Versioning'],
  },
  {
    section: 'sdks', page: 'javascript',
    href: '/docs/sdks/javascript',
    title: 'JavaScript SDK',
    tags: ['javascript', 'js', 'browser', 'npm', 'typescript', 'spa', 'react', 'vue', 'svelte', 'track', 'identify'],
    excerpt: 'The @advaita/js-sdk package runs in any modern browser and auto-collects page views and session context.',
    headings: ['Installation', 'Configuration', 'track()', 'identify()', 'page()', 'Config options', 'TypeScript'],
  },
  {
    section: 'sdks', page: 'python',
    href: '/docs/sdks/python',
    title: 'Python SDK',
    tags: ['python', 'pip', 'server', 'backend', 'async', 'fastapi', 'django', 'flask', 'track'],
    excerpt: 'The advaita-sdk Python package is for server-side tracking — backends, pipelines, and ML workflows.',
    headings: ['Installation', 'Configuration', 'track()', 'identify()', 'Async usage', 'Config options'],
  },
  {
    section: 'sdks', page: 'node',
    href: '/docs/sdks/node',
    title: 'Node.js SDK',
    tags: ['node', 'nodejs', 'javascript', 'server', 'express', 'middleware', 'backend', 'api'],
    excerpt: 'The @advaita/node-sdk package is built for server-side environments — APIs and background jobs.',
    headings: ['Installation', 'Configuration', 'track()', 'identify()', 'Express middleware', 'Config options'],
  },
  {
    section: 'sdks', page: 'flutter',
    href: '/docs/sdks/flutter',
    title: 'Flutter SDK',
    tags: ['flutter', 'dart', 'mobile', 'ios', 'android', 'screen', 'navigator', 'pubspec'],
    excerpt: 'The advaita_flutter package works on iOS and Android with automatic screen view tracking.',
    headings: ['Installation', 'Configuration', 'track()', 'identify()', 'screen()', 'Config options'],
  },
  // ── AI Platform ──────────────────────────────────────────────────────────
  {
    section: 'ai-platform', page: 'overview',
    href: '/docs/ai-platform/overview',
    title: 'AI Platform Overview',
    tags: ['acai', 'ai', 'chatbot', 'questions', 'natural language', 'analysis', 'insights'],
    excerpt: 'The ACAI AI Platform lets you ask product questions in plain English and get instant answers.',
    headings: [],
  },
  {
    section: 'ai-platform', page: 'ds-chatbot',
    href: '/docs/ai-platform/ds-chatbot',
    title: 'Deep-Search Chatbot',
    tags: ['acai', 'deep search', 'chatbot', 'ai', 'query', 'analysis', 'funnels', 'cohorts'],
    excerpt: 'The Deep-Search Chatbot performs multi-step reasoning over your full clickstream history.',
    headings: [],
  },
  {
    section: 'ai-platform', page: 'ur-chatbot',
    href: '/docs/ai-platform/ur-chatbot',
    title: 'UR Chatbot',
    tags: ['ur chatbot', 'real-time', 'live', 'ai', 'query'],
    excerpt: 'The UR Chatbot answers questions about live and recent events in real time.',
    headings: [],
  },
  // ── Dashboard ────────────────────────────────────────────────────────────
  {
    section: 'dashboard', page: 'overview',
    href: '/docs/dashboard/overview',
    title: 'Dashboard Overview',
    tags: ['dashboard', 'projects', 'workspace', 'settings'],
    excerpt: 'The Advaita dashboard is your central workspace for managing projects, keys, and team access.',
    headings: [],
  },
  {
    section: 'dashboard', page: 'api-keys',
    href: '/docs/dashboard/api-keys',
    title: 'API Keys',
    tags: ['api key', 'write key', 'secret', 'authentication', 'token'],
    excerpt: 'Generate and manage API keys for your projects. Use the public write key in browser SDKs.',
    headings: [],
  },
  {
    section: 'dashboard', page: 'team-management',
    href: '/docs/dashboard/team-management',
    title: 'Team Management',
    tags: ['team', 'invite', 'roles', 'permissions', 'members', 'admin'],
    excerpt: 'Invite teammates, assign roles, and manage workspace access.',
    headings: [],
  },
  // ── Data Interface ───────────────────────────────────────────────────────
  {
    section: 'data-interface', page: 'overview',
    href: '/docs/data-interface/overview',
    title: 'Data Interface Overview',
    tags: ['data', 'export', 'raw events', 'schema', 'query'],
    excerpt: 'Inspect raw events, validate schema health, and export clean datasets.',
    headings: [],
  },
  {
    section: 'data-interface', page: 'raw-events',
    href: '/docs/data-interface/raw-events',
    title: 'Raw Events',
    tags: ['raw events', 'event stream', 'live', 'inspect', 'debug'],
    excerpt: 'Browse the raw event stream for any project and inspect individual event payloads.',
    headings: [],
  },
  {
    section: 'data-interface', page: 'exporting-data',
    href: '/docs/data-interface/exporting-data',
    title: 'Exporting Data',
    tags: ['export', 'csv', 'json', 'download', 'warehouse', 'pipeline'],
    excerpt: 'Export your clickstream data to CSV, JSON, or a connected data warehouse.',
    headings: [],
  },
  // ── API Reference ─────────────────────────────────────────────────────────
  {
    section: 'api-reference', page: 'overview',
    href: '/docs/api-reference/overview',
    title: 'API Reference',
    tags: ['api', 'rest', 'http', 'endpoint', 'reference', 'post', 'track'],
    excerpt: 'Full REST API reference for the Advaita ingest and query endpoints.',
    headings: [],
  },
  {
    section: 'api-reference', page: 'track-endpoint',
    href: '/docs/api-reference/track-endpoint',
    title: 'Track Endpoint',
    tags: ['track', 'post /track', 'api', 'event', 'rest', 'http'],
    excerpt: 'POST /track — send a single event to the Advaita ingest API.',
    headings: [],
  },
  {
    section: 'api-reference', page: 'batch-endpoint',
    href: '/docs/api-reference/batch-endpoint',
    title: 'Batch Endpoint',
    tags: ['batch', 'post /batch', 'api', 'bulk', 'events', 'rest'],
    excerpt: 'POST /batch — send multiple events in a single request for efficiency.',
    headings: [],
  },
  // ── Self-Hosting ──────────────────────────────────────────────────────────
  {
    section: 'self-hosting', page: 'overview',
    href: '/docs/self-hosting/overview',
    title: 'Self-Hosting Overview',
    tags: ['self host', 'docker', 'kubernetes', 'on-premise', 'deploy', 'infrastructure'],
    excerpt: 'Deploy the full Advaita stack on your own infrastructure. Your data never leaves your environment.',
    headings: [],
  },
  {
    section: 'self-hosting', page: 'docker-compose',
    href: '/docs/self-hosting/docker-compose',
    title: 'Docker Compose',
    tags: ['docker', 'docker-compose', 'container', 'deploy', 'self host'],
    excerpt: 'Deploy Advaita using Docker Compose for a single-machine self-hosted setup.',
    headings: [],
  },
]

export function searchDocs(query) {
  if (!query || query.trim().length < 2) return []
  const q = query.toLowerCase().trim()
  const words = q.split(/\s+/)

  return SEARCH_INDEX
    .map(entry => {
      const haystack = [
        entry.title,
        entry.excerpt,
        ...entry.tags,
        ...entry.headings,
        entry.section.replace(/-/g, ' '),
        entry.page.replace(/-/g, ' '),
      ].join(' ').toLowerCase()

      // Score: exact phrase > all words match > partial match
      let score = 0
      if (haystack.includes(q)) score += 10
      const allWordsMatch = words.every(w => haystack.includes(w))
      if (allWordsMatch) score += 5
      const someWordsMatch = words.filter(w => haystack.includes(w)).length
      score += someWordsMatch

      return { ...entry, score }
    })
    .filter(e => e.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
}
