import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Tutorial {
  title: string;
  duration: string;
  icon: string;
  description: string;
}

interface LearnPageProps {
  tutorials: Tutorial[];
}

const LearnPage = ({ tutorials }: LearnPageProps) => {
  return (
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
  );
};

export default LearnPage;
