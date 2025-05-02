// src/app/[project]/page.tsx
//'use client'
import React from 'react'

// 1. List all the project‐slugs you want to build
const PROJECTS = [
  { slug: 'ord', title: 'Kul med ord' },
  //{ slug: 'another-proj', title: 'My Other Project' },
  // …add more as you go
]

// 2. Tell Next.js which params to statically export
export function generateStaticParams() {
  return PROJECTS.map(p => ({ project: p.slug }))
}

// 3. Your actual page component, using params.project
export default function ProjectPage({
  params,
}: {
  params: { project: string }
}) {
  const { project } = params
  return (
    <iframe
      src={`https://${project}.lovable.app`}
      style={{ width: '100%', height: '100vh', border: 'none' }}
      title={project}
    />
  )
}
