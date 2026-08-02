export function Textarea({ ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={
        "min-h-16 w-full resize-none rounded-lg border border-gray-300 bg-transparent px-2.5 py-2 text-base outline-none transition-colors focus:border-sky-600 focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
      }
      placeholder="Share your thoughts!"
      {...props}
    />
  );
}
