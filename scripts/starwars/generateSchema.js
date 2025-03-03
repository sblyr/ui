const models = [
    {
        id: 'film',
        plural: 'Films',
        primaryField: 'title',
        fields: [
            {
                id: 'title',
                type: 'text'
            },
            {
                id: 'episode_id',
                type: 'text'
            },
            {
                id: 'opening_crawl',
                type: 'text'
            },
            {
                id: 'director',
                type: 'text'
            },
            {
                id: 'producer',
                type: 'text'
            },
            {
                id: 'release_date',
                type: 'date'
            },
            {
                id: 'characters',
                type: 'text'
            },
            {
                id: 'planets',
                type: 'text'
            },
            {
                id: 'starships',
                type: 'text'
            },
            {
                id: 'vehicles',
                type: 'text'
            },
            {
                id: 'species',
                type: 'text'
            },
            {
                id: 'created',
                type: 'date',
                settings: {
                    includeTime: true
                }
            },
            {
                id: 'edited',
                type: 'date',
                settings: {
                    includeTime: true
                }
            },
            {
                id: 'url',
                type: 'text'
            },
            {
                id: 'id',
                type: 'id'
            },
        ]
    },
    {
        id: 'planet',
        plural: 'Planets',
        primaryField: 'name',
        fields: [
            {
                id: 'name',
                type: 'text'
            },
            {
                id: 'rotation_period',
                type: 'text'
            },
            {
                id: 'orbital_period',
                type: 'text'
            },
            {
                id: 'diameter',
                type: 'text'
            },
            {
                id: 'climate',
                type: 'text'
            },
            {
                id: 'gravity',
                type: 'text'
            },
            {
                id: 'terrain',
                type: 'text'
            },
            {
                id: 'surface_water',
                type: 'text'
            },
            {
                id: 'population',
                type: 'text'
            },
            {
                id: 'residents',
                type: 'relationship',
                settings: {
                    type: 'hasMany',
                    foreignModel: 'people'
                }
            },
            {
                id: 'films',
                type: 'relationship',
                settings: {
                    type: 'hasMany',
                    foreignModel: 'film'
                }
            },
            {
                id: 'created',
                type: 'text'
            },
            {
                id: 'edited',
                type: 'text'
            },
            {
                id: 'url',
                type: 'text'
            },
            {
                id: 'id',
                type: 'id'
            },
        ]
    },
    {
        id: 'people',
        plural: 'People',
        primaryField: 'name',
        fields: [
            {
                id: 'name',
                type: 'text'
            },
            {
                id: 'height',
                type: 'number'
            },
            {
                id: 'mass',
                type: 'text'
            },
            {
                id: 'hair_color',
                type: 'text'
            },
            {
                id: 'skin_color',
                type: 'text'
            },
            {
                id: 'eye_color',
                type: 'singleSelect',
                settings: {
                    options: [
                        { id: 'orange', name: 'Orange', backgroundColor: 'rgba(255, 170, 0, 0.2)', color: 'rgb(255, 170, 0)' },
                        { id: 'blue', name: 'Blue', backgroundColor: 'rgba(0, 119, 255, 0.2)', color: 'rgb(0, 119, 255)' },
                        { id: 'red', name: 'Red', backgroundColor: 'rgba(255, 85, 153, 0.2)', color: 'rgb(255, 85, 153)' },
                    ]
                }
            },
            {
                id: 'birth_year',
                type: 'text'
            },
            {
                id: 'gender',
                type: 'singleSelect',
                settings: {
                    expanded: true,
                    options: [
                        { id: 'hermaphrodite', backgroundColor: 'rgba(255, 170, 0, 0.2)', color: 'rgb(255, 170, 0)' },
                        { id: 'male', backgroundColor: 'rgba(0, 119, 255, 0.2)', color: 'rgb(0, 119, 255)' },
                        { id: 'female', backgroundColor: 'rgba(255, 85, 153, 0.2)', color: 'rgb(255, 85, 153)' },
                    ]
                }
            },
            {
                id: 'homeworld',
                type: 'relationship',
                settings: {
                    type: 'hasOne',
                    foreignModel: 'planet'
                }
            },
            {
                id: 'films',
                type: 'relationship',
                settings: {
                    type: 'hasMany',
                    foreignModel: 'film'
                }
            },
            {
                id: 'species',
                type: 'text'
            },
            {
                id: 'vehicles',
                type: 'text'
            },
            {
                id: 'starships',
                type: 'text'
            },
            {
                id: 'created',
                type: 'date',
                settings: {
                    includeTime: true
                }
            },
            {
                id: 'edited',
                type: 'date',
                settings: {
                    includeTime: true
                }
            },
            {
                id: 'id',
                type: 'id'
            },
        ]
    }
]

const fs = require('fs')
const writeFile = (path, data) => new Promise((resolve, reject) => {

    fs.writeFile(path, data, (err) => {
        if (err) {
            reject(err)
            return
        }
        resolve()
    })
})

async function main() {

    let state = {
        model: [],
        modelDatas: {}
    }

    models.forEach(model => {

        state.model.push(model.id)
        state.modelDatas[model.id] = model
    })

    await writeFile(__dirname + '/../../demo/src/assets/starwars/schema.json', JSON.stringify(state, null, 2))
}

main()