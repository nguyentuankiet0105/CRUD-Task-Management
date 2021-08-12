import { Button } from 'antd';

const ButtonForm = (props) => {
  return (
    <>
      {props.showTextBtn ? (
        <Button type="primary" onClick={props.handelAdd}>Create New Task</Button>
      ) : (
        <Button type="primary" danger onClick={props.handelAdd}>Close Form</Button>
      )}
   </>
  );
};
export default ButtonForm;
