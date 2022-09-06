// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const person = {
  name: 'John Doe',
  age: '23',
  sex: 'male'
}

export default function handler(req, res) {
  res.status(200).json(person)
}
