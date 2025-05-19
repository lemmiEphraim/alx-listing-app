export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price?: number;
  rating?: number;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}
