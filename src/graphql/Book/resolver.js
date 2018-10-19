const Books = [
    {
        title: 'Harry Potter',
        author: 'J.K Rowling'
    },
    {
        title: 'LOTR',
        author: 'J.R Tolkins'
    }
];

exports.resolver = {
    Query: {
        getBook:(root, params, context)=>{

            const {title} = params;

            return Books.filter(item => item.title === title);

        },

        getAllBooks:(root, params, context) => {

            return Books;

        }
    },

    Mutation:{
        addBook:(root, params, context) => {

            const {title, author} = params.input;

            const bookObj = {
                title,
                author
            };

            Books.push(bookObj);

            return Books.filter(item => item.title === title)[0];

        }
    }
};