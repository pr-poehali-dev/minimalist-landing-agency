import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: 'Target',
      title: 'Таргетированная реклама',
      description: 'Точное попадание в целевую аудиторию. Настройка рекламы в соцсетях с максимальной конверсией.'
    },
    {
      icon: 'TrendingUp',
      title: 'SEO продвижение',
      description: 'Вывод сайта в топ поисковых систем. Увеличение органического трафика и видимости бренда.'
    },
    {
      icon: 'Search',
      title: 'Контекстная реклама',
      description: 'Эффективные рекламные кампании в Яндекс.Директ и Google Ads с высоким ROI.'
    },
    {
      icon: 'Share2',
      title: 'SMM и ведение соцсетей',
      description: 'Комплексное управление аккаунтами в социальных сетях. Контент-план и общение с аудиторией.'
    },
    {
      icon: 'FileText',
      title: 'Контент-маркетинг',
      description: 'Создание вовлекающего контента, который продаёт. Статьи, посты, видео для вашего бизнеса.'
    },
    {
      icon: 'BarChart3',
      title: 'Веб-аналитика',
      description: 'Глубокий анализ данных и метрик. Отслеживание эффективности и оптимизация стратегий.'
    }
  ];

  const cases = [
    {
      title: 'Интернет-магазин одежды',
      result: '+350% продаж за 3 месяца',
      metrics: ['CTR 8.2%', 'CPA снижена на 45%', 'ROAS 620%']
    },
    {
      title: 'Сеть фитнес-клубов',
      result: '+180 новых клиентов в месяц',
      metrics: ['Охват 2.5М', 'Конверсия 12%', 'CPL $8']
    },
    {
      title: 'IT-компания',
      result: 'Топ-3 по 47 запросам',
      metrics: ['Трафик +420%', 'Позиции ↑28', 'Лиды +290%']
    }
  ];

  const team = [
    { name: 'Анна Иванова', role: 'Директор по маркетингу', experience: '12 лет' },
    { name: 'Дмитрий Петров', role: 'SEO-специалист', experience: '8 лет' },
    { name: 'Мария Сидорова', role: 'Таргетолог', experience: '6 лет' },
    { name: 'Алексей Смирнов', role: 'Контент-менеджер', experience: '7 лет' }
  ];

  const advantages = [
    { icon: 'Award', title: 'Прозрачность', text: 'Еженедельные отчёты и доступ к рекламным кабинетам' },
    { icon: 'Zap', title: 'Скорость', text: 'Запуск первых кампаний уже через 48 часов' },
    { icon: 'Shield', title: 'Гарантия', text: 'Возврат средств, если не достигнем KPI' },
    { icon: 'Users', title: 'Команда', text: '20+ сертифицированных специалистов' }
  ];

  const testimonials = [
    {
      name: 'Ольга Коваленко',
      company: 'CEO, Fashion Store',
      text: 'Отличная команда! За полгода работы увеличили продажи в 3 раза. Особенно впечатлила работа с таргетом.'
    },
    {
      name: 'Игорь Волков',
      company: 'Владелец сети клиник',
      text: 'Профессионалы своего дела. SEO-продвижение принесло поток качественных клиентов. Рекомендую!'
    },
    {
      name: 'Екатерина Лебедева',
      company: 'Маркетолог, Tech Solutions',
      text: 'Работаем уже год. Постоянно растём в показателях. Ребята всегда на связи и предлагают новые идеи.'
    }
  ];

  const faqs = [
    {
      question: 'Какой минимальный бюджет для старта?',
      answer: 'Минимальный бюджет зависит от ниши и целей. Для таргетированной рекламы рекомендуем от 30 000 руб/месяц, для комплексного продвижения — от 50 000 руб/месяц. Мы подберём оптимальную стратегию под ваш бюджет.'
    },
    {
      question: 'Как быстро будут первые результаты?',
      answer: 'Таргетированная и контекстная реклама дают первые лиды уже в первую неделю. SEO-продвижение — это долгосрочная стратегия, первые заметные результаты появляются через 2-3 месяца.'
    },
    {
      question: 'Какие отчёты вы предоставляете?',
      answer: 'Еженедельные оперативные отчёты по ключевым метрикам и ежемесячные подробные аналитические отчёты с рекомендациями. Также предоставляем доступ к рекламным кабинетам и аналитическим системам.'
    },
    {
      question: 'Работаете ли вы с моей нишей?',
      answer: 'У нас есть успешные кейсы в e-commerce, услугах, B2B, медицине, недвижимости, образовании и других сферах. Перед началом работы проводим аудит вашей ниши и конкурентов.'
    },
    {
      question: 'Можно ли расторгнуть договор?',
      answer: 'Да, договор можно расторгнуть с уведомлением за 14 дней. Мы работаем на результат и уверены в своих услугах, поэтому не привязываем клиентов долгосрочными обязательствами.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Спасибо за обращение!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-primary/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <Icon name="Target" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold font-heading bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Marketing Pro</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm hover:text-primary transition-colors font-medium">Услуги</a>
              <a href="#cases" className="text-sm hover:text-primary transition-colors font-medium">Кейсы</a>
              <a href="#team" className="text-sm hover:text-primary transition-colors font-medium">Команда</a>
              <a href="#advantages" className="text-sm hover:text-primary transition-colors font-medium">Преимущества</a>
              <a href="#testimonials" className="text-sm hover:text-primary transition-colors font-medium">Отзывы</a>
              <a href="#faq" className="text-sm hover:text-primary transition-colors font-medium">FAQ</a>
              <a href="#contact">
                <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">Связаться</Button>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center animate-fade-in">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-6 border border-primary/20">
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">🚀 #1 Digital-агентство 2024</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              Маркетинг, который работает
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto">
              Увеличиваем продажи и узнаваемость бренда с помощью digital-инструментов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-primary/30 hover:bg-primary/5" onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}>
                Наши кейсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto max-w-6xl relative">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">Комплексные решения для роста вашего бизнеса</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2 hover:border-primary/30 group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold font-heading mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-gradient-to-br from-accent/5 via-transparent to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Наши кейсы</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">Реальные результаты, которых мы достигли</p>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-white to-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold font-heading mb-4">{caseItem.title}</h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">{caseItem.result}</div>
                  <div className="space-y-2">
                    {caseItem.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary" />
                        <span className="text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Наша команда</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">Профессионалы с многолетним опытом</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-accent to-primary mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Icon name="User" size={40} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold font-heading mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                  <p className="text-xs font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Опыт: {member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Почему мы</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">4 причины работать с нами</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Icon name={advantage.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">Что говорят о нас наши клиенты</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/30">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-gradient-to-br from-accent/5 via-transparent to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Частые вопросы</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">Ответы на популярные вопросы</p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-white/50 backdrop-blur-sm">
                <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Свяжитесь с нами</h2>
          <p className="text-center text-foreground/70 mb-12">Оставьте заявку, и мы свяжемся с вами в течение часа</p>
          <Card className="border-2 border-primary/20 shadow-2xl">
            <CardContent className="p-8 bg-gradient-to-br from-white to-primary/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Icon name="Target" className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold font-heading bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Marketing Pro</span>
              </div>
              <p className="text-sm text-muted-foreground">Маркетинговое агентство полного цикла</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Таргетированная реклама</li>
                <li className="hover:text-primary transition-colors cursor-pointer">SEO продвижение</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Контекстная реклама</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#cases" className="hover:text-primary transition-colors">Кейсы</a></li>
                <li><a href="#team" className="hover:text-primary transition-colors">Команда</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Mail" size={16} />
                  <span>hello@marketingpro.ru</span>
                </li>
                <li className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 Marketing Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
