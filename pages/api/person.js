// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const person = {
  name: 'John',
  age: '23',
  sex: 'male'
}

export default function handler(req, res) {
  if(req.method == "GET") {
    res.status(200).json(person)
  } else {
    res.status(500).json({ error: 'failed to load data' })
  }
}
