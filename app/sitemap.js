export default async function sitemap() {
  const baseUrl = 'https://internationalmaths.ir';

  // لیست صفحات اصلی سایت شما
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // اگر صفحات دیگری مثل صفحه تماس با ما، درباره ما یا دوره‌ها دارید، می‌توانید در اینجا اضافه کنید
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
