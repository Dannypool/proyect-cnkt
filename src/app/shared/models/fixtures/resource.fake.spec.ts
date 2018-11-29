const LIST_RESOURCES_FAKE = {
    page: 1,
    per_page: 3,
    total: 12,
    total_pages: 4,
    data: [
        {
            id: 1,
            name: 'cerulean',
            year: 2000,
            color: '#98B2D1',
            pantone_value: '15-4020'
        },
        {
            id: 2,
            name: 'fuchsia rose',
            year: 2001,
            color: '#C74375',
            pantone_value: '17-2031'
        },
        {
            id: 3,
            name: 'true red',
            year: 2002,
            color: '#BF1932',
            pantone_value: '19-1664'
        }
    ]
};

const RESOURCE_FAKE = {
    data: {
        id: 2,
        name: 'fuchsia rose',
        year: 2001,
        color: '#C74375',
        pantone_value: '17-2031'
    }
};

const RESOURCE_UPDATE_DATA = {
    data: {
        id: 2,
        name: 'fuchsia rose',
        year: 2001,
        color: '#C74375',
        pantone_value: '17-2031'
    }
};

const NEW_RESOURCE_FAKE = {
    data: {
        id: 2,
        name: 'fuchsia rose',
        year: 2001,
        color: '#C74375',
        pantone_value: '17-2031'
    }
};

export const DATA_RESOURCES_FAKE = {
    'resources': LIST_RESOURCES_FAKE,
    'resource': RESOURCE_FAKE,
    'new_resource': NEW_RESOURCE_FAKE,
    'update_resource': RESOURCE_UPDATE_DATA
};

