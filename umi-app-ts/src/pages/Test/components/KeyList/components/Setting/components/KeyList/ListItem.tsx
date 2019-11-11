import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { Tooltip, Icon, Switch } from 'antd';
import { IObject } from '@/models/connect.d';

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

  const hoverBgColor = {
    backgroundColor: props.isOver ? '#DEF4FC' : '#fff',
  };

  const style =
    length === 1
      ? {
          paddingLeft: '9px',
        }
      : { cursor: 'move', paddingLeft: '9px', ...hoverBgColor };

  const SwitchTooltipProps = length === 1 ? {} : { visible: false };

  const ItemTooltipProps = props.isOver || length === 1 ? { visible: false } : {};

  const Item: React.ReactElement = (
    <div>
      <Tooltip title="拖拽字段名支持排序" {...ItemTooltipProps}>
        <div className={styles.optionWrap} style={style}>
          <span style={{ width: '70%' }}>
            <Icon type="more" style={{ marginRight: '4px' }} />
            {item.name}
          </span>
          <Tooltip title="显示字段至少一个" {...SwitchTooltipProps}>
            <Switch
              checkedChildren="开"
              unCheckedChildren="关"
              checked={item.visible}
              onChange={(checked, eve) => showChange(item, checked, eve)}
            />
          </Tooltip>
        </div>
      </Tooltip>
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
