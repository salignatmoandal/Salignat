'use client'

import React from 'react'
import Navbar from '../components/ui/NavBar'

// Type pour les articles
interface Article {
  title: string
  description: string
  date: string
  slug: string
  content: string
}

// Données d'exemple (à remplacer par vos vraies données)
const articles: Article[] = [
  {
    title: "AI Inference in Distributed Systems",
    description: "",
    content: "AI inference is the process of using a trained machine learning (ML) model to make predictions or generate outputs based on new input data. Unlike training where the model learns patterns from a dataset, inference applies the learned patterns to real-world data. ",
    date: "2025-05-14",
    slug: "design-engineering-meets-llms"
  },
  {
    title: "Building Blockchain Basic Prototype",
    description: "",
    content: "Blocks that store valuable information. For instance, Bitcoin blocks store transactions, the essence of any cryptocurrency. Beside this, a block contains some technical information, like its version, current timestamp and the hash of the previous block. ",
    date: "2025-05-12",
    slug: "blockchain-basic-prototype"
  },
  {
    title: "Understanding AWS SQS and EC2 Scaling",
    description: "AWS SQS is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. It ensures the delivery of messages between software components at any volume without losing messages or requiring other services to be available.",
    content: "",
    date: "2025-05-06",
    slug: "aws-sqs-ec2-scaling"
  },
  {
    title: "The Book of Shaders",
    description: "A great resource for learning about shaders and lighting in a visually interactive and approachable manner.",
    content: "",
    date: "2025-05-03",
    slug: "book-of-shaders"
  }
]

export default function ArticlesPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6">
      <div className="max-w-2xl w-full flex flex-col gap-6">
        <Navbar className="mb-5 self-center rounded-b-md" />
        
        {/* <h1 className="text-2xl text-left text-[#0B23FF] mb-8">Notes</h1> */}
        
        <div className="flex flex-col gap-8">
          {articles.map((article, index) => (
            <React.Fragment key={article.slug}>
              <article className="group">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <span className="text-lg text-gray-500 font-mono">
                      {new Date(article.date).toLocaleDateString('en-US', {
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
                  
                  <p className="text-gray-500 text-base leading-relaxed">
                    {article.description}
                    <p className="text-gray-500 text-base leading-relaxed">
                    {article.content}
                  </p>
                   
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