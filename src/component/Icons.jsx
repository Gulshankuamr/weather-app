import React from 'react';
import windIcon from '../assets/wind.png';
import humidityIcon from '../assets/humidity.png';
import visibilityIcon from '../assets/visibility.png';
import sunriseIcon from '../assets/sunrise.png';
import sunsetIcon from '../assets/sunset.png';

// Reusable Icon Component
const Icon = ({ src, alt, className = '' }) => (
  <img src={src} alt={alt} className={`h-8 w-8 inline-block ${className}`} />
);

// Icon definitions
const icons = {
  WindIcon: {
    src: windIcon,
    alt: 'wind',
    className: 'animate-icon svg-hover'
  },
  HumidityIcon: {
    src: humidityIcon,
    alt: 'humidity',
    className: 'powerful-pulse svg-hover'
  },
  VisibilityIcon: {
    src: visibilityIcon,
    alt: 'visibility',
    className: 'powerful-pulse svg-hover'
  },
  SunriseIcon: {
    src: sunriseIcon,
    alt: 'sunrise',
    className: 'powerful-pulse svg-hover'
  },
  SunsetIcon: {
    src: sunsetIcon,
    alt: 'sunset',
    className: 'powerful-pulse svg-hover'
  }
};

// Export individual icons
export const WindIcon = () => <Icon {...icons.WindIcon} />;
export const HumidityIcon = () => <Icon {...icons.HumidityIcon} />;
export const VisibilityIcon = () => <Icon {...icons.VisibilityIcon} />;
export const SunriseIcon = () => <Icon {...icons.SunriseIcon} />;
export const SunsetIcon = () => <Icon {...icons.SunsetIcon} />;
