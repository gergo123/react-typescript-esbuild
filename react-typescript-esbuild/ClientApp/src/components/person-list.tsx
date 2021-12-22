import * as React from 'react'
import './person-list.css'

import HiddenInput from 'hidden-input';
import Person from 'models/person';

const PersonList = ({ ...props }) => {
    const [people, setPeople] = React.useState<Person[]>([]);

    const onNameChange = (person: Person) => (event: React.ChangeEvent<HTMLInputElement>) => {
        var newPeople: Person[] = people.map(item => new Person(item.Id, item.Name));
        var prev = newPeople.find(x => x === person);
        if (prev) {
            prev.Name = event.target.value;
        }
    };

    const addPerson = () => {
        setPeople([...people, new Person(-1, '')]);
    };

    React.useEffect(() => {
        const { initialData } = props;
        if (initialData && initialData.length > 0) {
            setPeople(initialData.map((item: Person) => new Person(item.Id, item.Name)));
        }
    }, [props.initialData]);


    return (<>
        <b>Tell me your top 3 friends</b><br />
        {people.map((person, index) =>
        (<div>
            <input onChange={onNameChange(person)} className="text-input" type="text" aria-label="Filter projects" placeholder={`Type here your ${index + 1}. friend's name`} />
        </div>)
        )}
        <button className="btn mt-2" onClick={addPerson}>Add one more friend</button>

        <form method="POST">
            <HiddenInput
                isArray={true}
                name={'people'}
                formData={people}
            />

            <button className="btn w-full p-4 mt-4 shadow-md">
                <span className="m-auto">Submit</span>
            </button>
        </form>
    </>);
}

export default PersonList;
