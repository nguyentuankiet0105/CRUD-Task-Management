import * as React from 'react';
import { Button, Input, Form, DatePicker, Radio } from 'antd';
import { Route, Switch } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../components/TodoItem';
import '../Style/Body.css';

const LIST_TASK = 'listTask';

const Body = () => {
  const listTaskRedux = useSelector((state) => {
    return state.task.listTask;
  });

  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const [formValue, setFormValue] = React.useState({
    title: '',
    creator: '',
    description: '',
    status: 1,
    deadline: new Date(),
  });
  const [listTask, setListTask] = React.useState([]);
  const [indexEditing, setIndexEditing] = React.useState(null);

  React.useEffect(() => {
    const list = localStorage.getItem(LIST_TASK);
    if (list) {
      setListTask(JSON.parse(list));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem(LIST_TASK, JSON.stringify(listTask));
  }, [listTask]);

  const handleOnChange = (e) => {
    if (e.target) {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
    } else {
      setFormValue({ ...formValue, deadline: e });
    }
  };
  const addTask = () => {
    return setListTask(
      [
        ...listTask,
        {
          title: formValue.title,
          creator: formValue.creator,
          description: formValue.description,
          deadline: formValue.deadline,
          status: getStatus(formValue.status),
        },
      ],
      setFormValue({ ...formValue, title: '', creator: '', description: '' }),
      alert('you have added the task successfully!!!')
    );
  };

  const handleSaveTask = () => {
    if (listTask.trim()) {
      const list = [
        ...listTask,
        {
          title: formValue.title,
          creator: formValue.creator,
          description: formValue.description,
          deadline: formValue.deadline,
          status: formValue.status,
        },
      ];
      localStorage.setItem(LIST_TASK, JSON.stringify(list));
      setListTask(list);
      setFormValue('');
    } else {
      setIndexEditing(null);
    }
  };

  const handleEditStatus = (index) => {
    const list = listTask;
    list.splice(index, 1, {
      ...list[index],
      status: list[index].status === 'new' ? 'inprogress' : 'done',
    });
    localStorage.setItem(LIST_TASK, JSON.stringify(list));
    setListTask([...list]);
  };

  const renderByStatus = (status) => {
    if (listTask.length) {
      return listTask.map((item, index) => {
        if (item.status !== status) return null;
        return (
          <TodoItem
            key={index}
            {...item}
            handleEditStatus={() => handleEditStatus(index)}
            handleDelete={() => {
              const isDelete = window.confirm('Bạn có muốn xóa task này không ?');
              if (isDelete) {
                const list = listTask;
                list.splice(index, 1);
                localStorage.setItem(LIST_TASK, JSON.stringify(list));
                setListTask([...list]);
              }
            }}
          />
        );
      });
    } else {
      return <h1 id="notask">No Task In Here</h1>;
    }
  };
  const getStatus = (stt) => {
    switch (stt) {
      case 2:
        return "INPROGRESS";
      case 3:
        return "DONE";
      default:
        return "NEW";
    }
  };
  const onChange = (e) => {
    setFormValue({...formValue, status: e.target.value});
  }
  const renderAllTask = () => {
    if (listTask.length) {
      return listTask.map((item, index) => {
        return (
          <TodoItem
            key={index}
            {...item}
            handleEditStatus={() => handleEditStatus(index)}
            handleDelete={() => {
              const isDelete = window.confirm('Bạn có muốn xóa task này không ?');
              if (isDelete) {
                const list = listTask;
                list.splice(index, 1);
                localStorage.setItem(LIST_TASK, JSON.stringify(list));
                setListTask([...list]);
              }
            }}
          />
        );
      });
    } else {
      return <h1 id="notask">No Task In Here</h1>;
    }
  };
  const reset = () => {
    const isDelete = window.confirm('Bạn có muốn xóa tất cả task không ?');
    if (isDelete) {
      setListTask([]);
      alert('Bạn đã xóa thành công !');
    }
  };
  const renderAddForm = () => {
    return (
      <Form layout={'vertical'} form={form} onValuesChange={(e) => console.log(e)}>
        <Form.Item label="Title">
          <Input
            name="title"
            id="input"
            placeholder={
              indexEditing ? listTask[indexEditing].title : 'Add title new tasks in here'
            }
            onChange={(e) => handleOnChange(e)}
            value={formValue.title}
          />
        </Form.Item>
        <Form.Item label="Creator">
          <Input
            name="creator"
            id="input"
            placeholder={indexEditing ? listTask[indexEditing].creator : 'Add creator name in here'}
            onChange={(e) => handleOnChange(e)}
            value={formValue.creator}
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input
            name="description"
            id="input"
            placeholder={
              indexEditing ? listTask[indexEditing].title : '(Option) Add description tasks in here'
            }
            onChange={(e) => handleOnChange(e)}
            value={formValue.description}
          />
        </Form.Item>
        <Form.Item label="Deadline">
          <DatePicker
            value={moment(formValue.deadline, 'DD/MM/YYYY')}
            format={'DD/MM/YYYY'}
            onChange={(date) => handleOnChange(date)}
            disabledDate={(current) => current && current < moment().endOf('day')}
          />
        </Form.Item>
        <Form.Item>
          <Radio.Group onChange={onChange} value={formValue.status}>
            <Radio value={1}>NEW</Radio>
            <Radio value={2}>INPROGRESS</Radio>
            <Radio value={3}>DONE</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          {indexEditing ? (
            <>
              <Button type="ghost" onClick={handleSaveTask}>
                Save
              </Button>
              <Button type="dashed" onClick={() => setIndexEditing(null)}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button
                type="primary"
                disabled={(!formValue.title, !formValue.creator)}
                icon={<DownloadOutlined />}
                onClick={addTask}
              >
                Add New Task
              </Button>
              <Button type="primary" onClick={reset}>
                Reset
              </Button>
            </>
          )}
        </Form.Item>
        <p>* you must fill in Title Input and Creator Input.</p>
      </Form>
    );
  };

  return (
    <div id="content">
      <Switch>
        <Route exact path="/inprogress">
          {renderByStatus('inprogress')}
        </Route>
        <Route exact path="/done">
          {renderByStatus('done')}
        </Route>
        <Route exact path="/all">
          {renderAllTask()}
        </Route>
        <Route exact path="/home">
          {renderAddForm()}
        </Route>
        <Route path="/">{renderByStatus('new')}</Route>
      </Switch>
    </div>
  );
};
export default Body;
