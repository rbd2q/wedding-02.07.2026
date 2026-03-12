import Link from "next/link";

const NotFoundPage = () => (
  <main className="min-h-screen flex items-center justify-center bg-paper px-6">
    <div className="max-w-md text-center space-y-6">
      <p className="text-sm tracking-[0.3em] uppercase text-brown/70">
        Ошибка 404
      </p>
      <h1 className="text-4xl sm:text-5xl font-cormorant text-darkBrown">
        Страница не найдена
      </h1>
      <p className="text-sm sm:text-base text-brown/80 leading-relaxed">
        Похоже, вы попали по адресу, которого нет в нашем свадебном приглашении.
        Вернитесь на главную, чтобы продолжить знакомство с праздником.
      </p>
      <div className="pt-2">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-brown/20 bg-cream/80 px-6 py-2.5 text-sm font-medium text-darkBrown hover:bg-paper hover:border-brown/40 transition-colors"
        >
          На главную
        </Link>
      </div>
    </div>
  </main>
);

export default NotFoundPage;

