import Image from 'next/image'
import prisma from '@/lib/prisma'

export default async function Home() {
  const entries = await prisma.entry.findMany()
  return (
<>
{
  entries.map((entry) => (
    <div key={entry.username}>
      <h2>{entry.password}</h2>
      <p>{entry.email}</p>
    </div>
  ))
}

</>
  )
}
