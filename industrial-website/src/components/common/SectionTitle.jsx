export default function SectionTitle({
  eyebrow = "Our Section",
  title = "Section Heading",
  description = "This is a reusable section title component.",
  titleClass="",
  descriptionClass="",
  align = "center",
}) {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`mb-10 flex flex-col ${alignment} sm:mb-12`}>
      <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-600 sm:text-sm">
        {eyebrow}
      </span>

      <h2 className={`max-w-3xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl ${titleClass}`}>
        {title}
      </h2>

      <p className={`mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg ${descriptionClass}`}>
        {description}
      </p>

      
    </div>
  );
}