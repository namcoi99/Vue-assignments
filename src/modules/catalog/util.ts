import { ElNotification } from 'element-plus';
import { INotifyType } from './types';

export const notify = (title: string, message: string, type: INotifyType) => {
    ElNotification({
        title: title,
        message: message,
        type: type,
        offset: 100,
    });
};
