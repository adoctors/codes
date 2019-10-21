import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { Tooltip, Icon, Switch } from 'antd';
import { IObject } from '@/models/common.d';

const sourceSpec = {
  beginDrag(props: IObject) {
    return {
      key: props.item.key,
      index: props.index,
    };
  },
};

const targetSpec = {
  drop(props: IObject, monitor: IObject) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    if (dragIndex === hoverIndex) return;

    props.itemMove(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  },
};

const Items = (props: IObject) => {
  const { connectDragSource, connectDropTarget, styles, item, length, showChange } = props;
  const style = length === 1 ? {} : { cursor: 'move' };

  const Item: React.ReactElement = (
    <div className={styles.optionWrap} style={style}>
      <span style={{ width: '50%' }}>{item.name}</span>
      {length === 1 ? (
        <Tooltip title="显示字段至少一个">
          <Switch
            checkedChildren="开"
            unCheckedChildren="关"
            checked={item.visible}
            onChange={(checked, eve) => showChange(item, checked, eve)}
          />
        </Tooltip>
      ) : (
        <Switch
          checkedChildren="开"
          unCheckedChildren="关"
          checked={item.visible}
          onChange={(checked, eve) => showChange(item, checked, eve)}
        />
      )}

      <Icon type="more" />
    </div>
  );

  return connectDragSource(connectDropTarget(Item));
};

const ListItem = DropTarget('keyListItem', targetSpec, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
}))(
  DragSource('keyListItem', sourceSpec, connect => ({
    connectDragSource: connect.dragSource(),
  }))(Items),
);

export default ListItem;
