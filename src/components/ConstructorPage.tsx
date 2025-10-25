import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ConstructorPage = () => {
  return (
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
  );
};

export default ConstructorPage;
