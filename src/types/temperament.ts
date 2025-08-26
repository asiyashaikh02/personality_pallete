export interface Question {
  id: number;
  text: string;
  options: string[];
  temperament: 'sanguine' | 'choleric' | 'melancholic' | 'phlegmatic';
}

export interface TestResult {
  dominantType: 'sanguine' | 'choleric' | 'melancholic' | 'phlegmatic';
  percentages: {
    sanguine: number;
    choleric: number;
    melancholic: number;
    phlegmatic: number;
  };
  completedAt: Date;
}