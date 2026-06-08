/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WorkExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export interface ActiveProjectItem {
  id: string;
  title: string;
  subtitle: string;
  techBadge: string;
  imageUrl: string | any;
  longDescription: string;
  features: string[];
  links: {
    label: string;
    url?: string;
  };
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  duration: string;
  type: string; 
  imageUrl?: string | any; 
  description: string;
  score?: string;
}

export interface CompetencyItem {
  name: string;
  level: number; 
  info: string;
  isSpecial?: boolean;
}

export interface TransmissionLog {
  timestamp: string;
  message: string;
  type: 'info' | 'success' | 'warn' | 'error';
}
