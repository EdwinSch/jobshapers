import faq from "@/data/faq.json";

const Faq = () => {
  return (
    <section className="m-auto mt-10 max-w-[850px] flex flex-col gap-6">
      {faq.map((item, idx) => {
        return (
          <article
            key={idx}
            className="p-6 bg-jsOffWhite border border-slate-300 rounded-md"
          >
            <h4 className="mb-4 text-jsMidnight text-lg font-bold leading-snug">
              {item.question}
            </h4>
            <p className="text-jsText">{item.answer}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Faq;
