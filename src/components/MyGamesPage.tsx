import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface MyGame {
  id: number;
  title: string;
  status: string;
  lastEdit: string;
  cards: number;
}

interface MyGamesPageProps {
  myGames: MyGame[];
  setActiveTab: (tab: string) => void;
}

const MyGamesPage = ({ myGames, setActiveTab }: MyGamesPageProps) => {
  return (
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
  );
};

export default MyGamesPage;
