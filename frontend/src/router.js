import {Dashboard} from "./components/dashboard";
import {Login} from "./components/auth/login";
import {SignUp} from "./components/auth/sign-up";
import {Income} from "./components/income/income";
import {CreateIncome} from "./components/income/create-income";
import {EditIncome} from "./components/income/edit-income";
import {Expenses} from "./components/expenses/expenses";
import {CreateExpenses} from "./components/expenses/create-expenses";
import {EditExpenses} from "./components/expenses/edit-expenses";
import {IncomeExpenses} from "./components/income-expenses/income-expenses";
import {CreateIncomeExpenses} from "./components/income-expenses/create-income-expenses";
import {EditIncomeExpenses} from "./components/income-expenses/edit-income-expenses";


export class Router {
    constructor() {
        this.titlePageElement = document.getElementById('title-page');
        this.contentPageElement = document.getElementById('content');
        this.initEvents();

        this.routes = [
            {
                route: '/',
                title: 'Дашборд',
                filePathTemplate: '/templates/dashboard.html ',
                load: () => {
                    new Dashboard();
                },
            },
            {
                route: '/404',
                title: 'Страница не найдена',
                filePathTemplate: '/templates/404.html ',
            },
            {
                route: '/login',
                title: 'Логин',
                filePathTemplate: '/templates/pages/auth/login.html ',
                load: () => {
                    new Login();
                },
            },
            {
                route: '/sign-up',
                title: 'Регистрация',
                filePathTemplate: '/templates/pages/auth/sign-up.html ',
                load: () => {
                    new SignUp()
                },
            },
            {
                route: '/income',
                title: 'Доходы',
                filePathTemplate: '/templates/pages/income/income.html ',
                load: () => {
                    new Income()
                },
            },
            {
                route: '/create-income',
                // route: '/income/create-income', //правильный вариант роута
                title: 'Создать категорию доходов',
                filePathTemplate: '/templates/pages/income/create-income.html ',
                load: () => {
                    new CreateIncome()
                },
            },
            {
                route: '/edit-income',
                // route: '/income/edit-income',
                title: 'Редактирование категории доходов',
                filePathTemplate: '/templates/pages/income/edit-income.html ',
                load: () => {
                    new EditIncome()
                },
            },
            {
                route: '/expenses',
                title: 'Расходы',
                filePathTemplate: '/templates/pages/expenses/expenses.html ',
                load: () => {
                    new Expenses()
                },
            },
            {
                route: '/create-expenses',
                // route: '/income/create-expenses',
                title: 'Создать категорию расходов',
                filePathTemplate: '/templates/pages/expenses/create-expenses.html ',
                load: () => {
                    new CreateExpenses()
                },
            },
            {
                route: '/edit-expenses',
                // route: '/income/edit-expenses',
                title: 'Редактирование категории расходов',
                filePathTemplate: '/templates/pages/expenses/edit-expenses.html ',
                load: () => {
                    new EditExpenses()
                },
            },
            {
                route: '/income-expenses',
                // route: '/income-expenses/income-expenses',
                title: 'Доходы и Расходы',
                filePathTemplate: '/templates/pages/income-expenses/income-expenses.html ',
                load: () => {
                    new IncomeExpenses()
                },
            },
            {
                route: '/create-income-expenses',
                // route: '/income-expenses/create-income-expenses',
                title: 'Создание доходов и расходов',
                filePathTemplate: '/templates/pages/income-expenses/create-income-expenses.html ',
                load: () => {
                    new CreateIncomeExpenses()
                },
            },
            {
                route: '/edit-income-expenses',
                // route: '/income/edit-expenses',
                title: 'Редактирование доходов и расходов',
                filePathTemplate: '/templates/pages/income-expenses/edit-income-expenses.html ',
                load: () => {
                    new EditIncomeExpenses()
                },
            }

        ]
    }

    initEvents() {
        window.addEventListener('DOMContentLoaded', this.activateRoute.bind(this)); //ф-ция сработает  когда пользователь впервые вошел на стр
        window.addEventListener('popstate', this.activateRoute.bind(this)); //когда пользователь уже на стр и переходит по страницам нашего веб-прил

    }

    async activateRoute() {
        const urlRoute = window.location.pathname;
        const newRoute = this.routes.find(item => item.route === urlRoute);

        if (newRoute.title) {
            this.titlePageElement.innerText = newRoute.title + ' | LuminCoin Finance';
        }


        if (newRoute.filePathTemplate) {
            this.contentPageElement.innerHTML = await fetch(newRoute.filePathTemplate).then(response => response.text());


        }

        if (newRoute.load && typeof newRoute.load === 'function') {
            newRoute.load();
        }


        if (newRoute) {

        } else {
            console.log('нет стр')
            window.location = '/404';

        }
    }

}