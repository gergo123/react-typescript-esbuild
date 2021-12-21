import * as React from 'react'
import { useContext } from 'react';
import _ from 'underscore'
import PeopleContext from 'people-context'

const HiddenInputRecursive = ({ pairs, namePrefix, isArray }: any) => {

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
};

// name - If the given pairs parameter is an array, this sets the name of it
// isArray - Tells the component to threat the pairs parameter as an array
//  and use the name parameter to reference it in the output
export interface IHiddenInputComponentProps {
    isArray: boolean,
    name: string,
    formData: any
}

const HiddenInput = (props: IHiddenInputComponentProps) => {
    const { isArray, name, formData } = props;

    if (name && name.length > 0 && !isArray) {
        throw new Error('Name parameter is given, but isArray is not! Did you forget to set it?');
    }
    if (isArray && (!name || name.length === 0)) {
        throw new Error('IsArray parameter is set to true, but name parameter is empty! Did you forget to set it?');
    }

    var pairs = _.pairs(formData);

    return (<HiddenInputRecursive
        isArray={isArray}
        namePrefix={name}
        pairs={pairs}
    />);
}

export default HiddenInput
