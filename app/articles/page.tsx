'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '../components/ui/NavBar'
import Clock from '../components/Clock'

// Type pour les articles
interface Article {
  title: string
  description: string
  date: string
  slug: string
  excerpt: string // Nouveau champ pour l'aperçu
}

// Données d'exemple (à remplacer par vos vraies données)
const articles: Article[] = [
  {
    title: "Foundations for a Fluid, AI-Augmented Mind-Mapping System",
    excerpt: "Creative thinking is nonlinear, associative, and often emergent. Yet most tools constrain us to rigid lists, boxes, and outlines.",
    description: `
      <div class="space-y-6">
        <section>
          <h3 class="text-[#0B23FF] font-medium mb-2">The Problem with Linear Thinking</h3>
          <p>Creative thinking is nonlinear, associative, and often emergent. Yet most tools constrain us to rigid lists, boxes, and outlines.</p>
        </section>
        <!-- ... autres sections ... -->
      </div>
    `,
    date: "2024-03-15",
    slug: "article-1"
  },
  {
    title: "Design Engineering meets LLMs",
    excerpt: "How I use LLMs to create more natural and powerful experiences.",
    description: `
      <div class="space-y-6">
        <section>
          <h3 class="text-[#0B23FF] font-medium mb-2">The Problem with Linear Thinking</h3>
          <p>Creative thinking is nonlinear, associative, and often emergent. Yet most tools constrain us to rigid lists, boxes, and outlines.</p>
        </section>
        <!-- ... autres sections ... -->
      </div>
    `,
    date: "2024-03-20",
    slug: "article-2"
  },
  // Ajoutez d'autres articles ici
]

export default function ArticlesPage() {
  const router = useRouter()

  const handleArticleClick = (slug: string) => {
    router.push(`/articles/${slug}`)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6">
      <div className="max-w-2xl w-full flex flex-col gap-6">
        <Clock className="mb-20 self-center" />
        <Navbar className="mb-20 self-center" />
        
        {/* <h1 className="text-2xl text-left text-[#0B23FF] mb-8">Notes</h1> */}
        
        <div className="flex flex-col gap-8">
          {articles.map((article, index) => (
            <React.Fragment key={article.slug}>
              <article 
                className="group cursor-pointer"
                onClick={() => handleArticleClick(article.slug)}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500 font-mono">
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-medium text-[#0B23FF] group-hover:underline">
                    {article.title}
                  </h2>
                  
                  <p className="text-muted-foreground  text-base leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-2 text-[#0B23FF] text-sm group-hover:underline">
                    Read more
                    <span className="text-[#0B23FF] transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </article>
              
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