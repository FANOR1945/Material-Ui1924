import useReactRouter from 'use-react-router';
const useClicked = () => {
  const { history } = useReactRouter();

  const onClicked = (path) => {
    history.push(path);
  };
  return [onClicked];
};

export default useClicked;
