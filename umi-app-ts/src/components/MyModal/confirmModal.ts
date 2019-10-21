// import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';

const confirmModal = (params: any) =>
    Modal.confirm({
        title: '删除确认',
        content: '确认删除该数据吗？',
        maskClosable: true,
        mask: false,
        cancelText: '取消',
        okText: '确认',
        ...params
    });

export default confirmModal;
