import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface AuthRequiredProps {
  onAuthClick: () => void;
}

const AuthRequired = ({ onAuthClick }: AuthRequiredProps) => {
  return (
    <div className="max-w-2xl mx-auto py-16 animate-fade-in">
      <Card className="border-2">
        <CardHeader className="text-center pb-4">
          <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Lock" size={40} className="text-primary" />
          </div>
          <CardTitle className="text-3xl">Требуется авторизация</CardTitle>
          <CardDescription className="text-lg">
            Войдите или зарегистрируйтесь, чтобы получить доступ к этой странице
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4 text-center py-4">
            <div>
              <div className="text-3xl mb-2">🎨</div>
              <p className="text-sm text-muted-foreground">Создавай игры с AI</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💾</div>
              <p className="text-sm text-muted-foreground">Сохраняй проекты</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌍</div>
              <p className="text-sm text-muted-foreground">Публикуй в галерее</p>
            </div>
          </div>
          <Button className="w-full gap-2" size="lg" onClick={onAuthClick}>
            <Icon name="LogIn" size={20} />
            Войти или зарегистрироваться
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthRequired;
