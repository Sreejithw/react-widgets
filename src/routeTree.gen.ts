/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as StopwatchImport } from './routes/stopwatch'
import { Route as RollDiceImport } from './routes/roll-dice'
import { Route as RockPaperScissorsImport } from './routes/rock-paper-scissors'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const StopwatchRoute = StopwatchImport.update({
  id: '/stopwatch',
  path: '/stopwatch',
  getParentRoute: () => rootRoute,
} as any)

const RollDiceRoute = RollDiceImport.update({
  id: '/roll-dice',
  path: '/roll-dice',
  getParentRoute: () => rootRoute,
} as any)

const RockPaperScissorsRoute = RockPaperScissorsImport.update({
  id: '/rock-paper-scissors',
  path: '/rock-paper-scissors',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/rock-paper-scissors': {
      id: '/rock-paper-scissors'
      path: '/rock-paper-scissors'
      fullPath: '/rock-paper-scissors'
      preLoaderRoute: typeof RockPaperScissorsImport
      parentRoute: typeof rootRoute
    }
    '/roll-dice': {
      id: '/roll-dice'
      path: '/roll-dice'
      fullPath: '/roll-dice'
      preLoaderRoute: typeof RollDiceImport
      parentRoute: typeof rootRoute
    }
    '/stopwatch': {
      id: '/stopwatch'
      path: '/stopwatch'
      fullPath: '/stopwatch'
      preLoaderRoute: typeof StopwatchImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/rock-paper-scissors': typeof RockPaperScissorsRoute
  '/roll-dice': typeof RollDiceRoute
  '/stopwatch': typeof StopwatchRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/rock-paper-scissors': typeof RockPaperScissorsRoute
  '/roll-dice': typeof RollDiceRoute
  '/stopwatch': typeof StopwatchRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/rock-paper-scissors': typeof RockPaperScissorsRoute
  '/roll-dice': typeof RollDiceRoute
  '/stopwatch': typeof StopwatchRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/rock-paper-scissors' | '/roll-dice' | '/stopwatch'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/rock-paper-scissors' | '/roll-dice' | '/stopwatch'
  id: '__root__' | '/' | '/rock-paper-scissors' | '/roll-dice' | '/stopwatch'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  RockPaperScissorsRoute: typeof RockPaperScissorsRoute
  RollDiceRoute: typeof RollDiceRoute
  StopwatchRoute: typeof StopwatchRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  RockPaperScissorsRoute: RockPaperScissorsRoute,
  RollDiceRoute: RollDiceRoute,
  StopwatchRoute: StopwatchRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/rock-paper-scissors",
        "/roll-dice",
        "/stopwatch"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/rock-paper-scissors": {
      "filePath": "rock-paper-scissors.tsx"
    },
    "/roll-dice": {
      "filePath": "roll-dice.tsx"
    },
    "/stopwatch": {
      "filePath": "stopwatch.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
