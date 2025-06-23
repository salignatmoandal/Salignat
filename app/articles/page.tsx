'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../components/ui/NavBar'


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
    date: "2025-05-23",
    slug: "AI-augmented-mind-mapping"
  },
  {
    title: "Design Engineering meets LLMs",
    excerpt: "A new design paradigm is emerging where engineering meets language models — shifting from deterministic problem-solving to collaborative, interpretive dialogue with hybrid intelligence.",
    description: `
      <div class="space-y-6">
        <section>
          <h3 class="text-[#0B23FF] font-medium mb-2">The Problem with Linear Thinking</h3>
          <p>Creative thinking is nonlinear, associative, and often emergent. Yet most tools constrain us to rigid lists, boxes, and outlines.</p>
        </section>
        <!-- ... autres sections ... -->
      </div>
    `,
    date: "2025-05-13",
    slug: "design-engineering-llms"
  },
  { 
    title: "From Entities to Edges: NER and the Shape of Knowledge",
    excerpt: "This essay explores how Named Entity Recognition (NER) transforms raw text into structured meaning — and how, when paired with knowledge graphs, it reveals the hidden architecture of language. From identifying entities to connecting them, we uncover how language becomes a web of relationships machines can navigate, reason with, and grow from.",
    description: `
      <div class="space-y-6">
        <section>
          <h3 class="text-[#0B23FF] font-medium mb-2">The Problem with Linear Thinking</h3>
          <p>Creative thinking is nonlinear, associative, and often emergent. Yet most tools constrain us to rigid lists, boxes, and outlines.</p>
        </section>
      </div>
    `,
    date: "2025-05-04",
    slug: "from-entities-to-edges"
  }, 
  {
    title: "The Utility of a Reverse Proxy in AI Inference Orchestration",
    excerpt: "Designed a scalable AI inference pipeline with Python and Go, combining FastAPI for model serving and a Go-based reverse proxy for orchestration. Implemented modular stages: preprocessing, tokenization, inference, postprocessing, and monitoring. Enabled secure, observable, and resilient AI delivery with centralized routing, load balancing, and metrics instrumentation.",
    description: `
      <div class="space-y-6">
        <section>
          <h3 class="text-[#0B23FF] font-medium mb-2"></h3>

        </section>
      </div>
    `,
    date: "2025-06-23",
    slug: "reverse-proxy-ai-inference"
  }
]

export default function ArticlesPage() {
  const router = useRouter()

  const handleArticleClick = (slug: string) => {
    router.push(`/articles/${slug}`)
  }
  // TODO: Add a search bar to search for articles
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6">
      <div className="max-w-2xl w-full flex flex-col gap-6">
       
        <Navbar className="mb-5 self-center" />
        
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