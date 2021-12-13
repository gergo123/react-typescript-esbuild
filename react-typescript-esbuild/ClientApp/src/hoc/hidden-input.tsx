import { IPeoplePickerProps } from 'components/people-picker';
import { observer } from 'mobx-react-lite';
import * as React from 'react'
import store from 'stores/people-store';
import _ from 'underscore'

const HiddenInputRecursive = observer(({ pairs, namePrefix, isArray, ...props }: any) => {

    return <>
        {pairs.map((pair: any) => {
            if (_.isArray(pair[1])) {
                return <HiddenInputRecursive
                    isArray={true}
                    namePrefix={`${namePrefix ? namePrefix + '.' : ''}${pair[0]}`}
                    pairs={_.pairs(pair[1])}
                />
            } else if (_.isObject(pair[1])) {
                return <HiddenInputRecursive
                    namePrefix={`${namePrefix ? namePrefix + '' : ''}${isArray ? '[' : ''}${pair[0]}${isArray ? ']' : ''}.`}
                    pairs={_.pairs(pair[1])}
                />
            }

            if (pair[0].startsWith('_')) return null;
            return <>
                <input
                    type="hidden"
                    name={`${namePrefix ?? ''}${pair[0]}`}
                    value={pair[1]}
                />
            </>
        })}
    </>;
});

// name - If the given pairs parameter is an array, this sets the name of it
// isArray - Tells the component to threat the pairs parameter as an array
//  and use the name parameter to reference it in the output
export interface IHiddenInputComponentProps {
    isArray: boolean,
    name: string
}

const HiddenInput = <P extends object>(
    Component: React.ComponentType<P & IPeoplePickerProps>,
    store: any,
) => {

    return observer((props: React.Component<P & IHiddenInputComponentProps>) => {
        const { isArray, name }: { isArray: boolean, name: string } = props as any;

        if (name && name.length > 0 && !isArray) {
            throw new Error('Name parameter is given, but isArray is not! Did you forget to set it?');
        }
        if (isArray && (!name || name.length === 0)) {
            throw new Error('IsArray parameter is set to true, but name parameter is empty! Did you forget to set it?');
        }

        var pairs = _.pairs(store.getFormData());

        return (<>
            <Component
                {...props as any}
                Store={store}
            />
            <form method="POST">
                <HiddenInputRecursive
                    Store={store}
                    isArray={isArray}
                    namePrefix={name}
                    pairs={pairs}
                />
                <button className="btn w-full p-4 mt-4 shadow-md">
                    <span className="m-auto">Submit</span>
                </button>
            </form>
        </>);
    });
}

export default HiddenInput
