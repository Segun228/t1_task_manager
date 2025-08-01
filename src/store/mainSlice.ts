import { createSlice } from "@reduxjs/toolkit";


const mainSlice = createSlice({
    name: 'main',
    initialState: {
        tasks: [
                    {
                        "id": 1,
                        "title": "Фикс бага с логином",
                        "description": "Ошибка при вводе неверного пароля не отображается",
                        "category": "Bug",
                        "status": "To Do",
                        "priority": "High"
                    },
                    {
                        "id": 2,
                        "title": "Добавить страницу профиля",
                        "description": "Нужна базовая информация и аватар",
                        "category": "Feature",
                        "status": "In Progress",
                        "priority": "Medium"
                    },
                    {
                        "id": 3,
                        "title": "Обновить README.md",
                        "description": "Добавить инструкцию запуска и развёртывания",
                        "category": "Documentation",
                        "status": "Done",
                        "priority": "Low"
                    },
                    {
                        "id": 4,
                        "title": "Рефакторинг компонента Header",
                        "category": "Refactor",
                        "status": "To Do",
                        "priority": "Medium"
                    },
                    {
                        "id": 5,
                        "title": "Написать тесты для авторизации",
                        "description": "Проверка ввода, редиректа и состояния",
                        "category": "Test",
                        "status": "In Progress",
                        "priority": "High"
                    },
                    {
                        "id": 6,
                        "title": "Баг с прокруткой в Safari",
                        "category": "Bug",
                        "status": "To Do",
                        "priority": "Medium"
                    },
                    {
                        "id": 7,
                        "title": "Добавить кнопку выхода",
                        "category": "Feature",
                        "status": "Done",
                        "priority": "Low"
                    },
                    {
                        "id": 8,
                        "title": "Документация по API",
                        "description": "Методы авторизации и получение задач",
                        "category": "Documentation",
                        "status": "To Do",
                        "priority": "High"
                    },
                    {
                        "id": 9,
                        "title": "Переименование переменных в TaskCard",
                        "category": "Refactor",
                        "status": "In Progress",
                        "priority": "Low"
                    },
                    {
                        "id": 10,
                        "title": "Тест: отрисовка компонента TaskList",
                        "category": "Test",
                        "status": "To Do",
                        "priority": "Medium"
                    },
                    {
                        "id": 11,
                        "title": "Баг при смене темы",
                        "description": "Не применяется тема при обновлении страницы",
                        "category": "Bug",
                        "status": "To Do",
                        "priority": "High"
                    },
                    {
                        "id": 12,
                        "title": "Feature: Добавить фильтрацию по статусу",
                        "category": "Feature",
                        "status": "To Do",
                        "priority": "Medium"
                    },
                    {
                        "id": 13,
                        "title": "Создать структуру документации",
                        "category": "Documentation",
                        "status": "In Progress",
                        "priority": "Medium"
                    },
                    {
                        "id": 14,
                        "title": "Упрощение логики редьюсера",
                        "category": "Refactor",
                        "status": "Done",
                        "priority": "Low"
                    },
                    {
                        "id": 15,
                        "title": "Проверка формы регистрации",
                        "description": "Позитивные и негативные сценарии",
                        "category": "Test",
                        "status": "Done",
                        "priority": "High"
                    },
                    {
                        "id": 16,
                        "title": "Баг: неправильное время в таймстемпе",
                        "category": "Bug",
                        "status": "In Progress",
                        "priority": "High"
                    },
                    {
                        "id": 17,
                        "title": "Добавить возможность редактирования задач",
                        "category": "Feature",
                        "status": "To Do",
                        "priority": "High"
                    },
                    {
                        "id": 18,
                        "title": "Описание архитектуры проекта",
                        "category": "Documentation",
                        "status": "Done",
                        "priority": "Medium"
                    },
                    {
                        "id": 19,
                        "title": "Рефакторинг useTasks hook",
                        "category": "Refactor",
                        "status": "To Do",
                        "priority": "Medium"
                    },
                    {
                        "id": 20,
                        "title": "Юнит-тесты: фильтрация по категории",
                        "category": "Test",
                        "status": "In Progress",
                        "priority": "Medium"
                    }
                ]
    },
    reducers:{
        addTask(state, action) {
            state.tasks.push(action.payload);
        },

        editTask(state, action) {
            const newTask = action.payload;
            state.tasks = state.tasks.map(task =>
                task.id === newTask?.id ? newTask : task
            );
        },

        deleteTask(state, action) {
            const taskID = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== taskID);
        },


        setTasks(state, action){
            state.tasks = action?.payload
        },
    }
}
)

export const { 
    setTasks,
    editTask,
    deleteTask,
    addTask,
} = mainSlice.actions;

export const mainReducer = mainSlice.reducer;