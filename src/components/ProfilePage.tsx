import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface User {
  username: string;
  email: string;
}

interface ProfilePageProps {
  user: User;
  onLogout: () => void;
}

const ProfilePage = ({ user, onLogout }: ProfilePageProps) => {
  const stats = {
    gamesCreated: 12,
    totalLikes: 1543,
    followers: 234,
    following: 156
  };

  const achievements = [
    { icon: '🏆', title: 'Первая игра', description: 'Создал свою первую игру' },
    { icon: '⭐', title: 'Популярный создатель', description: 'Получил 100+ лайков' },
    { icon: '🎨', title: 'AI-мастер', description: 'Сгенерировал 50+ элементов' },
    { icon: '👥', title: 'Сообщество', description: '100+ подписчиков' }
  ];

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-2">Профиль</h2>
        <p className="text-muted-foreground text-lg">Управляй своим аккаунтом</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarFallback className="text-3xl bg-gradient-to-br from-primary to-secondary text-white">
                    {user.username.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-2xl font-bold mb-1">{user.username}</h3>
                <p className="text-sm text-muted-foreground mb-4">{user.email}</p>
                <Badge variant="secondary" className="mb-4">Создатель игр</Badge>
                <Separator className="my-4" />
                <div className="w-full space-y-2">
                  <Button variant="outline" className="w-full gap-2">
                    <Icon name="Upload" size={16} />
                    Изменить фото
                  </Button>
                  <Button variant="outline" className="w-full gap-2" onClick={onLogout}>
                    <Icon name="LogOut" size={16} />
                    Выйти
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Статистика</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Игр создано</span>
                <Badge>{stats.gamesCreated}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Всего лайков</span>
                <Badge>{stats.totalLikes}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Подписчиков</span>
                <Badge>{stats.followers}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Подписок</span>
                <Badge>{stats.following}</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Настройки профиля</CardTitle>
              <CardDescription>Обновите информацию о себе</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Имя пользователя</Label>
                  <Input id="username" defaultValue={user.username} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user.email} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">О себе</Label>
                <Textarea
                  id="bio"
                  placeholder="Расскажите о себе и своих играх..."
                  rows={4}
                  className="resize-none"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Сайт или портфолио</Label>
                <Input id="website" placeholder="https://..." />
              </div>
              <Button className="gap-2">
                <Icon name="Save" size={16} />
                Сохранить изменения
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Достижения</CardTitle>
              <CardDescription>Ваши успехи в создании игр</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg border hover:border-primary transition-colors"
                  >
                    <div className="text-3xl">{achievement.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Безопасность</CardTitle>
              <CardDescription>Настройки безопасности аккаунта</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Текущий пароль</Label>
                <Input id="current-password" type="password" placeholder="••••••••" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password">Новый пароль</Label>
                  <Input id="new-password" type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Подтвердите пароль</Label>
                  <Input id="confirm-password" type="password" placeholder="••••••••" />
                </div>
              </div>
              <Button variant="outline" className="gap-2">
                <Icon name="Lock" size={16} />
                Изменить пароль
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
