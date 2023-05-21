//Función que retorne un tiempo random que mantendrá asomado al topo

export const randomTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};
