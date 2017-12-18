interface IpadZeo {
  (n: number): string | number;
}

const padZero: IpadZeo = function (n: number) {
  return n < 10 ? `0${n}` : n;
};

export default padZero;