export const SELECTED_MENU = 'SELECTED_MENU';
export const SELECTED_LANGUAGE = 'SELECTED_LANGUAGE';

 
export const selectedMenuHandler = (selectedId: number) => {
  return { type: SELECTED_MENU, selectedId: selectedId };
};