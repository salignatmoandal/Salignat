'use client'

import React from 'react'
import Navbar from '../components/ui/NavBar'
import Clock from '../components/Clock'

// Type pour les articles
interface Article {
  title: string
  description: string
  date: string
  slug: string
}

// Données d'exemple (à remplacer par vos vraies données)
const articles: Article[] = [
  {
    title: "Design Engineering meets LLMs",
    description: "Comment j'utilise les LLMs pour créer des expériences plus naturelles et puissantes.",
    date: "2024-03-20",
    slug: "design-engineering-meets-llms"
  },
  {
    title: "Building Noodl",
    description: "Processus of building Noodl is a mind mapping tool powered by AI.",
    date: "2024-03-15",
    slug: "building-noodl"
  },
  // Ajoutez d'autres articles ici
]

export default function ArticlesPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6">
      <div className="max-w-2xl w-full flex flex-col gap-6">
        <Clock className="mb-20 self-center" />
        <Navbar className="mb-20 self-center" />
        
        <h1 className="text-2xl text-left text-[#0B23FF] mb-8">Notes</h1>
        
        <div className="flex flex-col gap-8">
          {articles.map((article, index) => (
            <React.Fragment key={article.slug}>
              <article className="group">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500 font-mono">
                      {new Date(article.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="text-[#0B23FF]">→</span>
                  </div>
                  
                  <h2 className="text-lg font-medium text-[#0B23FF] group-hover:underline">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </article>
              
              {/* Ligne de séparation */}
              {index < articles.length - 1 && (
                <div className="h-[1px] bg-gray-200 w-full" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  )
}