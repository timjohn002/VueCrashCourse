export default defineEventHandler((event) => {
    const res = event.node.res;
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3100') // Vue app origin
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', '*')
    console.log("Cors check");
    
  if (event.node.req.method === 'OPTIONS') {
    res.statusCode = 204
    res.end()
    return
  }
})