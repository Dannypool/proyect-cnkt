const LIST_USERS_FAKE = {
    page: 2,
    per_page: 3,
    total: 12,
    total_pages: 4,
    data: [
        {
            id: 4,
            first_name: 'Eve',
            last_name: 'Holt',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'
        },
        {
            id: 5,
            first_name: 'Charles',
            last_name: 'Morris',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg'
        },
        {
            id: 6,
            first_name: 'Tracey',
            last_name: 'Ramos',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg'
        }
    ]
};

const USER_FAKE = {
    data: {
        id: 2,
        first_name: 'Janet',
        last_name: 'Weaver',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
    }
};

const USER_UPDATE_DATA = {
    name: 'morpheus',
    job: 'leader',
    createdAt: '2018-11-28T09:25:48.516Z'
};

const NEW_USER_FAKE = {
    id: 107,
    name: 'morpheus',
    job: 'leader',
    createdAt: '2018-11-28T09:25:48.516Z'
};

export const DATA_USERS_FAKE = {
    'users': LIST_USERS_FAKE,
    'user': USER_FAKE,
    'new_user': NEW_USER_FAKE,
    'update_user': USER_UPDATE_DATA
};

