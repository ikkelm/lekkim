import Link from 'next/link'

const PROJECTS = [
  { slug: 's-kul-ord', title: 'Kul ord-appen' },
  { slug: 'another-proj', title: 'My Other Project' },
  // same list as above
]

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">My Portfolio</h1>
      <ul className="mt-4 space-y-2">
        {PROJECTS.map(p => (
          <li key={p.slug}>
            <Link
              href={`/${p.slug}`}
              className="text-blue-500 hover:underline"
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

