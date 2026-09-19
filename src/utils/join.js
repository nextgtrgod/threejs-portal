const join = (...args) => (
  args
    .join('/')
    .replace(/^\/+|([^:]\/)\/+|\/+$/g, (m, g1) => g1 || '/')
)

export default join
