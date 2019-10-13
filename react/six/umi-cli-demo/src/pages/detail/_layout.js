export default props => {
  return (
    <div>
      <h1>我是 detail 的包装</h1>
      {props.children}
    </div>
  );
};
