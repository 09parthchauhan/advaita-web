import { useMemo, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DocsLayout from '../docs/layout/DocsLayout'

// Getting Started
import Introduction,       { toc as tocIntro }   from '../docs/getting-started/Introduction'
import Quickstart,         { toc as tocQuick }   from '../docs/getting-started/Quickstart'
import CoreConcepts,       { toc as tocCore }    from '../docs/getting-started/CoreConcepts'

// SDKs
import SDKOverview,        { toc as tocSDKOv }   from '../docs/sdks/Overview'

// Web SDKs
import JavaScriptSDK,      { toc as tocJS }      from '../docs/sdks/web/JavaScript'
import TypescriptBrowser,  { toc as tocTSBrowser }from '../docs/sdks/web/TypescriptBrowser'

// Server SDKs
import NodeSDK,            { toc as tocNode }    from '../docs/sdks/server/NodeJS'
import PythonSDK,          { toc as tocPy }      from '../docs/sdks/server/Python'
import JavaSDK,            { toc as tocJava }    from '../docs/sdks/server/Java'
import GoSDK,              { toc as tocGo }      from '../docs/sdks/server/Go'

// Mobile SDKs
import FlutterSDK,         { toc as tocFlutter } from '../docs/sdks/mobile/Flutter'
import ReactNativeSDK,     { toc as tocRN }      from '../docs/sdks/mobile/ReactNative'
import AndroidSDK,         { toc as tocAndroid } from '../docs/sdks/mobile/Android'
import iOSSDK,             { toc as tociOS }     from '../docs/sdks/mobile/iOS'

import ComingSoon,         { toc as tocSoon }    from '../docs/ComingSoon'

const PAGES = {
  'getting-started': {
    'introduction':   { Component: Introduction,  toc: tocIntro },
    'quickstart':     { Component: Quickstart,    toc: tocQuick },
    'core-concepts':  { Component: CoreConcepts,  toc: tocCore  },
  },
  'sdks': {
    'overview':            { Component: SDKOverview,       toc: tocSDKOv    },
    'javascript':          { Component: JavaScriptSDK,     toc: tocJS       },
    'typescript-browser':  { Component: TypescriptBrowser, toc: tocTSBrowser },
    'node':                { Component: NodeSDK,           toc: tocNode     },
    'python':              { Component: PythonSDK,         toc: tocPy       },
    'java':                { Component: JavaSDK,           toc: tocJava     },
    'go':                  { Component: GoSDK,             toc: tocGo       },
    'flutter':             { Component: FlutterSDK,        toc: tocFlutter  },
    'react-native':        { Component: ReactNativeSDK,    toc: tocRN       },
    'android':             { Component: AndroidSDK,        toc: tocAndroid  },
    'ios':                 { Component: iOSSDK,            toc: tociOS      },
  },
}

function getPage(section, page) {
  return PAGES[section]?.[page] || { Component: ComingSoon, toc: tocSoon }
}

export default function DocsPage() {
  const { section: sParam, page: pParam } = useParams()
  const navigate = useNavigate()

  const section = sParam || 'getting-started'
  const page    = pParam || 'introduction'

  const { Component, toc } = useMemo(() => getPage(section, page), [section, page])

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [section, page])

  const onNavigate = (s, p) => navigate(`/docs/${s}/${p}`)

  return (
    <DocsLayout section={section} page={page} onNavigate={onNavigate} tocItems={toc}>
      <Component section={section} page={page} />
    </DocsLayout>
  )
}
