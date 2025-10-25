import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  return (
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
  );
};

export default Header;
