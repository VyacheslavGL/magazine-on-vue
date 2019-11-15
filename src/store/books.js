import Vue from 'vue'

export default {
    state: {
        books: [],
        /*books:[
            {
                id: 'defjefjeki434t4t',
                title: 'Harry Potter - 1',
                description: 'Первая глава первой книги о Гарри Потторе',
                image: '/src/img/3.jpg',
                // parts: 7,
                level: ['B2', 'C1'],
                rating: 4,
                ratingsCount: 100,
                youtube_playlist_id: 'dcedsd67st43287',
                parts:[
                    {
                        id: '123',
                        title: 'Part 11',
                        youtube_id: 'part1_123'
                    },
                    {
                        id: '124',
                        title: 'Part 12',
                        youtube_id: 'part1_124'
                    },
                    {
                        id: '125',
                        title: 'Part 13',
                        youtube_id: 'part1_125'
                    },
                    {
                        id: '126',
                        title: 'Part 14',
                        youtube_id: 'part1_126'
                    },

                ]
            },
            {
                id: 'defj574i434t4t',
                title: 'Harry Potter - 2',
                description: 'Вторая глава первой книги о Гарри Потторе',
                image: 'img/4.jpg',
                // parts: 7,
                level: ['B1', 'B2'],
                rating: 3.5,
                ratingsCount: 55,
                youtube_playlist_id: 'dceddfb8df9843287',
                parts:[
                    {
                        id: '127',
                        title: 'Part 21',
                        youtube_id: 'part1_127'
                    },
                    {
                        id: '128',
                        title: 'Part 22',
                        youtube_id: 'part1_128'
                    },
                    {
                        id: '129',
                        title: 'Part 23',
                        youtube_id: 'part1_129'
                    },
                    {
                        id: '130',
                        title: 'Part 24',
                        youtube_id: 'part1_130'
                    },

                ]
            },
            {
                id: 'd54yh544i434t4t',
                title: 'Harry Potter - 3',
                description: 'Третья глава первой книги о Гарри Потторе',
                image: '5.jpg',
                // parts: 7,
                level: ['A2'],
                rating: 2,
                ratingsCount: 80,
                youtube_playlist_id: 'dcfgs7e6dg9843287',
                parts:[
                    {
                        id: '131',
                        title: 'Part 31',
                        youtube_id: 'part1_131'
                    },
                    {
                        id: '132',
                        title: 'Part 32',
                        youtube_id: 'part1_132'
                    },
                    {
                        id: '133',
                        title: 'Part 33',
                        youtube_id: 'part1_133'
                    },
                    {
                        id: '134',
                        title: 'Part 34',
                        youtube_id: 'part1_134'
                    },

                ]
            },
        ],*/
/*
        bookParts: [
            {
                bookId: 'defjefjeki434t4t',
                bookPartId: '123',
                bookTitle: 'Harry Potter - 1',
                partTitle: 'Part 11',
                youtube_id: 'u4DUmKFScvU',
                content: [
                    {
                        sentences: [
                            {
                                origText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                                transText: 'Добро пожаловать в WordPress, но видимой усталости и ожирения. Для получения более подробной информации, пожалуйста, свяжитесь с нами физические упражнения, за исключением получить некоторое преимущество от него.'
                            },
                            {
                                origText: 'Vuetify comes with a 12 point grid system built using flex-box. The grid is used to create specific layouts within an application\'s content. It contains 5 types of media breakpoints that are used for targeting specific screen sizes or orientations, xs, sm, md, lg and xl.',
                                transText: 'Vuetify поставляется с 12-точечной сеткой, построенной с использованием flex-box. Сетка используется для создания определенных макетов в содержимом приложения. Он содержит 5 типов точек останова мультимедиа, которые используются для ориентации на определенные размеры экрана или ориентации, xs, sm, md, lg и xl.'
                            },
                            {
                                origText: 'The Vuetify grid is heavily inspired by the Bootstrap grid. It is integrated by using a series of containers, rows, and columns to layout and align content. If you are new to flexbox, Read the CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.',
                                transText: 'Сетка Verify сильно вдохновлена сеткой Bootstrap. Он интегрируется с помощью ряда контейнеров, строк и столбцов для компоновки и выравнивания содержимого. Если вы новичок в flexbox, прочитайте руководство CSS Tricks flexbox для фона, терминологии, руководящих принципов и фрагментов кода.'
                            },
                        ],
                    },
                    {
                        sentences: [
                            {
                                origText: 'In the example above, we created three equal-width columns on small, medium, large and extra large devices.',
                                transText: 'В приведенном выше примере мы создали три столбца одинаковой ширины на малых, средних, больших и сверхбольших устройствах.'
                            },
                            {
                                origText: 'You can also use the fluid prop to fully extend the container across all viewport and device sizes.',
                                transText: 'Вы также можете использовать fluidprop для полного расширения контейнера во всех размерах видового экрана и устройства.'
                            },
                            {
                                origText: 'It utilizes flex properties to control the layout and flow of its inner columns. It uses a standard gutter of 24px.',
                                transText: 'Он использует свойства гибкого трубопровода для того чтобы контролировать план и подачу своих внутренних столбцов. Он использует стандартный желоб 24px.'
                            },
                        ],
                    }
                ],
                words: [
                    {
                        origWord: 'Hello',
                        transWord: 'Привет'
                    },
                    {
                        origWord: 'Hello1',
                        transWord: 'Привет1'
                    },
                    {
                        origWord: 'Hello2',
                        transWord: 'Привет2'
                    },
                    {
                        origWord: 'Hello3',
                        transWord: 'Привет3'
                    },
                    {
                        origWord: 'Hello4',
                        transWord: 'Привет4'
                    },
                    {
                        origWord: 'Hello5',
                        transWord: 'Привет5'
                    },
                    {
                        origWord: 'Hello6',
                        transWord: 'Привет6'
                    },
                    {
                        origWord: 'Hello7',
                        transWord: 'Привет7'
                    },
                    {
                        origWord: 'Hello',
                        transWord: 'Привет'
                    },
                    {
                        origWord: 'Hello1',
                        transWord: 'Привет1'
                    },
                    {
                        origWord: 'Hello2',
                        transWord: 'Привет2'
                    },
                    {
                        origWord: 'Hello3',
                        transWord: 'Привет3'
                    },
                    {
                        origWord: 'Hello4',
                        transWord: 'Привет4'
                    },
                    {
                        origWord: 'Hello5',
                        transWord: 'Привет5'
                    },
                    {
                        origWord: 'Hello6',
                        transWord: 'Привет6'
                    },
                    {
                        origWord: 'Hello7',
                        transWord: 'Привет7'
                    },
                    {
                        origWord: 'Hello6',
                        transWord: 'Привет6'
                    },
                    {
                        origWord: 'Hello7',
                        transWord: 'Привет7'
                    }
                ]
            }

        ]*/
    },
    mutations: {
        SET_BOOKS(state, payload) {
            state.books = payload
        },

    },
    actions: {
        LOAD_BOOKS({commit}) {
            Vue.$db.collection('books')
                .get()
                .then(querySnapshot => {
                    let books = [];
                    querySnapshot.forEach(s => {
                        const data = s.data();
                        let book = {
                            id: s.id,
                            title: data.title,
                            description: data.description,
                            imageUrl: data.imageUrl,
                            level: data.level.slice(),
                            youtube_playlist_id: data.youtube_playlist_id,
                        };

// Формируем раздел частей видео 7
                        let parts = [];
                        if (data.parts){
                            data.parts.forEach(p => {
                                let part = {
                                    id: p.id,
                                    title: p.title,
                                    youtube_id: p.youtube_id
                                };
                                parts.push(part)
                            });
                        }

                        book.parts = parts;

                        books.push(book)
                    });
/////

                    commit('SET_BOOKS', books)

                })
                .catch(error => console.log(error))
        }
    },
    getters: {
        getBooks: (state) => state.books,
        // getParts: (state) => state.bookParts
    }
}