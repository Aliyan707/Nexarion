// @react-three/fiber v8 accesses React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
// which was removed in React 19. This shim restores it before R3F initialises.
import React from 'react'

const internals = (React as any).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED

if (internals && typeof internals.ReactCurrentOwner === 'undefined') {
  // React 19 moved owner tracking to __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
  const client = (React as any).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
  internals.ReactCurrentOwner = client?.A ?? { current: null }
}
