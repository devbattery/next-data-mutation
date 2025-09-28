import PostForm from "@/components/post-form";
import { createPost } from "@/app/actions/posts";

export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
