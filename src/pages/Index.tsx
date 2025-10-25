import { useState } from 'react';
import Header from '@/components/Header';
import HomePage from '@/components/HomePage';
import ConstructorPage from '@/components/ConstructorPage';
import GalleryPage from '@/components/GalleryPage';
import MyGamesPage from '@/components/MyGamesPage';
import LearnPage from '@/components/LearnPage';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const games = [
    {
      id: 1,
      title: 'Космическая Одиссея',
      author: 'Анна К.',
      image: '🚀',
      likes: 234,
      description: 'Исследуйте галактику в этой карточной игре с элементами стратегии'
    },
    {
      id: 2,
      title: 'Магия и Драконы',
      author: 'Дмитрий П.',
      image: '🐉',
      likes: 189,
      description: 'Фэнтезийная настолка с AI-генерированными персонажами'
    },
    {
      id: 3,
      title: 'Детективное Агентство',
      author: 'Мария С.',
      image: '🔍',
      likes: 156,
      description: 'Расследуйте преступления в викторианском Лондоне'
    },
    {
      id: 4,
      title: 'Подводный Мир',
      author: 'Игорь В.',
      image: '🌊',
      likes: 142,
      description: 'Исследуйте океанские глубины и создавайте свой подводный рай'
    }
  ];

  const myGames = [
    {
      id: 1,
      title: 'Моя Фэнтези Игра',
      status: 'В разработке',
      lastEdit: '2 часа назад',
      cards: 24
    },
    {
      id: 2,
      title: 'Космические Гонки',
      status: 'Опубликована',
      lastEdit: '3 дня назад',
      cards: 48
    }
  ];

  const tutorials = [
    {
      title: 'Начало работы',
      duration: '5 мин',
      icon: 'Play',
      description: 'Основы работы с конструктором игр'
    },
    {
      title: 'AI-генерация элементов',
      duration: '8 мин',
      icon: 'Wand2',
      description: 'Создание карт и персонажей с помощью AI'
    },
    {
      title: 'Публикация игры',
      duration: '3 мин',
      icon: 'Upload',
      description: 'Как опубликовать свою игру в галерее'
    },
    {
      title: 'Правила и баланс',
      duration: '10 мин',
      icon: 'Scale',
      description: 'Создание сбалансированного игрового опыта'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && <HomePage games={games} setActiveTab={setActiveTab} />}
        {activeTab === 'constructor' && <ConstructorPage />}
        {activeTab === 'gallery' && <GalleryPage games={games} setSelectedGame={setSelectedGame} />}
        {activeTab === 'my-games' && <MyGamesPage myGames={myGames} setActiveTab={setActiveTab} />}
        {activeTab === 'learn' && <LearnPage tutorials={tutorials} />}
      </main>

      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="mb-2">GameForge AI — платформа для создания настольных игр с нейросетью</p>
          <p>Создано с ❤️ для сообщества геймдизайнеров</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
