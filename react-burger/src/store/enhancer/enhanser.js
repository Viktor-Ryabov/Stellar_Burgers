import { applyMiddleware} from 'redux';

const actionLoger = store => next => action => {
    console.log(`${new Date().getTime()} | Action: ha-ha` );
    // Передаём событие «по конвейеру» дальше
  return next(action);
};

// Расширитель хранилища принимает в качестве аргумента усилитель
export const enhancer = applyMiddleware(actionLoger);