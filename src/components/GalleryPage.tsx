import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface Game {
  id: number;
  title: string;
  author: string;
  image: string;
  likes: number;
  description: string;
}

interface GalleryPageProps {
  games: Game[];
  setSelectedGame: (id: string) => void;
}

const GalleryPage = ({ games, setSelectedGame }: GalleryPageProps) => {
  return (
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
  );
};

export default GalleryPage;
