// import { IconsByType } from 'src/components/Icon/Icon';

const orderedIcons = Object.keys({})
  .sort()
  .reduce((acc, key) => ({ ...acc, [key]: key }), {});

export const iconControl = {
  options: { null: "", ...orderedIcons },
  control: { type: "select" },
};

export const keysIcons = Object.keys({}).join(" | ");
