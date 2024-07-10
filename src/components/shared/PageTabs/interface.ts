export type ITabNames = {
  tabsHeadsNames: string[];
  currentTabFromProps?: string;
  setCurrentTabName: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
  className?: string;
};
