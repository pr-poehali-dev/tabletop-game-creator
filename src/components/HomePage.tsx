import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Game {
  id: number;
  title: string;
  author: string;
  image: string;
  likes: number;
  description: string;
}

interface HomePageProps {
  games: Game[];
  setActiveTab: (tab: string) => void;
}

const HomePage = ({ games, setActiveTab }: HomePageProps) => {
  return (
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
  );
};

export default HomePage;
