type PostCardProps = {
  post: {
    id: number;
    text: string;
    engagement: number;
  };
};

export function PostCard({ post }: PostCardProps) {
  const { text, engagement } = post;

  return (
    <div className="flex flex-col border-2 shadow-sm rounded-xl p-4 gap-2">
      <div>{text}</div>
      <div className="tabular-nums">{engagement}</div>
    </div>
  );
}
