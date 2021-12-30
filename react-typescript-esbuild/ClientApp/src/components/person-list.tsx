import * as React from 'react'
import ReactDOM from "react-dom";
import './person-list.css'

import HiddenInput from 'hidden-input';
import Person from 'models/person';

const PersonList = ({ ...props }) => {
    const [people, setPeople] = React.useState<Person[]>([]);

    const onNameChange = (person: Person) => (event: React.ChangeEvent<HTMLInputElement>) => {
        var newPeople: Person[] = people.map(item => {
            let copy = new Person(item.Id, item.Name);
            if (item === person) {
                const { value: text } = event.target;
                copy.Name = text;
            }
            return copy;
        });
        setPeople(newPeople);
    };

    const addPerson = () => {
        setPeople([...people, new Person(-1, '')]);
    };

    React.useEffect(() => {
        const { initialData } = props;
        if (initialData && initialData.length > 0) {
            setPeople(initialData.map((item: any) => {
                // Initialization through constructor does not work here
                var nw = new Person(item.Id, item.Name);
                nw.Name = item.Name;
                nw.Id = item.Id;
                return nw
            }));
        }
    }, [props.initialData]);


    return (<>
        <b>Tell me your top 3 friends</b><br />
        {people.map((person, index) =>
        (<div>
            <input
                type="text"
                className="text-input"
                aria-label="Filter projects"
                onChange={onNameChange(person)}
                placeholder={`Type here your ${index + 1}. friend's name`}
                value={person.Name}
            />
        </div>)
        )}
        <button
            className="btn mt-2"
            onClick={addPerson}
        >Add one more friend</button>

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

(window as any).PersonList = (props: any) => ReactDOM.render(<PersonList {...props} />, document.getElementById("react-person-list"))

export default PersonList;
