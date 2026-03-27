import React from 'react';

interface NavBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', icon: 'home', label: 'Bosh sahifa' },
    { id: 'story', icon: 'history_edu', label: 'Hikoyamiz' },
    { id: 'details', icon: 'event', label: 'Tafsilotlar' },
    { id: 'rsvp', icon: 'how_to_reg', label: 'RSVP' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-stitch-surface/80 backdrop-blur-md border-t border-stitch-outline-variant/20 px-4 py-2 flex justify-around items-center">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === tab.id ? 'text-stitch-primary' : 'text-stitch-on-surface-variant/60'
          }`}
        >
          <span className="material-symbols-outlined text-[24px]">{tab.icon}</span>
          <span className="text-[10px] font-medium uppercase tracking-wider">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};
