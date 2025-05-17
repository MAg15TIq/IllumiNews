"use client"

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShareButtons } from "@/components/share-buttons";
import { AdBanner } from "@/components/ad-banner";
import { AdBannerContainer } from "@/components/ad-banner-container";
import { AdBannerContainer2 } from "@/components/ad-banner-container2";
import { AdBannerContainer3 } from "@/components/ad-banner-container3";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

interface QuizQuestion {
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer?: string;
}

interface KeyTakeaway {
  text: string;
}

interface RelatedArticle {
  title: string;
  url: string;
}

interface AuthorInfo {
  name: string;
  role?: string;
  image?: string;
  bio?: string;
}

export interface ArticleTemplateProps {
  title: string;
  author: AuthorInfo;
  publishDate: string;
  lastUpdated?: string;
  readTime?: string;
  featuredImage?: {
    src: string;
    alt: string;
    caption?: string;
  };
  category: string;
  tags: string[];
  introduction: string[];
  sections: {
    title: string;
    content: string[];
    subsections?: {
      title: string;
      content: string[];
      listItems?: string[];
    }[];
    image?: {
      src: string;
      alt: string;
      caption?: string;
    };
    orderedList?: string[];
    unorderedList?: string[];
  }[];
  keyTakeaways?: KeyTakeaway[];
  timeline?: {
    title: string;
    introduction?: string;
    items: TimelineItem[];
  };
  quiz?: {
    title: string;
    questions: QuizQuestion[];
  };
  conclusion?: string[];
  callToAction?: {
    heading: string;
    text: string;
    buttonText: string;
    buttonUrl: string;
  };
  relatedArticles?: RelatedArticle[];
}

export function ArticleTemplate({
  title,
  author,
  publishDate,
  lastUpdated,
  readTime,
  featuredImage,
  category,
  tags,
  introduction,
  sections,
  keyTakeaways,
  timeline,
  quiz,
  conclusion,
  callToAction,
  relatedArticles,
}: ArticleTemplateProps) {
  return (
    <article className="max-w-4xl mx-auto mt-6">
      {/* Category Badge */}
      <Badge variant="outline" className="mb-4">
        {category}
      </Badge>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
        {title}
      </h1>

      {/* Author and Date Info */}
      <div className="flex items-center space-x-4 mb-6">
        {author.image && (
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-medium text-foreground">{author.name}</p>
          {author.role && <p className="text-sm text-muted-foreground">{author.role}</p>}
        </div>
        <Separator orientation="vertical" className="h-8" />
        <div className="text-sm text-muted-foreground">
          <span>{publishDate}</span>
          {lastUpdated && (
            <>
              <span className="mx-2">•</span>
              <span>Updated: {lastUpdated}</span>
            </>
          )}
          {readTime && (
            <>
              <span className="mx-2">•</span>
              <span>{readTime}</span>
            </>
          )}
        </div>
      </div>

      {/* Featured Image */}
      {featuredImage && (
        <figure className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-8">
          <Image
            src={featuredImage.src}
            alt={featuredImage.alt}
            fill
            className="object-cover"
            priority
          />
          {featuredImage.caption && (
            <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 dark:bg-background/90 p-2 text-sm text-muted-foreground">
              {featuredImage.caption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Introduction */}
      <section className="prose prose-lg dark:prose-invert max-w-none mb-8">
        {introduction.map((paragraph, index) => (
          <p key={`intro-${index}`}>{paragraph}</p>
        ))}
      </section>

      {/* Ad Banner */}
      <AdBanner />

      {/* Main Content Sections */}
      <section className="article-body prose prose-lg dark:prose-invert max-w-none mb-8">
        {sections.map((section, sectionIndex) => (
          <div key={`section-${sectionIndex}`} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>

            {section.content.map((paragraph, paraIndex) => (
              <p key={`section-${sectionIndex}-para-${paraIndex}`}>{paragraph}</p>
            ))}

            {section.image && (
              <figure className="my-6">
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                {section.image.caption && (
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    {section.image.caption}
                  </figcaption>
                )}
              </figure>
            )}

            {section.unorderedList && (
              <ul className="my-4">
                {section.unorderedList.map((item, itemIndex) => (
                  <li key={`ul-${sectionIndex}-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            )}

            {section.orderedList && (
              <ol className="my-4">
                {section.orderedList.map((item, itemIndex) => (
                  <li key={`ol-${sectionIndex}-${itemIndex}`}>{item}</li>
                ))}
              </ol>
            )}

            {section.subsections?.map((subsection, subIndex) => (
              <div key={`subsection-${sectionIndex}-${subIndex}`} className="mt-6">
                <h3 className="text-xl font-semibold mb-3">{subsection.title}</h3>

                {subsection.content.map((paragraph, paraIndex) => (
                  <p key={`subsection-${sectionIndex}-${subIndex}-para-${paraIndex}`}>{paragraph}</p>
                ))}

                {subsection.listItems && (
                  <ul className="my-4">
                    {subsection.listItems.map((item, itemIndex) => (
                      <li key={`subsection-${sectionIndex}-${subIndex}-li-${itemIndex}`}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* Key Takeaways */}
        {keyTakeaways && keyTakeaways.length > 0 && (
          <aside className="bg-muted p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
            <ul className="space-y-2">
              {keyTakeaways.map((takeaway, index) => (
                <li key={`takeaway-${index}`} className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>{takeaway.text}</span>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Ad Banner Container */}
        <AdBannerContainer />

        {/* Timeline Section */}
        {timeline && (
          <section className="my-8">
            <h2 className="text-2xl font-bold mb-4">{timeline.title}</h2>
            {timeline.introduction && <p>{timeline.introduction}</p>}
            <ul className="timeline mt-6 space-y-4 border-l-2 border-muted pl-6">
              {timeline.items.map((item, index) => (
                <li key={`timeline-${index}`} className="relative">
                  <div className="absolute -left-[29px] h-5 w-5 rounded-full border-2 border-muted bg-background"></div>
                  <div>
                    <strong className="block text-lg font-medium">{item.date}:</strong>
                    <strong className="text-primary">{item.title}</strong> - {item.description}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
      </section>

      {/* Quiz Section */}
      {quiz && (
        <section className="bg-muted p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold mb-4">{quiz.title}</h3>
          <form id="article-quiz" className="space-y-6">
            {quiz.questions.map((q, qIndex) => (
              <div key={`quiz-q-${qIndex}`} className="quiz-question">
                <p className="font-medium mb-3">{qIndex + 1}. {q.question}</p>
                <div className="space-y-2">
                  {q.options.map((option) => (
                    <label key={option.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name={`q${qIndex}`}
                        value={option.id}
                        className="h-4 w-4 text-primary"
                      />
                      <span>{option.text}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Submit Answers
            </button>
            <div id="quiz-results" className="hidden mt-4 p-4 border border-border rounded-md">
              {/* Results will be shown here (requires JavaScript) */}
            </div>
          </form>
        </section>
      )}

      {/* Ad Banner */}
      <AdBanner />

      {/* Conclusion */}
      {conclusion && conclusion.length > 0 && (
        <section className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          {conclusion.map((paragraph, index) => (
            <p key={`conclusion-${index}`}>{paragraph}</p>
          ))}
        </section>
      )}

      {/* Call to Action */}
      {callToAction && (
        <section className="bg-muted p-6 rounded-lg my-8 text-center">
          <h3 className="text-xl font-bold mb-2">{callToAction.heading}</h3>
          <p className="mb-4">{callToAction.text}</p>
          <Link
            href={callToAction.buttonUrl}
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            {callToAction.buttonText}
          </Link>
        </section>
      )}

      {/* Additional Ad Banner Container */}
      <AdBannerContainer3 />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map(tag => (
          <Link key={tag} href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
            <Badge variant="secondary" className="cursor-pointer">
              {tag}
            </Badge>
          </Link>
        ))}
      </div>

      {/* Share Buttons */}
      <ShareButtons title={title} url={`/article/${title.toLowerCase().replace(/\s+/g, '-')}`} />

      <Separator className="my-12" />

      {/* Author Bio */}
      <section className="flex items-start space-x-4 mb-8 p-6 bg-muted rounded-lg">
        {author.image && (
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <h3 className="text-lg font-bold mb-2">About the Author</h3>
          <p className="text-foreground">{author.bio || `${author.name} is the Founder and Editor-in-Chief of Illuminews.`}</p>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Related Articles</h3>
          <ul className="space-y-2">
            {relatedArticles.map((article, index) => (
              <li key={`related-${index}`}>
                <Link
                  href={article.url}
                  className="text-primary hover:underline"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Additional Ad Banner Container */}
      <AdBannerContainer2 />
    </article>
  );
}
