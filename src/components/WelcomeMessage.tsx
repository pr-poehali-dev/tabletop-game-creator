import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface WelcomeMessageProps {
  username: string;
}

const WelcomeMessage = ({ username }: WelcomeMessageProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-20 right-4 z-50 animate-fade-in">
      <Card className="border-2 shadow-lg bg-gradient-to-br from-primary/10 to-secondary/10">
        <CardContent className="flex items-center gap-3 p-4">
          <div className="text-2xl">👋</div>
          <div>
            <p className="font-semibold text-lg">С возвращением, {username}!</p>
            <p className="text-sm text-muted-foreground">Рады видеть тебя снова</p>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="ml-2 hover:bg-muted rounded-full p-1 transition-colors"
          >
            <Icon name="X" size={16} />
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeMessage;
