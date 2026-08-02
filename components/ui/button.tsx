export function Button({ ...props }: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="button"
      className={
        "shrink-0 min-w-1/2 mx-auto flex items-center justify-center rounded-lg bg-sky-600 py-1 text-sm font-medium whitespace-nowrap text-white transition-all outline-none select-none active:translate-y-px disabled:pointer-events-none disabled:opacity-50"
      }
      {...props}
    />
  );
}
