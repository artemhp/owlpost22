const students = {
  list: [
    {
      id: '5313',
      house: 'hufflepuff',
      name: 'Hannah Abbott',
      distance: '2340 meters',
    },
    {
      id: '5242',
      house: 'hufflepuff',
      name: 'Susan Bones',
      distance: '530 meters',
    },
    {
      id: '52342',
      house: 'hufflepuff',
      name: 'Megan Jones',
      distance: '5050 meters',
    },
    {
      id: '2521',
      house: 'hufflepuff',
      name: 'Wayne Hopkins',
      distance: '2400 meters',
    },
    {
      id: '26432',
      house: 'hufflepuff',
      name: 'Ernie Macmillan',
      distance: '8040 meters',
    },
    {
      id: '65433',
      house: 'hufflepuff',
      name: 'Zacharias Smith',
      distance: '5420 meters',
    },
    {
      id: '53432',
      house: 'hufflepuff',
      name: 'Leanne',
      distance: '4000 meters',
    },
    {
      id: '25343',
      house: 'hufflepuff',
      name: 'Eleanor Branstone',
      distance: '1500 meters',
    },
    {
      id: '43532',
      house: 'gryffindor',
      name: 'Hermione Granger',
      distance: '8010 meters',
    },
    {
      id: '223523',
      house: 'gryffindor',
      name: 'Harry Potter',
      distance: '700 meters',
    },
    {
      id: '23523215',
      house: 'gryffindor',
      name: 'Dean Thomas',
      distance: '1850 meters',
    },
    {
      id: '2352523',
      house: 'gryffindor',
      name: 'Ron Weasley',
      distance: '8010 meters',
    },
    {
      id: '2233523',
      house: 'gryffindor',
      name: 'Lavender Brown',
      distance: '4200 meters',
    },
    {
      id: '26323',
      house: 'gryffindor',
      name: 'Fay Dunbar',
      distance: '5100 meters',
    },
    {
      id: '23123523',
      house: 'gryffindor',
      name: 'Seamus Finnigan',
      distance: '1400 meters',
    },
    {
      id: '2343523',
      house: 'gryffindor',
      name: 'Neville Longbottom',
      distance: '650 meters',
    },
    {
      id: '3253',
      house: 'slytherin',
      name: 'Draco Malfoy',
      distance: '5450 meters',
    },
    {
      id: '4534',
      house: 'slytherin',
      name: 'Vincent Crabbe',
      distance: '6550 meters',
    },
    {
      id: '5232',
      house: 'slytherin',
      name: 'Gregory Goyle',
      distance: '4150 meters',
    },
    {
      id: '3242',
      house: 'slytherin',
      name: 'Millicent Bulstrode',
      distance: '505 meters',
    },
    {
      id: '5342',
      house: 'slytherin',
      name: 'Pansy Parkinson',
      distance: '1350 meters',
    },
    {
      id: '56778',
      house: 'slytherin',
      name: 'Blaise Zabini',
      distance: '4450 meters',
    },
    {
      id: '6452',
      house: 'slytherin',
      name: 'Daphne Greengrass',
      distance: '1250 meters',
    },
    {
      id: '23523',
      house: 'slytherin',
      name: 'Theodore Nott',
      distance: '850 meters',
    },
  ],
};

const handler = async (event, context) => {
  const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '');
  console.log(path);
  debugger;
  if (path.includes('students')) {
    if (event.httpMethod === 'GET') {
      if (event.queryStringParameters) {
        const payload = event.queryStringParameters;
        if (payload?.house) {
          const filteredList = students.list.filter(({ house }) => house === payload?.house);
          return {
            statusCode: 200,
            body: JSON.stringify(filteredList),
          };
        }
      }
      return {
        statusCode: 200,
        body: JSON.stringify(students.list),
      };
    }
    if (event.httpMethod === 'POST') {
      return {
        statusCode: 200,
        body: JSON.stringify(students),
      };
    }
  }

  // console.log(context);
};

export { handler };
