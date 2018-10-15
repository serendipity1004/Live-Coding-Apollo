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

        }
    }
};