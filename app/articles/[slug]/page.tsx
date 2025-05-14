'use client'

import { useParams, useRouter } from 'next/navigation'
import { articles } from '../data/articles'
import AnimatedArticleSection from '@/app/components/animations/ArticleSectionAnimation'

export default function ArticlePage() {
  const params = useParams()
  const router = useRouter()
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-4">
          <h1 className="text-2xl text-[#0B23FF]">Article not found</h1>
          <button onClick={() => router.push('/articles')} className="text-[#0B23FF] hover:underline">
            ← Back to articles
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen px-6 py-12 bg-[var(--background)]">
       <div className="text-sm text-gray-500 font-mono">
          {new Date(article.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      <div className="max-w-2xl mx-auto space-y-12">
        <button
          onClick={() => router.push('/articles')}
          className="text-[#0B23FF] hover:underline flex items-center gap-2"
        >
          <span>←</span> Back to articles
        </button>

       

        <h1 className="text-2xl font-bold text-[#0B23FF]">{article.title}</h1>

        {article.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-2">
            <h2 className="text-xl text-[#0B23FF] font-semibold">
              {section.title}
            </h2>

            <div className="space-y-5 text-justify leading-relaxed">
              {section.parts?.map((part, partIndex) => (
                <AnimatedArticleSection
                  key={partIndex}
                  title={part.subtitle}
                  content={<p>{part.text}</p>}
                  index={sectionIndex * 10 + partIndex}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}