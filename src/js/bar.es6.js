let invocation = 0

const Bar = () => {
  invocation++
  return `barfoo ${invocation}`
}

export { Bar }
