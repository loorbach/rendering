import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

type CreatePostProps = {};

export function CreatePost({}: CreatePostProps) {
  return (
    <div className="flex flex-col gap-2 border-2 p-2 rounded-lg">
      <Textarea />
      <Button type="submit">Submit</Button>
    </div>
  );
}
