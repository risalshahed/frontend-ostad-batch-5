import { comments } from "@/app/data/comments";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request) {
  const comment = await request.json();

  const newComment = {
    // id: comments.length + 1,
    id: crypto.randomUUID(),
    title: comment.title
  }

  return Response.json(newComment, {
    headers: {
      'Content-Type': 'application/json'
    },
    status: 201
  });
}