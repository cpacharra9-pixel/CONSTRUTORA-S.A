
import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
}
