import { comments } from "@/app/data/comments";

// export async function GET(request, { params }) {
// export async function GET(request, context) {
// Optional Parameter can be prefixed with "_"
export async function GET(_request, context) {
  const { params } = context;
  const commentId = params.id;

  const comment = comments.find(c => c.id === commentId);
  
  return Response.json(comment);
}

export async function PATCH(request, { params }) {
  const commentToUpdate = await request.json();

  const commentId = params.id;

  const commentIndex = comments.findIndex(c => c.id === commentId);

  /* Say, commentIndex = 0
  index
  comments[0].title = '1st Comment'
  commentToUpdate.title = 'Updated Comment';
  comments[0].title = commentToUpdate.title */

  comments[commentIndex].title = commentToUpdate.title;
  
  return Response.json(comments[commentIndex]);
}

export async function DELETE(request, { params }) {
  const commentId = params.id;

  const commentIndex = comments.findIndex(c => c.id === commentId);

  const commentToDelete = comments[commentIndex];

  comments.splice(commentIndex, 1);

  return Response.json(commentToDelete);
}