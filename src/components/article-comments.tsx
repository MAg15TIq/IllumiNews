"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

interface Comment {
  id: number
  author: string
  authorImage: string
  date: string
  content: string
  likes: number
  replies?: Comment[]
}

// Mock data - in a real app, this would come from a database or API
const mockComments: Comment[] = [
  {
    id: 1,
    author: "Alex Johnson",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "2 hours ago",
    content: "This is a fascinating breakthrough! I wonder how quickly we'll see this technology implemented in residential areas.",
    likes: 12,
    replies: [
      {
        id: 101,
        author: "Sarah Miller",
        authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
        date: "1 hour ago",
        content: "According to the article, they're planning pilot installations next year. I'd expect wider adoption within 3-5 years if those are successful.",
        likes: 8
      }
    ]
  },
  {
    id: 2,
    author: "Michael Chen",
    authorImage: "https://randomuser.me/api/portraits/men/22.jpg",
    date: "5 hours ago",
    content: "I'm curious about the manufacturing challenges they mentioned. Does anyone know more about the specific materials they're using for the storage component?",
    likes: 5
  },
  {
    id: 3,
    author: "Emily Rodriguez",
    authorImage: "https://randomuser.me/api/portraits/women/28.jpg",
    date: "Yesterday",
    content: "Great reporting on this topic. It's refreshing to see some positive news about climate solutions for a change!",
    likes: 19
  }
];

interface CommentProps {
  comment: Comment
  isReply?: boolean
}

function CommentItem({ comment, isReply = false }: CommentProps) {
  const [liked, setLiked] = useState(false)
  const [showReplyForm, setShowReplyForm] = useState(false)

  return (
    <div className={`${isReply ? "ml-12 mt-4" : "mb-6"}`}>
      <div className="flex items-start gap-4">
        <Avatar>
          <AvatarImage src={comment.authorImage} alt={comment.author} />
          <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-foreground">{comment.author}</span>
            <span className="text-xs text-muted-foreground">{comment.date}</span>
          </div>
          <p className="text-foreground mb-2">{comment.content}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <button
              className={`flex items-center gap-1 ${liked ? "text-primary" : ""}`}
              onClick={() => setLiked(!liked)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill={liked ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              <span>{liked ? comment.likes + 1 : comment.likes}</span>
            </button>
            {!isReply && (
              <button
                className="flex items-center gap-1"
                onClick={() => setShowReplyForm(!showReplyForm)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                  />
                </svg>
                <span>Reply</span>
              </button>
            )}
          </div>

          {showReplyForm && (
            <div className="mt-4">
              <Textarea
                placeholder="Write a reply..."
                className="mb-2 min-h-[100px]"
                spellCheck={false}
              />
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowReplyForm(false)}
                >
                  Cancel
                </Button>
                <Button size="sm">Post Reply</Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {comment.replies?.map(reply => (
        <CommentItem key={reply.id} comment={reply} isReply={true} />
      ))}
    </div>
  )
}

interface ArticleCommentsProps {
  articleId: number
}

export function ArticleComments({ articleId }: ArticleCommentsProps) {
  // In a real app, you would fetch comments based on the articleId
  const comments = mockComments

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">Comments ({comments.length})</h2>

      <div className="mb-8">
        <Textarea
          placeholder="Join the conversation..."
          className="mb-4 min-h-[120px]"
          spellCheck={false}
        />
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            Be respectful and thoughtful in your comments.
          </p>
          <Button>Post Comment</Button>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="space-y-6">
        {comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  )
}
