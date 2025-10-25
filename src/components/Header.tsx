import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Icon from '@/components/ui/icon';

interface User {
  username: string;
  email: string;
}

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: User | null;
  onAuthClick: () => void;
}

const Header = ({ activeTab, setActiveTab, user, onAuthClick }: HeaderProps) => {
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
          <div className="flex items-center gap-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-sm">
                        {user.username.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline">{user.username}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setActiveTab('profile')}>
                    <Icon name="User" size={16} className="mr-2" />
                    Профиль
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveTab('my-games')}>
                    <Icon name="Gamepad2" size={16} className="mr-2" />
                    Мои игры
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Icon name="Settings" size={16} className="mr-2" />
                    Настройки
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icon name="HelpCircle" size={16} className="mr-2" />
                    Помощь
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={onAuthClick} className="gap-2">
                <Icon name="LogIn" size={18} />
                Войти
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;