import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const games = [
    {
      id: 1,
      title: 'Космическая Одиссея',
      author: 'Анна К.',
      image: '🚀',
      likes: 234,
      description: 'Исследуйте галактику в этой карточной игре с элементами стратегии'
    },
    {
      id: 2,
      title: 'Магия и Драконы',
      author: 'Дмитрий П.',
      image: '🐉',
      likes: 189,
      description: 'Фэнтезийная настолка с AI-генерированными персонажами'
    },
    {
      id: 3,
      title: 'Детективное Агентство',
      author: 'Мария С.',
      image: '🔍',
      likes: 156,
      description: 'Расследуйте преступления в викторианском Лондоне'
    },
    {
      id: 4,
      title: 'Подводный Мир',
      author: 'Игорь В.',
      image: '🌊',
      likes: 142,
      description: 'Исследуйте океанские глубины и создавайте свой подводный рай'
    }
  ];

  const myGames = [
    {
      id: 1,
      title: 'Моя Фэнтези Игра',
      status: 'В разработке',
      lastEdit: '2 часа назад',
      cards: 24
    },
    {
      id: 2,
      title: 'Космические Гонки',
      status: 'Опубликована',
      lastEdit: '3 дня назад',
      cards: 48
    }
  ];

  const tutorials = [
    {
      title: 'Начало работы',
      duration: '5 мин',
      icon: 'Play',
      description: 'Основы работы с конструктором игр'
    },
    {
      title: 'AI-генерация элементов',
      duration: '8 мин',
      icon: 'Wand2',
      description: 'Создание карт и персонажей с помощью AI'
    },
    {
      title: 'Публикация игры',
      duration: '3 мин',
      icon: 'Upload',
      description: 'Как опубликовать свою игру в галерее'
    },
    {
      title: 'Правила и баланс',
      duration: '10 мин',
      icon: 'Scale',
      description: 'Создание сбалансированного игрового опыта'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl animate-float">🎲</div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  GameForge AI
                </h1>
                <p className="text-sm text-muted-foreground">Создавай игры с нейросетью</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-2">
              <Button
                variant={activeTab === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('home')}
                className="gap-2"
              >
                <Icon name="Home" size={18} />
                Главная
              </Button>
              <Button
                variant={activeTab === 'constructor' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('constructor')}
                className="gap-2"
              >
                <Icon name="Hammer" size={18} />
                Конструктор
              </Button>
              <Button
                variant={activeTab === 'gallery' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('gallery')}
                className="gap-2"
              >
                <Icon name="Library" size={18} />
                Галерея
              </Button>
              <Button
                variant={activeTab === 'my-games' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('my-games')}
                className="gap-2"
              >
                <Icon name="User" size={18} />
                Мои игры
              </Button>
              <Button
                variant={activeTab === 'learn' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('learn')}
                className="gap-2"
              >
                <Icon name="GraduationCap" size={18} />
                Обучение
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="text-center py-16">
              <div className="inline-block mb-4">
                <Badge variant="secondary" className="text-lg px-4 py-2 rounded-full animate-scale-in">
                  ✨ Создай свою первую игру за 10 минут
                </Badge>
              </div>
              <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                Настольные игры<br />нового поколения
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Используй силу нейросетей для создания уникальных карт, персонажей и игровых механик. 
                Публикуй свои игры и вдохновляйся работами сообщества.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" onClick={() => setActiveTab('constructor')} className="gap-2 text-lg px-8">
                  <Icon name="Sparkles" size={20} />
                  Начать создание
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveTab('gallery')} className="gap-2 text-lg px-8">
                  <Icon name="Eye" size={20} />
                  Смотреть галерею
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="text-4xl mb-2">🎨</div>
                  <CardTitle>AI-генерация</CardTitle>
                  <CardDescription>
                    Создавай карты, персонажей и игровые поля с помощью нейросети
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="text-4xl mb-2">🔧</div>
                  <CardTitle>Конструктор</CardTitle>
                  <CardDescription>
                    Визуальный редактор с готовыми шаблонами и механиками
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 hover:border-accent transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="text-4xl mb-2">🌍</div>
                  <CardTitle>Публикация</CardTitle>
                  <CardDescription>
                    Делись играми с сообществом и получай обратную связь
                  </CardDescription>
                </CardHeader>
              </Card>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold">Популярные игры</h3>
                <Button variant="ghost" onClick={() => setActiveTab('gallery')} className="gap-2">
                  Смотреть все
                  <Icon name="ArrowRight" size={18} />
                </Button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {games.slice(0, 4).map((game) => (
                  <Card key={game.id} className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
                      {game.image}
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-lg mb-1">{game.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{game.author}</p>
                      <div className="flex items-center gap-2">
                        <Icon name="Heart" size={16} className="text-primary" />
                        <span className="text-sm font-medium">{game.likes}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'constructor' && (
          <div className="max-w-6xl mx-auto animate-fade-in">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2">Конструктор игр</h2>
              <p className="text-muted-foreground text-lg">Создай свою уникальную настольную игру с помощью AI</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Sparkles" size={24} />
                    AI-генератор элементов
                  </CardTitle>
                  <CardDescription>Опиши, что хочешь создать, и нейросеть сгенерирует это для тебя</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Тип элемента</label>
                    <Tabs defaultValue="card" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="card">Карта</TabsTrigger>
                        <TabsTrigger value="character">Персонаж</TabsTrigger>
                        <TabsTrigger value="board">Поле</TabsTrigger>
                        <TabsTrigger value="token">Жетон</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Описание</label>
                    <Textarea 
                      placeholder="Например: Могущественный маг огня с длинной бородой, в красной мантии, держащий огненный посох. Стиль фэнтези арт."
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Стиль</label>
                      <Input placeholder="Фэнтези, sci-fi, минимализм..." />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Цветовая схема</label>
                      <Input placeholder="Тёмная, яркая, пастельная..." />
                    </div>
                  </div>

                  <Button className="w-full gap-2" size="lg">
                    <Icon name="Wand2" size={20} />
                    Сгенерировать элемент
                  </Button>

                  <div className="border-2 border-dashed rounded-lg aspect-video flex items-center justify-center bg-muted/30">
                    <div className="text-center text-muted-foreground">
                      <Icon name="ImagePlus" size={48} className="mx-auto mb-2 opacity-50" />
                      <p>Сгенерированный элемент появится здесь</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon name="Layers" size={20} />
                      Мой проект
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Input placeholder="Название игры" defaultValue="Новая игра" />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Карты</span>
                        <Badge>0</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Персонажи</span>
                        <Badge>0</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Поля</span>
                        <Badge>0</Badge>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full gap-2">
                      <Icon name="Save" size={16} />
                      Сохранить проект
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon name="Palette" size={20} />
                      Шаблоны
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <span className="text-xl">🃏</span>
                      Карточная игра
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <span className="text-xl">🎯</span>
                      Стратегия
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <span className="text-xl">🎲</span>
                      Приключения
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <span className="text-xl">🏰</span>
                      RPG
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2">Галерея игр</h2>
              <p className="text-muted-foreground text-lg">Исследуй игры, созданные сообществом</p>
            </div>

            <div className="flex gap-4 mb-6">
              <Input placeholder="Поиск игр..." className="max-w-md" />
              <Button variant="outline" className="gap-2">
                <Icon name="Filter" size={18} />
                Фильтры
              </Button>
              <Button variant="outline" className="gap-2 ml-auto">
                <Icon name="TrendingUp" size={18} />
                Популярные
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game) => (
                <Card 
                  key={game.id} 
                  className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                  onClick={() => setSelectedGame(game.id.toString())}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center text-9xl group-hover:scale-105 transition-transform">
                    {game.image}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-xl mb-1">{game.title}</h3>
                        <p className="text-sm text-muted-foreground">от {game.author}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="hover:text-primary">
                        <Icon name="Heart" size={20} />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{game.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon name="Heart" size={16} className="text-primary" />
                        <span className="text-sm font-medium">{game.likes}</span>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Icon name="Eye" size={16} />
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'my-games' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2">Мои игры</h2>
              <p className="text-muted-foreground text-lg">Управляй своими проектами</p>
            </div>

            <div className="mb-6">
              <Button className="gap-2" size="lg" onClick={() => setActiveTab('constructor')}>
                <Icon name="Plus" size={20} />
                Создать новую игру
              </Button>
            </div>

            <div className="space-y-4">
              {myGames.map((game) => (
                <Card key={game.id} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center text-3xl">
                          🎮
                        </div>
                        <div>
                          <h3 className="font-bold text-xl mb-1">{game.title}</h3>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Badge variant={game.status === 'Опубликована' ? 'default' : 'secondary'}>
                              {game.status}
                            </Badge>
                            <span>•</span>
                            <span>{game.cards} карт</span>
                            <span>•</span>
                            <span>{game.lastEdit}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                          <Icon name="Pencil" size={18} />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Icon name="Share2" size={18} />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Icon name="MoreVertical" size={18} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'learn' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2">Обучение</h2>
              <p className="text-muted-foreground text-lg">Мастер-классы по созданию игр</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {tutorials.map((tutorial, index) => (
                <Card key={index} className="hover:shadow-lg transition-all group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon name={tutorial.icon as any} size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-lg">{tutorial.title}</h3>
                          <Badge variant="secondary">{tutorial.duration}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{tutorial.description}</p>
                        <Button variant="ghost" className="gap-2 px-0 hover:gap-3 transition-all">
                          Начать урок
                          <Icon name="ArrowRight" size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-2xl font-bold mb-2">Нужна помощь?</h3>
                <p className="text-muted-foreground mb-4">
                  Присоединяйся к нашему сообществу создателей игр
                </p>
                <Button variant="outline" className="gap-2">
                  <Icon name="Users" size={18} />
                  Перейти в сообщество
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="mb-2">GameForge AI — платформа для создания настольных игр с нейросетью</p>
          <p>Создано с ❤️ для сообщества геймдизайнеров</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
