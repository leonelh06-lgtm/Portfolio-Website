// Props are inputs passed to a component, like attributes on an HTML element.
// This type requires both inputs to be strings so each page supplies its title
// and short description consistently.
type PageHeadingProps = { title: string; description: string };

export default function PageHeading({ title, description }: PageHeadingProps) {
  // {title} inserts a JavaScript value into JSX. className is React's spelling
  // of HTML's class attribute. mb-8 adds spacing; text-3xl sets font size.
  return (
    <header className="mb-8">
      <h1 tabIndex={-1} className="mb-3 text-3xl font-bold sm:text-4xl">{title}</h1>
      <p className="max-w-2xl muted-text">{description}</p>
    </header>
  );
}
