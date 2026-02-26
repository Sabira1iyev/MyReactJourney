const MyComponent = (props) => {


  const { children, bgColor, height, marginTop } = props;
  return (
    <div style={{
      background: bgColor,
      height: height + 'px',
      marginTop: marginTop,
    }}>
      <div>this is my component</div>
      <div>{children}</div>
    </div>
  );
};

export default MyComponent